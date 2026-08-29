# MGT 6050 Field Guide

A static, interactive study site for MGT 6050 (Teamwork, University of Utah PMBA). Everything runs client-side — no build step, no server, no dependencies beyond two Google Fonts loaded over CDN.

## What's here

- `index.html` — home page with the animated Team Performance Curve and a list of units.
- `unit1.html` — Unit 1 in full: a three-lens comparison table, source-by-source teaching notes (Katzenbach & Smith, the Praxis Framework, Coutu/Hackman, Duhigg/Google), a searchable vocabulary bank, a 72-card flashcard deck, and a 28-question randomized quiz.
- `assets/style.css` — all styling and design tokens.
- `assets/app.js` — all interactivity (nav, accordion, curve, glossary filter, flashcards, quiz engine).
- `assets/flashcards-data.js` — the flashcard deck (from the course's Anki export).
- `assets/quiz-data.js` — the quiz question bank.

## Deploying to GitHub Pages

1. Create a new GitHub repository (or use an existing one).
2. Copy every file in this folder into the root of that repository, keeping the `assets/` folder structure intact.
3. Commit and push:
   ```bash
   git add .
   git commit -m "Add MGT 6050 field guide site"
   git push
   ```
4. In the repository on GitHub: **Settings → Pages → Build and deployment → Source**, choose **Deploy from a branch**, pick your default branch (e.g. `main`) and the `/ (root)` folder, then **Save**.
5. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/` within a minute or two. `index.html` is picked up automatically as the home page.

No build tools, frameworks, or npm install are required — everything here is plain HTML/CSS/JS, so GitHub Pages serves it as-is, including the flashcards and quiz (they run entirely in the visitor's browser).

## Adding Unit 2 and beyond

The site is set up to grow one unit at a time:

1. Duplicate `unit1.html` as `unit2.html` and update its content (source breakdowns, glossary terms, exam angles).
2. Add the new flashcards to `assets/flashcards-data.js` (or create `assets/flashcards-data-unit2.js` and include it only on `unit2.html`) and new quiz questions to `assets/quiz-data.js` the same way.
3. Add a new `<a class="unit-card">` block to the unit grid in `index.html`, and a link in the top nav.

## Editing content

All the teaching content lives directly in the HTML (`unit1.html`) as plain markup, and the flashcard/quiz data lives in two small JS arrays — no CMS or database. Edit the text directly and refresh the page (or a local static server, e.g. `python3 -m http.server`, if you want live-reload while editing) to see changes.
