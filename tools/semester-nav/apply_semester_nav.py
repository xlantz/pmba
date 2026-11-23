#!/usr/bin/env python3
"""
apply_semester_nav.py  --  regroup the PMBA Field Guide nav into Semester 1 / Semester 2.

Run from the site folder (the one containing index.html), or pass it:
    python3 apply_semester_nav.py /path/to/pmba-field-guide [--dry-run]

What it does (idempotent: safe to run again after you add pages):
  1. On every *.html that has <nav class="topnav">, rebuilds the top nav as
        Home | Semester 1 v | Semester 2 v | (page-local links, File Converter, ...)
     Semester 1's menu holds one collapsible group per course (MGT 6050, MGT 6051,
     ACCTG 6000, MKTG 6090, Mock Tests). The course links are NOT retyped: they are lifted
     out of whatever nav the page already has, so any pages you or Claude Code added since
     (mktg-unit*.html, case pages, ...) carry over automatically.
  2. Adds an "MGT 6051" group (from mgt6051-*.html in the folder) if the nav doesn't have one,
     and a "MGT 6051 Mock Test" link in the Mock Tests group if mgt6051-mock-test.html exists.
  3. Writes semester1.html and semester2.html hub pages (cloned from index.html's head/footer).
  4. Appends a small, marked CSS block to assets/style.css and a small JS block to assets/app.js
     (both skipped if already present).

To add a Semester-2 course later: add an entry to SEM2 below and re-run.
"""
import os, re, sys, html

ROOT = os.path.abspath(next((a for a in sys.argv[1:] if not a.startswith('--')), '.'))
DRY = '--dry-run' in sys.argv

# ---- editable config --------------------------------------------------------------------
MGT6051_PAGES = [  # (file, nav label)
    ('mgt6051-start.html', 'Start here &mdash; Course map &amp; midterm logistics'),
    ('mgt6051-wk1.html', 'Week 1 &mdash; Values'),
    ('mgt6051-wk2.html', 'Week 2 &mdash; Leadership'),
    ('mgt6051-wk3.html', 'Week 3 &mdash; Hiring &amp; Historical Perspective'),
    ('mgt6051-wk4.html', 'Week 4 &mdash; Onboarding &amp; Culture'),
    ('mgt6051-wk5.html', 'Week 5 &mdash; Midterm Review'),
]
MGT6051_MOCK = ('mgt6051-mock-test.html', 'MGT 6051 Mock Test')
SEM2 = [  # (file, nav label)  -- extend as spring materials arrive
    ('semester2.html', 'Semester 2 overview'),
    ('semester2.html#mgt6051-part2', 'MGT 6051 Part 2 (coming)'),
]
COURSE_BLURBS = {
    'MGT 6050': ('Teamwork', 'Team dynamics, psychological safety, conflict, fairness and innovation.'),
    'MGT 6051': ('Managing &amp; Leading in Organizations, Part 1', 'Values, leadership, hiring, onboarding &amp; culture, plus the Kouzes &amp; Posner framework and the 12/1 midterm.'),
    'ACCTG 6000': ('Financial Accounting', 'From the accounting cycle through revenue, inventory, liabilities, equity, investments and cash flows.'),
    'MKTG 6090': ('Marketing Management', 'Chapters, units and case briefs for strategy, segmentation, brands, growth and global markets.'),
    'Mock Tests': ('Mock tests', 'Randomized multiple-choice tests drawn from every course&rsquo;s question bank.'),
}
# ------------------------------------------------------------------------------------------

NAV_RE = re.compile(r'(<nav class="topnav">)(.*?)(</nav>)', re.S)


def split_top_level(inner):
    """Split nav inner HTML into top-level items: ('a', html) or ('div', html)."""
    items, i, n = [], 0, len(inner)
    tag = re.compile(r'<(/?)(div|a)\b[^>]*>', re.S)
    while i < n:
        m = re.compile(r'<(a|div)\b').search(inner, i)
        if not m:
            break
        kind, start = m.group(1), m.start()
        depth, pos = 0, start
        for t in tag.finditer(inner, start):
            if t.group(2) != kind:
                continue
            depth += -1 if t.group(1) else 1
            if depth == 0:
                pos = t.end()
                break
        items.append((kind, inner[start:pos]))
        i = pos
    return items


