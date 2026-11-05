# Joseph Poremba — personal website

Plain HTML and CSS with no build step. GitHub Pages serves the files as they are.

## Files

| File | What it is |
|---|---|
| `index.html` | About page: role, bio, photo, research interests, contact, birding pop-up |
| `publications.html` | Publications, grouped by year |
| `cv.html` | CV page with the PDF embedded and Open/Download buttons |
| `assets/style.css` | All styling. Colours, fonts, and sizes are tokens at the top |
| `assets/site.js` | Photo pop-up behaviour (the only JavaScript on the site) |
| `assets/photo.jpg` | Profile photo |
| `assets/birding.jpg` | Birding photo (has copyright metadata embedded) |
| `assets/cv.pdf` | Your CV |
| `assets/favicon.svg` | Browser-tab icon |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Common edits

**Bio, interests, contact** — `index.html`. Each section is marked with a `<!-- ===== … ===== -->` comment.

**Add a paper** — `publications.html` has a commented template near the top. Copy it into the right year's list.
- Topic tag: `tag tag-tcs` (TCS) or `tag tag-fm` (Formal Methods).
- Forthcoming papers: add `<span class="tag tag-forthcoming">To appear</span>`; delete it once published.
- Wrap your name in `<span class="me">…</span>` to bold it.

**New CV** — replace `assets/cv.pdf` (keep the filename) and update "Last updated" in `cv.html`.

**Change the colours or fonts** — edit section 1 of `assets/style.css`. The light theme is in `:root`; the dark theme overrides the same tokens just below it.

**Add another tab** — copy `cv.html`, change its `<title>` and content, then add the link to the `<nav>` in *all* pages (the header is repeated in each file). Mark the current tab with `aria-current="page"`.

**Add another photo pop-up** — copy the `<dialog class="lightbox">` block at the bottom of `index.html`, give it a new `id`, and add `data-lightbox="that-id"` to the button or link that should open it.

**New year** — update the `© 2026` footer in each of the three pages.

## Deploy to GitHub Pages

1. Create a repo named `<your-github-username>.github.io`.
2. Upload everything in this folder, including the hidden `.nojekyll`, to the repo root.
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
4. The site is live at `https://<your-github-username>.github.io` within a minute or two.

To preview locally: run `python3 -m http.server` in this folder and open http://localhost:8000.
