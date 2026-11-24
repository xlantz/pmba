# MGT 6051 (Part 1) + Semester 1 / Semester 2 nav — drop-in

Everything here goes in `/pmba-field-guide/` (same folder as index.html). Nothing existing is overwritten except by the script's nav rewrite.

## Files
- 6 new pages: `mgt6051-start.html` (course map, grading, schedule, exam logistics, notes strategy), `mgt6051-wk1..wk5.html` (Values; Leadership; Hiring + Historical Perspective; Onboarding & Culture; Midterm Review). Each has diagrams, glossary, flashcards, quiz. Their `assets/mgt6051-*-flashcards-data.js` / `-quiz-data.js` files are included.
- `mgt6051-mock-test.html` + `assets/mgt6051-mock-test-data.js` (128-question pool). It reuses the existing `assets/mktg-mocktest.js` engine (it reads the globals `MKTG_MOCK_POOL` / `MKTG_MOCK_LABELS`, which the new data file defines).
- `apply_semester_nav.py` and `build_mgt6051_mock.py`.

## Steps (run from /pmba-field-guide/)
1. Copy the pages and `assets/` files in.
2. `python3 build_mgt6051_mock.py .`   (regenerates the mock pool from the weekly quiz files; rerun if you edit a quiz)
3. `python3 apply_semester_nav.py .`    (`--dry-run` to preview)
4. Open index.html and a few pages (desktop hover and phone width). Commit.

## What the nav script does
- Every page's nav becomes: Home | Semester 1 ▾ | Semester 2 ▾ | page-local links (Quiz Lookup, Quiz, File Converter...).
- Semester 1's menu lists collapsible groups: MGT 6050, MGT 6051, ACCTG 6000, MKTG 6090, Mock Tests. Course links are lifted from each page's existing nav, so whatever is already in the repo (MKTG unit pages, case briefs, etc.) carries over; no links are retyped. The group containing the current page opens by default.
- Adds the MGT 6051 group and an "MGT 6051 Mock Test" entry under Mock Tests.
- Writes `semester1.html` / `semester2.html` hubs (cloned from index.html's head and footer). Semester 2 is a placeholder; add courses by editing `SEM2` (and the hub text) in the script, then rerun.
- Appends one marked block each to `assets/style.css` and `assets/app.js` (skipped if present).
- Idempotent: safe to rerun whenever pages are added. Tested on the Oct 20 site copy; second run changes nothing.
- Not changed: index.html's body (the unit-card grid still lists everything). If you want the home page grouped by semester too, that's a follow-up.

## Notes / flags for whoever edits next
- Kouzes & Posner blocks (Wk1 kp2, Wk2 kp1/kp3, Wk4 kp10) are labeled summaries built from the book's published structure (7th ed. table of contents, Five Practices/Ten Commitments), not from chapter text. Replace/extend if chapter text becomes available.
- Still not provided as text, flagged in-page: Kouzes & Posner chapter text (Ch 1, 2, 3, 10), Week 4 and Week 5 slides, the optional Coaching onboarding article, Grant podcast, STAR article. Week 4 now uses the real Schein, Thomas & Griffin and Orellana readings (the Schein and Thomas & Griffin PDFs are scans, so the page notes where OCR was rough).
- Slide chart values that were unreadable (Heath/Citibank bars, decile chart) are not charted; some figures are labeled conceptual.
- MGT 6051's AI policy is on Canvas: these are study aids only; no reflections/papers/video scripts are drafted.