def parse_old_dropdown(block):
    lm = re.search(r'<a href="([^"]*)" class="nav-dropdown-label([^"]*)">(.*?)</a>', block, re.S)
    inner = re.search(r'<div class="nav-dropdown-menu-inner">(.*?)</div>\s*</div>\s*</div>\s*$', block, re.S)
    links = inner.group(1).strip() if inner else ''
    return dict(label=lm.group(3).strip(), href=lm.group(1), links=links,
                active=' active' in lm.group(2))


def parse_sem_dropdown(block):
    groups = []
    for d in re.finditer(r'<details class="nav-group"([^>]*)>\s*<summary>(.*?)</summary>\s*<div class="nav-group-links">(.*?)</div>\s*</details>', block, re.S):
        href = re.search(r'data-href="([^"]*)"', d.group(1))
        groups.append(dict(label=d.group(2).strip(), href=href.group(1) if href else '', links=d.group(3).strip(), active=bool(re.search(r'\bopen\b', d.group(1)))))
    return groups


def hrefs(links):
    return re.findall(r'href="([^"#]*)', links)


def strip_indent(links):
    return '\n'.join(l.strip() for l in links.strip().splitlines() if l.strip())


def build_group(g, here):
    is_current = g['active'] or here in hrefs(g['links'])
    first = g['href'] or (hrefs(g['links']) or [''])[0]
    lines = strip_indent(g['links']).splitlines()
    body = '\n'.join('              ' + l for l in lines)
    return (f'          <details class="nav-group" data-href="{first}"{" open" if is_current else ""}>\n'
            f'            <summary>{g["label"]}</summary>\n'
            f'            <div class="nav-group-links">\n{body}\n            </div>\n'
            f'          </details>'), is_current


def mgt6051_group(root):
    links = []
    for f, lab in MGT6051_PAGES:
        if os.path.exists(os.path.join(root, f)):
            links.append(f'<a href="{f}">{lab}</a>')
    return dict(label='MGT 6051', href='mgt6051-start.html', links='\n'.join(links), active=False) if links else None


def rebuild_nav(inner, here, root):
    items = split_top_level(inner)
    groups, extras, toggle_seen = [], [], False
    for kind, h in items:
        if kind == 'div' and 'nav-semester' in h:
            if 'data-sem="1"' in h:
                groups += parse_sem_dropdown(h)
        elif kind == 'div' and 'class="nav-dropdown"' in h:
            groups.append(parse_old_dropdown(h))
        elif kind == 'a':
            href = re.search(r'href="([^"]*)"', h).group(1)
            if href in ('index.html',) or href.startswith('semester'):
                continue
            extras.append(h)
    # add MGT 6051 group
    if not any(g['label'] == 'MGT 6051' for g in groups):
        g = mgt6051_group(root)
        if g:
            idx = next((i for i, x in enumerate(groups) if x['label'] == 'MGT 6050'), -1)
            groups.insert(idx + 1, g)
    else:  # refresh its links from disk so new weekly pages appear
        g = mgt6051_group(root)
        if g:
            for i, x in enumerate(groups):
                if x['label'] == 'MGT 6051':
                    groups[i] = dict(g, active=x['active'])
    # mock-test link
    mf, ml = MGT6051_MOCK
    if os.path.exists(os.path.join(root, mf)):
        for g in groups:
            if g['label'] == 'Mock Tests' and mf not in g['links']:
                g['links'] = g['links'].rstrip() + f'\n<a href="{mf}">{ml}</a>'
    # Mock Tests last
    groups.sort(key=lambda g: g['label'] == 'Mock Tests')

    built = [build_group(g, here) for g in groups]
    sem1_current = here == 'semester1.html' or any(c for _, c in built)
    sem2_current = here == 'semester2.html'
    sem2_links = '\n'.join(f'            <a href="{f}">{l}</a>' for f, l in SEM2)

    def drop(sem, href, label, body, cur):
        return (f'      <div class="nav-dropdown nav-semester" data-sem="{sem}">\n'
                f'        <a href="{href}" class="nav-dropdown-label{" active" if cur else ""}">{label}</a>\n'
                f'        <button class="nav-caret" aria-expanded="false" aria-label="Show {label} courses">&#9662;</button>\n'
                f'        <div class="nav-dropdown-menu">\n          <div class="nav-dropdown-menu-inner">\n{body}\n          </div>\n        </div>\n'
                f'      </div>')

    sem1_body = '          <a class="nav-sem-overview" href="semester1.html">Semester 1 overview</a>\n' + '\n'.join(b for b, _ in built)
    parts = ['      <a href="index.html">Home</a>',
             drop(1, 'semester1.html', 'Semester 1', sem1_body, sem1_current),
             drop(2, 'semester2.html', 'Semester 2', sem2_links, sem2_current)]
    parts += ['      ' + e for e in extras]
    return '\n' + '\n'.join(parts) + '\n    ', groups


