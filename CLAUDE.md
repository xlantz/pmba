# PMBA repo — workflow

This repo (github.com/xlantz/pmba) is the source of truth for the PMBA Field Guide.
The claude.ai Project pulls from it via the GitHub integration; edits are NOT made in the Project.

Site lives in `pmba-field-guide/` (static HTML; shared JS data in `pmba-field-guide/assets/`).

When making changes:
1. `git pull --ff-only` first — other sessions (e.g. cloud Claude branches) may have pushed.
2. Edit files, then commit to `main` with the message style `update MM.DD.YY` (or a short descriptive message for larger additions).
3. `git push origin main`, then remind the user to click **Sync** in the claude.ai Project.
