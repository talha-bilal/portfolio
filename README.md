# Talha Bilal — Portfolio

Professional portfolio and resume for **Talha Bilal** — Senior Software Engineer & Technical Team Lead (Java Spring Boot, PKI, Keycloak, Java Card).

**Live site:** [talha-bilal.github.io/portfolio](https://talha-bilal.github.io/portfolio/)

## How this repo works

- **`main`** holds source code only (no build artifacts).
- Pushing to **`main`** triggers [GitHub Actions](.github/workflows/deploy.yml) to build and publish to **`gh-pages`**.
- All portfolio text lives in one file: [`content/portfolio.json`](content/portfolio.json).

See **[MAINTENANCE.md](MAINTENANCE.md)** for day-to-day updates and GitHub Desktop guidance.

## Stack

- React 18 + Vite
- Tailwind CSS + Framer Motion
- Resume PDF via Python ([fpdf2](requirements-cv.txt))

## Local development

```bash
npm install
pip install -r requirements-cv.txt
npm run dev
```

Open http://localhost:5173/portfolio/

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Local preview |
| `npm run validate` | Check `portfolio.json` structure |
| `npm run cv` | Regenerate resume PDF only |
| `npm run build` | Validate, generate CV, build `dist/` |
| `npm run deploy` | Manual publish (CI is preferred) |

## Project structure

```
content/portfolio.json    # Profile data (edit this)
src/                      # React UI
public/                   # Static assets (favicon; PDF is generated)
scripts/                  # CV generator and validators
.github/workflows/        # Auto deploy
```

## License

Personal portfolio — all rights reserved.
