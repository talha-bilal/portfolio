# Talha Bilal — Portfolio

Professional portfolio for **Talha Bilal**, Senior Software Engineer & Technical Team Lead (Java Spring Boot, PKI, Keycloak, Java Card). Built for GitHub Pages.

**Live site:** [talha-bilal.github.io/portfolio](https://talha-bilal.github.io/portfolio/)

## Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion

## Local development

```bash
npm install
pip install -r requirements-cv.txt   # optional — regenerates resume PDF before build
npm run dev
```

## Build & deploy

```bash
npm run build    # regenerates CV PDF, then builds to dist/
npm run deploy   # publishes dist/ to gh-pages branch
```

## Resume PDF

Content lives in `scripts/generate_cv.py`. Regenerate anytime:

```bash
npm run cv
```

Output: `public/Talha_Bilal_CV.pdf` (copied into `dist/` on build).
