#!/usr/bin/env python3
"""Build the MKTG 6090 weekly unit pages (mktg-unitN.html) for the PMBA Field Guide.

Each unit is described by tools/mktg-units/units/uN/:
  unit.py        META (title, lede, parts, ...), LABELS, FLASHCARDS, QUIZ for authored sections
  blocks.html    authored .source-block sections (slides, case prompt, chapters with no page)
  glossary.html  authored .term-card entries (dt/dd only; tag and data-search are added here)

Chapter content is lifted from the existing chapter pages (mktgN.html + their data files), with
source keys prefixed cN_ and element ids prefixed so several chapters can share one page.

    python tools/mktg-units/build.py            # build every unit that has a folder
    python tools/mktg-units/build.py 2 5        # build only units 2 and 5

Output is deterministic: re-running without source changes rewrites identical files.
Run wire.py afterwards to update the nav, home page and mock test.
"""
import html, json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SITE = os.path.join(ROOT, 'pmba-field-guide')
UNITS = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'units')


def read(p):
    with open(p, encoding='utf-8') as f:
        return f.read()


def write(p, s):
    old = read(p) if os.path.exists(p) else None
    if old != s:
        with open(p, 'w', encoding='utf-8', newline='\n') as f:
            f.write(s)
        return True
    return False


def node_consts(path, names):
    code = ("const vm=require('vm'),fs=require('fs');const ctx={};vm.createContext(ctx);"
            "const names=JSON.parse(process.argv[2]);"
            "vm.runInContext(fs.readFileSync(process.argv[1],'utf8')+';this.__o={'+names.map(n=>n+':(typeof '+n+'!==\"undefined\"?'+n+':null)').join(',')+'}',ctx);"
            "process.stdout.write(JSON.stringify(ctx.__o));")
    return json.loads(subprocess.check_output(['node', '-e', code, path, json.dumps(names)]).decode('utf-8'))


def outer_div(s, start):
    """Return the end index of the <div ...> element starting at `start` (balanced div count)."""
    depth, i = 0, start
    tag = re.compile(r'<(/?)div\b[^>]*>')
    for m in tag.finditer(s, start):
        depth += -1 if m.group(1) else 1
        if depth == 0:
            return m.end()
    raise ValueError('unbalanced div at %d' % start)


def blocks_of(s):
    """Map key -> outer HTML of each .source-block (id="src-key")."""
    out = {}
    for m in re.finditer(r'<div class="source-block" id="src-([^"]+)"[^>]*>', s):
        out[m.group(1)] = s[m.start():outer_div(s, m.start())]
    return out


def cards_of(s):
    """List of (key, outer HTML) for each glossary .term-card, in page order."""
    out = []
    for m in re.finditer(r'<div class="term-card" data-source="([^"]+)"', s):
        out.append((m.group(1), s[m.start():outer_div(s, m.start())]))
    return out


def text_of(fragment):
    return html.unescape(re.sub(r'<[^>]+>', ' ', fragment))


# ---------------------------------------------------------------- chapter sources
_chapters = {}


def chapter(n):
    if n in _chapters:
        return _chapters[n]
    page = read(os.path.join(SITE, f'mktg{n}.html'))
    fc = node_consts(os.path.join(SITE, f'assets/mktg{n}-flashcards-data.js'), ['FLASHCARDS', 'SOURCE_LABELS'])
    qz = node_consts(os.path.join(SITE, f'assets/mktg{n}-quiz-data.js'), ['QUIZ_QUESTIONS'])
    title = html.unescape(re.search(r'<h1>(.*?)</h1>', page, re.S).group(1)).strip()
    _chapters[n] = dict(page=page, title=title, blocks=blocks_of(page), cards=cards_of(page),
                        labels=fc['SOURCE_LABELS'], flashcards=fc['FLASHCARDS'], quiz=qz['QUIZ_QUESTIONS'])
    return _chapters[n]


def prefix_ids(block, pre, chapter_page=None):
    """Prefix every id in `block` with `pre-` (src-x -> src-pre-x) and rewrite references to them."""
    ids = re.findall(r'\sid="([^"]+)"', block)
    def new(i):
        return f'src-{pre}-{i[4:]}' if i.startswith('src-') else f'{pre}-{i}'
    mapping = {i: new(i) for i in ids}
    block = re.sub(r'(\sid=")([^"]+)(")', lambda m: m.group(1) + mapping.get(m.group(2), m.group(2)) + m.group(3), block)
    block = re.sub(r'(aria-(?:labelledby|describedby)=")([^"]+)(")',
                   lambda m: m.group(1) + ' '.join(mapping.get(t, t) for t in m.group(2).split()) + m.group(3), block)
    block = re.sub(r'url\(#([^)]+)\)', lambda m: f'url(#{mapping.get(m.group(1), m.group(1))})', block)

    def href(m):
        attr, target = m.group(1), m.group(2)
        if target in mapping:
            return f'{attr}="#{mapping[target]}"'
        if target.startswith('src-') and chapter_page:   # section left out of a partial chapter
            return f'{attr}="{chapter_page}#{target}"'
        return m.group(0)
    return re.sub(r'((?:xlink:)?href)="#([^"]+)"', href, block)


