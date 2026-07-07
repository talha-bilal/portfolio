"""Generate resume PDF from content/portfolio.json (single source of truth)."""
import json
from pathlib import Path

try:
    from fpdf import FPDF
except ImportError:
    raise SystemExit("Run: pip install -r requirements-cv.txt")

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content" / "portfolio.json"
OUT = ROOT / "public" / "Talha_Bilal_CV.pdf"


def ascii_safe(text: str) -> str:
    replacements = {
        "\u2013": "-",
        "\u2014": "-",
        "\u00b7": "|",
        "\u2019": "'",
    }
    for src, dst in replacements.items():
        text = text.replace(src, dst)
    return text.encode("latin-1", "replace").decode("latin-1")


def load_content() -> dict:
    with CONTENT.open(encoding="utf-8") as f:
        return json.load(f)


def skills_line(data: dict) -> str:
    items = []
    for group in data["skillGroups"]:
        items.extend(group["items"])
    return ", ".join(items)


class CV(FPDF):
    def header_block(self, data: dict):
        site = data["site"]
        cv = data["cv"]
        summary_text = cv.get("summaryShort") or data["summary"]

        self.set_font("Helvetica", "B", 18)
        self.cell(0, 9, ascii_safe(site["name"]), new_x="LMARGIN", new_y="NEXT")
        self.set_font("Helvetica", "", 11)
        self.cell(0, 6, ascii_safe(site["role"]), new_x="LMARGIN", new_y="NEXT")
        self.set_font("Helvetica", "I", 9)
        self.set_text_color(60, 60, 60)
        self.cell(0, 5, ascii_safe(cv["tagline"]), new_x="LMARGIN", new_y="NEXT")
        self.set_text_color(0, 0, 0)
        self.ln(1)
        self.set_font("Helvetica", "", 9)
        for line in cv["contactLines"]:
            self.cell(0, 5, ascii_safe(line), new_x="LMARGIN", new_y="NEXT")

        availability = cv.get("availabilityLine")
        target_roles = cv.get("targetRoles")
        if availability or target_roles:
            self.ln(1)
            w = self.w - self.l_margin - self.r_margin
            self.set_text_color(20, 20, 20)
            if availability:
                self.set_font("Helvetica", "B", 9)
                self.set_x(self.l_margin)
                self.multi_cell(w, 5, ascii_safe(availability), new_x="LMARGIN", new_y="NEXT")
            if target_roles:
                self.set_font("Helvetica", "", 9)
                self.set_x(self.l_margin)
                self.multi_cell(w, 5, ascii_safe(target_roles), new_x="LMARGIN", new_y="NEXT")
            self.set_text_color(0, 0, 0)

        self.ln(2)
        self.set_font("Helvetica", "", 9)
        self.multi_cell(0, 4, ascii_safe(summary_text))
        self.ln(3)

    def section(self, title: str):
        self.set_font("Helvetica", "B", 11)
        self.set_fill_color(240, 240, 240)
        self.cell(0, 7, f"  {ascii_safe(title)}", new_x="LMARGIN", new_y="NEXT", fill=True)
        self.ln(2)

    def body_text(self, text: str):
        self.set_font("Helvetica", "", 10)
        self.multi_cell(0, 5, ascii_safe(text))
        self.ln(2)

    def bullets(self, items: list[str]):
        self.set_font("Helvetica", "", 10)
        w = self.w - self.l_margin - self.r_margin
        for item in items:
            self.set_x(self.l_margin)
            self.multi_cell(w, 5, ascii_safe(f"- {item}"))
        self.ln(1)


def main():
    data = load_content()
    edu = data["education"]

    pdf = CV()
    pdf.set_auto_page_break(auto=True, margin=14)
    pdf.add_page()
    pdf.header_block(data)

    key_strengths = data.get("cv", {}).get("keyStrengths")
    if key_strengths:
        pdf.section("KEY STRENGTHS")
        pdf.bullets(key_strengths)

    pdf.section("CORE SKILLS")
    pdf.body_text(skills_line(data))

    pdf.section("EXPERIENCE")
    for job in data["experience"]:
        heading = f"{job['company']} - {job['title']}"
        pdf.set_font("Helvetica", "B", 10)
        pdf.cell(0, 5, ascii_safe(heading), new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("Helvetica", "I", 9)
        pdf.set_text_color(80, 80, 80)
        industry = job.get("industry", "")
        period_line = f"{job['period']}" + (f" | {industry}" if industry else "")
        pdf.cell(0, 5, ascii_safe(period_line), new_x="LMARGIN", new_y="NEXT")
        pdf.set_text_color(0, 0, 0)
        pdf.bullets(job["bullets"])
        pdf.ln(1)

    pdf.section("SELECTED PROJECTS")
    featured = [p for p in data["projects"] if p.get("featured")]
    rest = [p for p in data["projects"] if not p.get("featured")]
    lines = [p.get("cvLine") or p["name"] for p in featured + rest[:3]]
    pdf.bullets(lines)

    if data.get("caseStudies"):
        pdf.section("HIGHLIGHTS")
        for cs in data["caseStudies"][:2]:
            line = f"{cs['title']}: {cs['outcome']}"
            pdf.bullets([line])

    pdf.section("EDUCATION")
    pdf.body_text(f"{edu['degree']} - {edu['school']}, {edu['year']}")

    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT))
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