CSS_MARK = '/* ---- semester-nav (apply_semester_nav.py) ---- */'
CSS = CSS_MARK + '''
.nav-semester .nav-dropdown-menu{ min-width: 300px; }
.nav-semester .nav-dropdown-menu-inner{ max-height: 78vh; overflow-y:auto; overscroll-behavior: contain; }
.nav-sem-overview{ font-weight:600; border-bottom:1px solid var(--paper-3); margin-bottom:4px; }
.nav-group{ border-bottom:1px solid var(--paper-3); }
.nav-group:last-child{ border-bottom:none; }
.nav-group > summary{
  list-style:none; cursor:pointer; display:flex; align-items:center; justify-content:space-between;
  padding: 10px 16px; font-family: var(--font-mono); font-size:.78rem; font-weight:600;
  text-transform:uppercase; letter-spacing:.04em; color: var(--blue-deep, var(--text-soft));
}
.nav-group > summary::-webkit-details-marker{ display:none; }
.nav-group > summary::after{ content:"\\25BE"; font-size:.7rem; transition: transform .15s ease; color: var(--text-soft); }
.nav-group[open] > summary::after{ transform: rotate(180deg); }
.nav-group > summary:hover{ background: var(--paper-2); color: var(--rust-deep); }
.nav-group-links{ padding: 0 0 6px 10px; border-left:2px solid var(--paper-3); margin: 0 0 6px 16px; }
.nav-group-links a{ padding: 7px 12px; font-size:.74rem; }
@media (max-width: 1040px){
  .nav-semester .nav-dropdown-menu-inner{ max-height:none; overflow:visible; }
  .nav-group > summary{ padding: 12px 14px; }
}
.sem-hub-note{ font-family: var(--font-mono); font-size:.78rem; color: var(--text-soft); }
'''

JS_MARK = '/* ---- semester-nav groups (apply_semester_nav.py) ---- */'
JS = JS_MARK + '''
document.addEventListener('DOMContentLoaded', () => {
  const groups = document.querySelectorAll('.nav-group');
  groups.forEach(g => {
    // taps inside the menu must not trigger the document-level "close dropdowns" handler
    g.addEventListener('click', e => e.stopPropagation());
  });
});
'''


def append_once(path, mark, block):
    if not os.path.exists(path):
        print('  ! missing', path); return
    s = open(path, encoding='utf-8').read()
    if mark in s:
        return
    if not DRY:
        open(path, 'w', encoding='utf-8').write(s.rstrip('\n') + '\n\n' + block)
    print('  + appended block to', os.path.relpath(path, ROOT))