ORDER_WORDS = re.compile(r'\b(all|none|both|neither) of (the )?(above|these|them)\b|^(both|all of|none of|a and b|b and c)\b', re.I)


def shuffled_options(q):
    """Chapter quizzes put most answers in position B; reorder options deterministically (seeded by
    the prompt) unless an option depends on its position ("all of the above", "both", ...)."""
    if any(ORDER_WORDS.search(o) for o in q['options']):
        return q
    import hashlib, random
    order = list(range(len(q['options'])))
    random.Random(hashlib.sha1(q['prompt'].encode('utf-8')).hexdigest()).shuffle(order)
    return dict(q, options=[q['options'][i] for i in order], correctIndex=order.index(q['correctIndex']))


def retag(block, number, badge_html):
    block = re.sub(r'<span class="num">\d+</span>', f'<span class="num">{number:02d}</span>', block, count=1)
    block = re.sub(r'(<span class="stitle">.*?</h3>)(\s*<span class="tier[^"]*">.*?</span>)?',
                   lambda m: m.group(1) + ' ' + badge_html, block, count=1, flags=re.S)
    return block


# ---------------------------------------------------------------- unit build
def esc(s):
    return html.escape(s, quote=True)


def group_of(key):
    m = re.match(r'c(\d+)_', key)
    if m:
        return f'c{m.group(1)}_', f'Ch {m.group(1)}'
    m = re.match(r'u(\d+)_', key)
    if m:
        return f'u{m.group(1)}_', f'Unit {m.group(1)} slides & case'
    raise ValueError(key)


def badge(key):
    if re.match(r'c\d+_', key):
        return f'<span class="tier tier-know">Ch {re.match(r"c(\d+)_", key).group(1)}</span>'
    if key.endswith('_case'):
        return '<span class="tier tier-deep">Case prompt</span>'
    if key.endswith('_prep'):
        return '<span class="tier tier-deep">Prep prompt</span>'
    return f'<span class="tier tier-test">Unit {re.match(r"u(\d+)_", key).group(1)} slides</span>'


def load_unit(n):
    d = os.path.join(UNITS, f'u{n}')
    ns = {}
    exec(compile(read(os.path.join(d, 'unit.py')), f'u{n}/unit.py', 'exec'), ns)
    ns['BLOCKS'] = blocks_of(read(os.path.join(d, 'blocks.html')))
    ns['GLOSSARY'] = cards_of(read(os.path.join(d, 'glossary.html')))
    return ns


