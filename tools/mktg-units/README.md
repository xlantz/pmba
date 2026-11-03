# MKTG 6090 unit pages: build tools

The marketing section of the site is organized by weekly **unit** (`pmba-field-guide/mktg-unitN.html`). Each unit page is
generated; edit the sources here, never the generated files.

| Script | What it does |
|---|---|
| `build.py [N ...]` | Builds `mktg-unitN.html` + `assets/mktg-unitN-flashcards-data.js` + `assets/mktg-unitN-quiz-data.js`. Chapter sections are lifted from the chapter pages (`mktgN.html` and their data files) with keys prefixed `cN_` and element ids prefixed `cN-`; authored sections come from `units/uN/`. Chapter quiz options are reordered deterministically so correct answers are spread out. |
| `wire.py` | Updates the rest of the site from whatever units are built: the MKTG menu on every page, the home-page cards, the unit questions appended to the mock test, and the mock-test page wording. Chapters not fully covered by a built unit keep their own menu link and card. |
| `check.py` | Validates every unit page and the mock test: data evaluates, 4 options and valid `correctIndex`, every key labeled, balanced tags, unique ids, live anchors and local links, hero counts. |

All three are idempotent: running them twice changes nothing the second time.

## Unit sources: `units/uN/`

- `unit.py`: `META` (title, lede, week, nav label, "at a glance" HTML, quiz angles, footer, home card, and `parts`, the
  ordered list of `{"chapter": n}` / `{"chapter": n, "blocks": [...], "note": "..."}` / `{"authored": [keys]}`),
  `LABELS` for authored keys, `FLASHCARDS` as `(key, front, back)`, `QUIZ` as `(key, prompt, options, correctIndex, explanation)`.
- `blocks.html`: authored `.source-block` sections; the id is `src-` + key with `_` replaced by `-` (key `u2_math` -> `src-u2-math`).
- `glossary.html`: authored `.term-card`s with just `data-source`, `<dt>` and `<dd>`; the tag and search text are added by the build.

Key conventions: `cN_*` = textbook Chapter N; `uN_*` = Unit N slides; `uN_case` = case framework prompt; `uN_prep` = prep prompt.
Chapters 4, 12 and 13 have no chapter page, so their sections are authored in units 6, 8 and 7.

## Adding slides when they arrive (Units 7-10)

1. Read the slide text; verify every number (run the arithmetic in Python) and flag anything unreadable instead of guessing.
2. Add `uN_<topic>` sections to `units/uN/blocks.html` (explain for a novice, add a worked example and a diagram), add their
   keys to `META["parts"]` and `LABELS`, and add glossary terms, flashcards and quiz questions.
3. Update the "Slides" note in `META["glance"]` and the footer.
4. Run `python tools/mktg-units/build.py N`, then `wire.py`, then `check.py`, and test the page in a browser at 1280px and 390px.

Unit 10 (Pitch Day, no textbook chapter) has no folder yet; create `units/u10/` when its slides arrive and `wire.py` will add it
to the menu and home page.
