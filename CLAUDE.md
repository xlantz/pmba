# PMBA repo — workflow

This repo (github.com/xlantz/pmba) is the source of truth for the PMBA Field Guide.
The claude.ai Project pulls from it via the GitHub integration; edits are NOT made in the Project.

Site lives in `pmba-field-guide/` (static HTML; shared JS data in `pmba-field-guide/assets/`).

When making changes:
1. `git pull --ff-only` first — other sessions (e.g. cloud Claude branches) may have pushed.
2. Edit files, then commit to `main` with the message style `update MM.DD.YY` (or a short descriptive message for larger additions).
3. `git push origin main`, then remind the user to click **Sync** in the claude.ai Project.

## Zip drops from claude.ai
The user often builds pages in claude.ai chat and attaches the downloaded zip (e.g. `pmba-field-guide (12).zip`)
here. Its root matches `pmba-field-guide/` (HTML files at top level, plus `assets/`). To apply one:
1. `git pull --ff-only`, then extract the zip to a temp folder (not into the repo).
2. Compare against `pmba-field-guide/` with `git diff --no-index --stat --ignore-cr-at-eol`. Most files differ only
   in line endings (zip is LF, repo is CRLF); ignore those.
3. Look at the real diffs. If the zip *removes* content that's on GitHub (e.g. work pushed from another session),
   stop and ask before overwriting. Otherwise copy only the genuinely changed/new files.
4. If the zip is missing files that exist in the repo, do NOT delete them unless the user says so.
5. Commit (`update MM.DD.YY` + a one-line summary of what changed), push, summarize the changes for the user, and
   remind them to Sync the Project.
