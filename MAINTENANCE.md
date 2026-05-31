# Portfolio maintenance

This repo is set up so you only edit **content**, push to `main`, and GitHub Actions publishes the live site. You should not need to touch `gh-pages` or `dist/` manually.

## Branches

| Branch | Purpose |
|--------|---------|
| `main` | Source code — **work here only** |
| `gh-pages` | Auto-generated site (GitHub Actions) — **do not edit** |

## Update your portfolio (3 steps)

1. Edit **`content/portfolio.json`** — name, summary, jobs, projects, skills.
2. Preview locally:
   ```bash
   npm install
   pip install -r requirements-cv.txt
   npm run dev
   ```
3. Commit and push to `main`. Deployment runs automatically (~1–2 minutes).

Live URL: https://talha-bilal.github.io/portfolio/

## What updates automatically

- Website (React)
- Resume PDF (`public/Talha_Bilal_CV.pdf` → included in build)
- GitHub Pages (`gh-pages` branch)

## GitHub Desktop tips

- Stay on branch **`main`**.
- Ignore stashes named `!!GitHub_Desktop` unless you intentionally saved work — they are often from old branch switches.
- If you see changes in `dist/` or `public/*.pdf`, run:
  ```bash
  git restore .
  ```
  Those files are generated and should not be committed.

## Manual deploy (optional)

Only if GitHub Actions is disabled:

```bash
npm run deploy
```

## GitHub Pages settings

In the repo on GitHub: **Settings → Pages**

- Source: **Deploy from a branch**
- Branch: `gh-pages` / `/ (root)`

(If you switch to “GitHub Actions” as the source, select the **Deploy portfolio** workflow instead.)

## Content rules

- **Keycloak** experience: only under **Dictalabs** in `experience` bullets.
- **Java Card**: both companies if accurate; adjust bullets in JSON only.
- CV project lines: use each project’s `cvLine` field in `portfolio.json`.
- Avoid special Unicode in CV-facing strings when possible (PDF uses Latin-1 fonts).

## File map

```
content/portfolio.json   ← edit this (single source of truth)
src/App.jsx              ← layout and UI only
scripts/generate_cv.py   ← PDF from JSON (do not duplicate text here)
.github/workflows/       ← auto deploy on push to main
```
