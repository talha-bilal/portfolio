"""Generate public/Talha_Bilal_CV.pdf from portfolio content."""
from pathlib import Path

try:
    from fpdf import FPDF
except ImportError:
    raise SystemExit("Run: pip install fpdf2")

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "Talha_Bilal_CV.pdf"

NAME = "Talha Bilal"
TITLE = "Senior Software Engineer & Technical Team Lead"
TAG = "Java | Spring Boot | PKI | Keycloak | Java Card | Cryptography"
CONTACT = [
    "talha.at43@gmail.com",
    "linkedin.com/in/talha-bilal-a74477154",
    "github.com/talha-bilal",
    "talha-bilal.github.io/portfolio",
]

SUMMARY = (
    "Senior engineer and technical lead with 4+ years building secure enterprise platforms "
    "on Java Spring Boot, PKI, and identity systems. Designs microservices for certificate "
    "lifecycle, digital signing, and HSM integration (AWS CloudHSM, Utimaco, SoftHSM2). "
    "Experienced in end-to-end Keycloak integration with custom SPI development, Java Card "
    "applet design, Spring Security, REST/OpenAPI, Bouncy Castle, and PKCS#11."
)

EXPERIENCE = [
    (
        "Dictalabs - Technical Team Lead (Java Spring Boot & PKI)",
        "Aug 2024 - Present",
        [
            "Lead team delivering microservices PKI and cryptographic systems.",
            "Architect HSM services for key management, signatures, and RFC 3161 timestamping.",
            "Own PKCS#11 integrations (AWS CloudHSM, SoftHSM2); improve signing reliability.",
            "Led complete Keycloak integration with custom SPI providers for platform auth flows.",
            "Develop Java Card applets for secure on-card keys and cryptographic operations.",
        ],
    ),
    (
        "Codegic - Senior Software Engineer (Java Spring Boot & PKI)",
        "Aug 2021 - Jul 2024",
        [
            "Built CA, OCSP/CRL, and certificate lifecycle management.",
            "Developed S/MIME/CMS signing and Crypto-Core microservices with HSM integration.",
            "Delivered Keycloak SSO/OIDC and custom SPI extensions for internal services.",
            "Implemented Java Card applets and host apps for smart-card issuance workflows.",
            "Implemented CI/CD, Docker, and performance tuning for production crypto services.",
        ],
    ),
]

SKILLS = (
    "Java 21/17, Spring Boot, Spring Security, Microservices, REST, OpenAPI, PKI, PKCS#11, "
    "Keycloak, OAuth 2.0, OIDC, Keycloak SPI, Java Card, GlobalPlatform, Bouncy Castle, IAIK, "
    "S/MIME, AWS CloudHSM, SoftHSM2, Docker, Jenkins, RabbitMQ, Redis, PostgreSQL, MySQL"
)

PROJECTS = [
    "Keycloak IAM Integration - realms, OIDC clients, custom SPI providers",
    "Java Card Applets - secure on-card crypto and credential operations",
    "PKI Server - CA lifecycle, OCSP/CRL, HSM-backed issuance",
    "Secure Email Signing - S/MIME/CMS with RSA & ECDSA",
    "Workflow Management - PDF signing, approvals, audit trails",
    "Timestamp Authority - RFC 3161 compliant TSA",
    "PKCS#11 Service - REST layer for enterprise HSMs",
    "Crypto-Core - Key generation, CSR signing, tenant isolation",
]

EDU = "B.S. Computer Science - KFUEIT, 2021"


class CV(FPDF):
    def header_block(self):
        self.set_font("Helvetica", "B", 18)
        self.cell(0, 9, NAME, new_x="LMARGIN", new_y="NEXT")
        self.set_font("Helvetica", "", 11)
        self.cell(0, 6, TITLE, new_x="LMARGIN", new_y="NEXT")
        self.set_font("Helvetica", "I", 9)
        self.set_text_color(60, 60, 60)
        self.cell(0, 5, TAG, new_x="LMARGIN", new_y="NEXT")
        self.set_text_color(0, 0, 0)
        self.ln(1)
        self.set_font("Helvetica", "", 9)
        for line in CONTACT:
            self.cell(0, 5, line, new_x="LMARGIN", new_y="NEXT")
        self.ln(3)

    def section(self, title: str):
        self.set_font("Helvetica", "B", 11)
        self.set_fill_color(240, 240, 240)
        self.cell(0, 7, f"  {title}", new_x="LMARGIN", new_y="NEXT", fill=True)
        self.ln(2)

    def body_text(self, text: str):
        self.set_font("Helvetica", "", 10)
        self.multi_cell(0, 5, text)
        self.ln(2)

    def bullets(self, items: list[str]):
        self.set_font("Helvetica", "", 10)
        w = self.w - self.l_margin - self.r_margin
        for item in items:
            self.set_x(self.l_margin)
            self.multi_cell(w, 5, f"- {item}")
        self.ln(1)


def main():
    pdf = CV()
    pdf.set_auto_page_break(auto=True, margin=14)
    pdf.add_page()
    pdf.header_block()

    pdf.section("PROFESSIONAL SUMMARY")
    pdf.body_text(SUMMARY)

    pdf.section("CORE SKILLS")
    pdf.body_text(SKILLS)

    pdf.section("EXPERIENCE")
    for role, period, bullets in EXPERIENCE:
        pdf.set_font("Helvetica", "B", 10)
        pdf.cell(0, 5, role, new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("Helvetica", "I", 9)
        pdf.set_text_color(80, 80, 80)
        pdf.cell(0, 5, period, new_x="LMARGIN", new_y="NEXT")
        pdf.set_text_color(0, 0, 0)
        pdf.bullets(bullets)
        pdf.ln(1)

    pdf.section("SELECTED PROJECTS")
    pdf.bullets(PROJECTS)

    pdf.section("EDUCATION")
    pdf.body_text(EDU)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT))
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