def build(n):
    u = load_unit(n)
    M = u['META']
    labels, flash, quiz, blocks, cards, refs = {}, [], [], [], [], []

    for part in M['parts']:
        if 'chapter' in part:
            c, ch = part['chapter'], chapter(part['chapter'])
            keys = part.get('blocks') or list(ch['blocks'])
            refs.append((c, ch['title'], part.get('note')))
            for k in keys:
                pk = f'c{c}_{k}'
                labels[pk] = f'Ch {c} · {ch["labels"][k]}'
                blocks.append((pk, prefix_ids(ch['blocks'][k], f'c{c}', f'mktg{c}.html')))
                for ck, card in ch['cards']:
                    if ck == k:
                        cards.append((pk, card))
                flash += [dict(f, source=pk) for f in ch['flashcards'] if f['source'] == k]
                quiz += [shuffled_options(dict(q, source=pk)) for q in ch['quiz'] if q['source'] == k]
        else:
            for pk in part['authored']:
                labels[pk] = u['LABELS'][pk]
                blocks.append((pk, u['BLOCKS'][pk.replace('_', '-')]))
                cards += [(k, c) for k, c in u['GLOSSARY'] if k == pk]
                flash += [dict(source=k, front=f, back=b) for k, f, b in u['FLASHCARDS'] if k == pk]
                quiz += [dict(source=k, prompt=p, options=o, correctIndex=ci, correctFeedback='Correct.',
                              incorrectFeedback='Not quite.', explanation=e)
                         for k, p, o, ci, e in u['QUIZ'] if k == pk]

    # ---- sections
    walk = []
    for i, (pk, b) in enumerate(blocks, 1):
        walk.append(retag(b, i, badge(pk)).replace(' class="source-block open"', ' class="source-block"'))

    groups = []
    for pk in labels:
        g = group_of(pk)
        if g not in groups:
            groups.append(g)

    # ---- glossary
    gl = []
    for pk, card in cards:
        card = re.sub(r'data-source="[^"]*"', f'data-source="{pk}"', card, count=1)
        lab = labels[pk]
        if '<span class="tag">' in card:
            card = re.sub(r'<span class="tag">.*?</span>', f'<span class="tag">{esc(lab)}</span>', card, count=1, flags=re.S)
        else:
            card = card[:card.rfind('</div>')].rstrip() + f'<span class="tag">{esc(lab)}</span>\n      </div>'
        m = re.search(r'data-search="([^"]*)"', card)
        extra = ' ' + group_of(pk)[1].lower()
        if m:
            card = card.replace(m.group(0), f'data-search="{m.group(1)}{esc(extra)}"', 1)
        else:
            body = re.sub(r'\s+', ' ', text_of(card)).strip().lower()
            card = card.replace(f'data-source="{pk}"', f'data-source="{pk}" data-search="{esc(body + extra)}"', 1)
        gl.append('      ' + card.strip())

    chips = ['        <button class="chip active" data-source="all">All</button>']
    chips += [f'        <button class="chip" data-source="{g}*">{esc(lab)}</button>' for g, lab in groups]
    opts = ['        <option value="all">All categories</option>']
    for g, lab in groups:
        opts.append(f'        <optgroup label="{esc(lab)}">')
        opts.append(f'          <option value="{g}*">All of {esc(lab)}</option>')
        for pk, l in labels.items():
            if pk.startswith(g):
                opts.append(f'          <option value="{pk}">{esc(l.split(" · ", 1)[-1])}</option>')
        opts.append('        </optgroup>')

    ref_items = ''.join(
        f'<li><a href="mktg{c}.html">Chapter {c}: {esc(t)}</a>{" &mdash; " + note if note else ""}</li>'
        for c, t, note in refs)
    ref_box = ('' if not refs else
               '\n    <div class="callout" style="border-left-color: var(--crimson);">\n'
               '      <p style="margin:0 0 6px;"><strong>Chapter reference pages.</strong> The textbook sections below are '
               'copied from these full chapter pages, which keep their own flashcards and quizzes:</p>\n'
               f'      <ul style="margin:0;">{ref_items}</ul>\n    </div>')

    head = read(os.path.join(SITE, 'mktg1.html'))
    header = head[head.index('<a class="skip-link"'):head.index('</header>') + len('</header>')]
    page = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MKTG 6090, Unit {n}: {esc(M["title_plain"])} — PMBA Field Guide</title>
<meta name="description" content="{esc(M["description"])}">
<link rel="stylesheet" href="assets/style.css">
</head>
<body class="theme-mktg">
{header}

<section class="hero" style="padding-bottom:48px;">
  <div class="wrap" style="grid-template-columns:1fr;">
    <div>
      <span class="eyebrow">MKTG 6090 &#x00b7; Unit {n} &#x00b7; Week {M["week"]}</span>
      <h1>{M["title"]}</h1>
      <p class="lede" style="max-width:70ch;">{M["lede"]}</p>
      <div class="hero-stats">
        <div class="hero-stat"><b>{len(flash)}</b><span>Flashcards</span></div>
        <div class="hero-stat"><b>{len(quiz)}</b><span>Quiz questions</span></div>
        <div class="hero-stat"><b>{len(gl)}</b><span>Quiz lookup terms</span></div>
      </div>
    </div>
  </div>
</section>

