#!/usr/bin/env python3
"""Sanity checks for the MKTG unit pages and the mock-test data.

    python tools/mktg-units/check.py        # check every built mktg-unitN.html

Checks: data files evaluate in node; every quiz item has 4 options and correctIndex 0-3; every
flashcard/quiz/glossary source has a label; tags balance (div, section, table, svg, figure, button,
ul, dl); ids are unique; in-page anchors resolve; local links point at existing files; the mock-test
pool evaluates and every source in it has a label. Exits non-zero on any failure.
"""
import glob, os, re, sys
from collections import Counter
from html.parser import HTMLParser

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from build import SITE, node_consts, read  # noqa: E402

TRACK = {'div', 'section', 'table', 'svg', 'figure', 'button', 'ul', 'dl', 'main', 'select', 'optgroup'}
problems = []


class Balance(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack, self.errors, self.ids = [], [], []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            self.ids.append(a['id'])
        if tag in TRACK:
            self.stack.append((tag, self.getpos()))

    def handle_startendtag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            self.ids.append(a['id'])

    def handle_endtag(self, tag):
        if tag in TRACK:
            if not self.stack or self.stack[-1][0] != tag:
                self.errors.append(f'unexpected </{tag}> at line {self.getpos()[0]} (open: {self.stack[-1] if self.stack else None})')
            else:
                self.stack.pop()


def check_page(p):
    name = os.path.basename(p)
    s = read(p)
    bp = Balance()
    bp.feed(s)
    problems.extend(f'{name}: {e}' for e in bp.errors[:5])
    if bp.stack:
        problems.append(f'{name}: unclosed {bp.stack[-3:]}')
    dup = [i for i, c in Counter(bp.ids).items() if c > 1]
    if dup:
        problems.append(f'{name}: duplicate ids {dup[:8]}')
    ids = set(bp.ids)
    for ref in re.findall(r'href="#([^"]+)"', s):
        if ref not in ids:
            problems.append(f'{name}: dead in-page link #{ref}')
    for ref in re.findall(r'aria-(?:labelledby|describedby)="([^"]+)"', s):
        for t in ref.split():
            if t not in ids:
                problems.append(f'{name}: aria reference to missing id {t}')
    for ref in re.findall(r'(?:href|src)="([^"#:]+\.(?:html|js|css))(?:#([^"]*))?"', s):
        f, anchor = ref
        fp = os.path.join(SITE, f)
        if not os.path.exists(fp):
            problems.append(f'{name}: link to missing file {f}')
        elif anchor and f'id="{anchor}"' not in read(fp):
            problems.append(f'{name}: link to missing anchor {f}#{anchor}')
    return s


def check_unit(n):
    p = os.path.join(SITE, f'mktg-unit{n}.html')
    s = check_page(p)
    if 'id="quiz-shell"' not in s:   # a unit without drill sections (e.g. Unit 10)
        print(f'unit {n}: no drill sections, {s.count("class=\"source-block\"")} sections')
        return
    fc = node_consts(os.path.join(SITE, f'assets/mktg-unit{n}-flashcards-data.js'), ['FLASHCARDS', 'SOURCE_LABELS'])
    qz = node_consts(os.path.join(SITE, f'assets/mktg-unit{n}-quiz-data.js'), ['QUIZ_QUESTIONS'])
    L = fc['SOURCE_LABELS']
    for f in fc['FLASHCARDS']:
        if f['source'] not in L or not f['front'].strip() or not f['back'].strip():
            problems.append(f'unit {n}: bad flashcard {f["front"][:40]!r}')
    spread = Counter()
    for q in qz['QUIZ_QUESTIONS']:
        ok = (q['source'] in L and len(q['options']) == 4 and 0 <= q['correctIndex'] <= 3
              and len(set(q['options'])) == 4 and q.get('explanation'))
        spread[q['correctIndex']] += 1
        if not ok:
            problems.append(f'unit {n}: bad quiz item {q["prompt"][:50]!r}')
    for src in re.findall(r'class="term-card" data-source="([^"]+)"', s):
        if src not in L:
            problems.append(f'unit {n}: glossary source without label {src}')
    for v in re.findall(r'data-source="([^"]+)"', s) + re.findall(r'<option value="([^"]+)"', s):
        if v != 'all' and not v.endswith('*') and v not in L:
            problems.append(f'unit {n}: filter value without label {v}')
    for b, *_ in [m for m in re.findall(r'<b>(\d+)</b><span>(Flashcards|Quiz questions|Quiz lookup terms)', s)]:
        pass
    stats = dict(re.findall(r'<b>(\d+)</b><span>([^<]+)</span>', s))
    want = {str(len(fc['FLASHCARDS'])): 'Flashcards', str(len(qz['QUIZ_QUESTIONS'])): 'Quiz questions',
            str(s.count('class="term-card"')): 'Quiz lookup terms'}
    for v, k in want.items():
        if stats.get(v) != k:
            problems.append(f'unit {n}: hero stat for {k} does not match ({stats})')
    print(f'unit {n}: {len(fc["FLASHCARDS"])} cards, {len(qz["QUIZ_QUESTIONS"])} quiz '
          f'(answer positions {dict(sorted(spread.items()))}), {s.count("class=\"term-card\"")} terms, '
          f'{s.count("<figure class=\"diagram")} diagrams')


def check_mock():
    p = os.path.join(SITE, 'assets/mktg-mock-test-data.js')
    o = node_consts(p, ['MKTG_MOCK_POOL', 'MKTG_MOCK_LABELS'])
    missing = sorted({q['source'] for q in o['MKTG_MOCK_POOL']} - set(o['MKTG_MOCK_LABELS']))
    if missing:
        problems.append(f'mock test: sources without labels {missing}')
    bad = [q['prompt'][:40] for q in o['MKTG_MOCK_POOL'] if len(q['options']) != 4 or not 0 <= q['correctIndex'] <= 3]
    if bad:
        problems.append(f'mock test: malformed items {bad[:3]}')
    print(f'mock test: {len(o["MKTG_MOCK_POOL"])} questions, {len(o["MKTG_MOCK_LABELS"])} labels')
    check_page(os.path.join(SITE, 'mktg-mock-test.html'))


if __name__ == '__main__':
    units = sorted(int(re.search(r'(\d+)', os.path.basename(p)).group(1))
                   for p in glob.glob(os.path.join(SITE, 'mktg-unit*.html')))
    for n in units:
        check_unit(n)
    check_mock()
    check_page(os.path.join(SITE, 'index.html'))
    if problems:
        print('\nPROBLEMS:')
        for pr in problems:
            print(' -', pr)
        sys.exit(1)
    print('\nAll checks passed.')