def hub_page(index_html, kind, groups):
    head = index_html.split('<section class="hero">')[0]
    foot = '<footer' + index_html.split('<footer', 1)[1]
    title = 'Semester 1' if kind == 1 else 'Semester 2'
    head = re.sub(r'<title>.*?</title>', f'<title>{title} — PMBA Field Guide</title>', head, flags=re.S)
    head = re.sub(r'<meta name="description" content=".*?">', f'<meta name="description" content="{title} courses and study guides in the PMBA Field Guide.">', head, flags=re.S)
    if kind == 1:
        cards = []
        for g in groups:
            nm, blurb = COURSE_BLURBS.get(g['label'], (g['label'], ''))
            n = len(hrefs(g['links']))
            first = g['href'] or (hrefs(g['links']) or [''])[0]
            cards.append(f'''      <a class="unit-card" href="{first}">
        <span class="eyebrow">{g['label']}</span>
        <h3>{nm}</h3>
        <p>{blurb}</p>
        <div class="tag-row"><span class="tag">{n} pages</span></div>
      </a>''')
        body = f'''<section class="hero">
  <div class="wrap" style="grid-template-columns:1fr;">
    <div>
      <span class="eyebrow">Fall 2026</span>
      <h1>Semester 1</h1>
      <p class="lede" style="max-width:62ch;">Everything for your first semester in one place: MGT 6050, MGT 6051 (Part 1), ACCTG 6000, MKTG 6090 and the mock tests. Open a course, or use the Semester 1 menu in the top bar.</p>
    </div>
  </div>
</section>

<main id="main">
  <div class="wrap section">
    <div class="unit-grid">
{chr(10).join(cards)}
    </div>
  </div>
</main>

'''
    else:
        body = '''<section class="hero">
  <div class="wrap" style="grid-template-columns:1fr;">
    <div>
      <span class="eyebrow">Spring 2027</span>
      <h1>Semester 2</h1>
      <p class="lede" style="max-width:62ch;">Space for next semester. Courses get added here as the readings and slides arrive.</p>
    </div>
  </div>
</section>

<main id="main">
  <div class="wrap section">
    <div class="unit-grid">
      <div class="unit-card" id="mgt6051-part2" style="cursor:default;">
        <span class="eyebrow">MGT 6051 &#x00b7; Part 2</span>
        <h3>Managing &amp; Leading in Organizations, Part 2</h3>
        <p>MGT 6051 runs across both semesters (1.5 units each). Part 1 lives under Semester 1. According to the syllabus, the spring half includes the Better Know a Leader group paper (the plan is due 12/3); the full Part 2 schedule hasn&rsquo;t been shared yet.</p>
        <div class="tag-row"><span class="tag">Materials pending</span></div>
      </div>
      <div class="unit-card" style="cursor:default;">
        <span class="eyebrow">More courses</span>
        <h3>Your spring lineup</h3>
        <p>Send the syllabi and readings and each course gets its own menu group under Semester 2.</p>
        <div class="tag-row"><span class="tag">Coming</span></div>
      </div>
    </div>
  </div>
</main>

'''
    return head + body + foot


def main():
    pages = sorted(f for f in os.listdir(ROOT) if f.endswith('.html'))
    last_groups, changed = [], 0
    for f in pages:
        p = os.path.join(ROOT, f)
        s = open(p, encoding='utf-8').read()
        m = NAV_RE.search(s)
        if not m:
            continue
        new_inner, groups = rebuild_nav(m.group(2), f, ROOT)
        last_groups = groups
        ns = s[:m.start(2)] + new_inner + s[m.end(2):]
        if ns != s:
            changed += 1
            if not DRY:
                open(p, 'w', encoding='utf-8').write(ns)
    print(f'nav rebuilt on {changed} pages')

    idx = os.path.join(ROOT, 'index.html')
    if os.path.exists(idx) and last_groups:
        ihtml = open(idx, encoding='utf-8').read()
        for k in (1, 2):
            out = os.path.join(ROOT, f'semester{k}.html')
            page = hub_page(ihtml, k, last_groups)
            # give the hub pages the same new nav
            m = NAV_RE.search(page)
            if m:
                ni, _ = rebuild_nav(m.group(2), f'semester{k}.html', ROOT)
                page = page[:m.start(2)] + ni + page[m.end(2):]
            if not DRY:
                open(out, 'w', encoding='utf-8').write(page)
        print('hub pages written: semester1.html, semester2.html')
    append_once(os.path.join(ROOT, 'assets', 'style.css'), CSS_MARK, CSS)
    append_once(os.path.join(ROOT, 'assets', 'app.js'), JS_MARK, JS)


if __name__ == '__main__':
    main()
