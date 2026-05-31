# Publish as standalone GitHub repo (optional)

Samples already live in the portfolio repo:  
https://github.com/talha-bilal/portfolio/tree/main/samples

To also show a **dedicated repo** on your GitHub profile:

1. Open https://github.com/new
2. Repository name: `trust-platform-samples`
3. Public, **no** README/license (already in this folder)
4. Create repository
5. Run:

```powershell
cd d:\Portfolio\senior\trust-platform-samples
git remote remove origin 2>$null
git remote add origin https://github.com/talha-bilal/trust-platform-samples.git
git push -u origin main
```

6. Pin the repo on your GitHub profile (Customize pins).
7. Update `content/portfolio.json` → `openSource.repo` and proof URL to:
   `https://github.com/talha-bilal/trust-platform-samples`