<main id="main">

  <!-- ============ THIS WEEK ============ -->
  <div class="wrap section" style="padding-top:0;">
    <div class="section-head">
      <span class="eyebrow">Start here</span>
      <h2>This week at a glance</h2>
    </div>
    <div class="callout">
{M["glance"].strip()}
    </div>{ref_box}
  </div>

  <!-- ============ TEACHING CONTENT ============ -->
  <div class="wrap section" style="padding-top:0;">
    <div class="section-head">
      <span class="eyebrow">Walk the material</span>
      <h2>{M["walk_heading"]}</h2>
    </div>

    {(chr(10) + chr(10) + "    ").join(w.strip() for w in walk)}
  </div>

  <!-- ============ GLOSSARY ============ -->
  <div class="wrap section" id="glossary">
    <div class="section-head">
      <span class="eyebrow">Reference</span>
      <h2>Quiz lookup table</h2>
      <p class="text-soft">Term &rarr; one-line answer. Search, or filter by chapter or slides &mdash; keep this open during the timed, open-book quiz.</p>
    </div>

    <div class="glossary-controls">
      <input type="search" id="glossary-search" placeholder="Search terms or definitions&#x2026;" aria-label="Search glossary">
      <div class="chip-filter" role="group" aria-label="Filter glossary by source">
{chr(10).join(chips)}
      </div>
    </div>
    <div class="glossary-count" id="glossary-count"></div>

    <dl class="glossary-grid" id="glossary-grid">
{chr(10).join(gl)}
    </dl>
  </div>

  <!-- ============ FLASHCARDS ============ -->
  <div class="wrap section" id="flashcards-section">
    <div class="section-head">
      <span class="eyebrow">Drill</span>
      <h2>Flashcards</h2>
      <p class="text-soft">Filter to one chapter or section, shuffle, and flip through &mdash; click the card or press Enter/Space to flip.</p>
    </div>

    <div class="flash-controls">
      <label for="flash-source" class="text-soft" style="font-family:var(--font-mono); font-size:.78rem;">Category:</label>
      <select id="flash-source">
{chr(10).join(opts)}
      </select>
      <button class="btn ghost" id="flash-shuffle">Shuffle</button>
    </div>

    <div class="flash-stage" id="flash-stage">
      <div class="flashcard" id="flashcard" tabindex="0" role="button" aria-label="Flashcard, click to flip">
        <div class="flashcard-inner">
          <div class="flashcard-face front">
            <span class="fc-label">Question</span>
            <p></p>
          </div>
          <div class="flashcard-face back">
            <span class="fc-label">Answer</span>
            <p></p>
          </div>
        </div>
      </div>
      <div class="flash-nav">
        <button class="btn ghost" id="flash-prev">&#x2190; Prev</button>
        <span class="flash-meta" id="flash-meta"></span>
        <button class="btn ghost" id="flash-next">Next &#x2192;</button>
      </div>
    </div>
  </div>

  <!-- ============ QUIZ ============ -->
  <div class="wrap section" id="quiz">
    <div class="section-head">
      <span class="eyebrow">Test yourself</span>
      <h2>Unit {n} quiz</h2>
      <p class="text-soft">{len(quiz)} questions across every section on this page, randomized each attempt, with an explanation after every answer.</p>
    </div>

    <div class="quiz-shell" id="quiz-shell">
      <div class="quiz-progress"><div class="quiz-progress-bar" id="quiz-progress-bar"></div></div>
      <div class="quiz-meta" id="quiz-meta">Ready when you are</div>
      <div id="quiz-start-screen" style="text-align:center; padding: 30px 10px;">
        <p class="text-soft">{M["quiz_blurb"]}</p>
        <button class="btn crimson" id="quiz-start">Start quiz</button>
      </div>
      <div id="quiz-body" style="display:none;"></div>
    </div>
  </div>

  <!-- ============ EXAM ANGLES ============ -->
  <div class="wrap section">
    <div class="section-head">
      <span class="eyebrow">Before the quiz</span>
      <h2>Likely quiz angles</h2>
    </div>
    <div class="callout">
      <ul style="margin:0;">
{chr(10).join("        <li>" + a + "</li>" for a in M["angles"])}
      </ul>
    </div>
  </div>

</main>

<footer class="footer">
  <div class="wrap">
    <p>{M["footer"]}</p>
  </div>
</footer>

<script src="assets/mktg-unit{n}-flashcards-data.js"></script>
<script src="assets/mktg-unit{n}-quiz-data.js"></script>
<script src="assets/app.js"></script>
</body>
</html>
'''
    gen = '// Generated by tools/mktg-units/build.py from the chapter data files and tools/mktg-units/units/u%d. Do not edit by hand.\n' % n
    fdata = (gen + 'const FLASHCARDS = ' + json.dumps(flash, indent=2, ensure_ascii=False) + ';\n\n'
             'const SOURCE_LABELS = ' + json.dumps(labels, indent=2, ensure_ascii=False) + ';\n')
    qdata = gen + 'const QUIZ_QUESTIONS = ' + json.dumps(quiz, indent=2, ensure_ascii=False) + ';\n'
    changed = [p for p, s in ((f'mktg-unit{n}.html', page),
                              (f'assets/mktg-unit{n}-flashcards-data.js', fdata),
                              (f'assets/mktg-unit{n}-quiz-data.js', qdata))
               if write(os.path.join(SITE, p), s)]
    print(f'Unit {n}: {len(blocks)} sections, {len(gl)} terms, {len(flash)} flashcards, {len(quiz)} quiz '
          f'-> {"changed: " + ", ".join(changed) if changed else "no changes"}')


if __name__ == '__main__':
    wanted = [int(a) for a in sys.argv[1:]] or sorted(
        int(d[1:]) for d in os.listdir(UNITS) if re.fullmatch(r'u\d+', d))
    for n in wanted:
        build(n)
