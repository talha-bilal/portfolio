import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const path = join(root, "..", "content", "portfolio.json");
const data = JSON.parse(readFileSync(path, "utf8"));

const required = [
  "site",
  "summary",
  "about",
  "globalWork",
  "skillGroups",
  "experience",
  "caseStudies",
  "projects",
  "openSource",
  "proof",
  "education",
  "nav",
  "cv",
  "compliance",
];

for (const key of required) {
  if (!(key in data)) {
    console.error(`Missing key: ${key}`);
    process.exit(1);
  }
}

if (!data.site.headline || !data.site.email?.includes("@")) {
  console.error("site.headline or site.email invalid");
  process.exit(1);
}

const featured = data.projects.filter((p) => p.featured);
if (featured.length < 1) {
  console.error("At least one featured project required");
  process.exit(1);
}

for (const item of data.openSource.items) {
  if (!item.url?.startsWith("https://github.com/")) {
    console.error(`openSource item missing GitHub url: ${item.name}`);
    process.exit(1);
  }
}

console.log("content/portfolio.json OK");
