import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const path = join(root, "..", "content", "portfolio.json");
const data = JSON.parse(readFileSync(path, "utf8"));

const required = ["site", "summary", "skillGroups", "experience", "projects", "education", "nav", "cv"];

for (const key of required) {
  if (!(key in data)) {
    console.error(`Missing key: ${key}`);
    process.exit(1);
  }
}

if (!data.site.email?.includes("@")) {
  console.error("site.email looks invalid");
  process.exit(1);
}

console.log("content/portfolio.json OK");
