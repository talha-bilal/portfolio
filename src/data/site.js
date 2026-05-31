export const site = {
  name: "Talha Bilal",
  role: "Senior Software Engineer & Technical Team Lead",
  focus: "Java · Spring Boot · PKI · Cryptography",
  location: "Pakistan (UTC+5)",
  availability: "Open to remote — full-time & contract",
  email: "talha.at43@gmail.com",
  linkedin: "https://www.linkedin.com/in/talha-bilal-a74477154",
  github: "https://github.com/talha-bilal",
  portfolio: "https://talha-bilal.github.io/portfolio/",
  cvFile: "Talha_Bilal_CV.pdf",
};

export const summary =
  "Senior engineer and technical lead with 4+ years building secure, enterprise-grade platforms on Java Spring Boot and Public Key Infrastructure. Designs microservices for certificate lifecycle, digital signing, and HSM integration (AWS CloudHSM, Utimaco, SoftHSM2). Strong in Spring Security, REST/OpenAPI, Bouncy Castle, and PKCS#11 — comfortable leading distributed teams and shipping production crypto systems end to end.";

export const skillGroups = [
  {
    label: "Backend & APIs",
    items: ["Java 21/17", "Spring Boot", "Spring Security", "AOP", "REST", "OpenAPI", "Microservices"],
  },
  {
    label: "Security & PKI",
    items: ["PKI / CA", "OCSP / CRL", "S/MIME & CMS", "PKCS#11", "Bouncy Castle", "IAIK", "RFC 3161 TSA"],
  },
  {
    label: "Infrastructure",
    items: ["AWS CloudHSM", "Utimaco", "SoftHSM2", "Docker", "Jenkins", "RabbitMQ", "Redis"],
  },
  {
    label: "Data & Tooling",
    items: ["PostgreSQL", "MySQL", "Gradle", "Maven", "Git"],
  },
];

export const highlights = [
  { value: "4+", label: "Years experience" },
  { value: "6+", label: "Production PKI products" },
  { value: "2", label: "Companies — lead & senior IC" },
];

export const experience = [
  {
    company: "Dictalabs",
    title: "Technical Team Lead — Java Spring Boot & PKI",
    period: "Aug 2024 – Present",
    location: "Remote-friendly",
    bullets: [
      "Lead engineers delivering microservices-based PKI, signing, and cryptographic platforms.",
      "Architect HSM-integrated services for key management, digital signatures, and RFC 3161 timestamping.",
      "Own PKCS#11 integrations across AWS CloudHSM and SoftHSM2; improve signing workflow reliability and latency.",
      "Partner with product and security stakeholders on roadmap, code review, and production incident response.",
    ],
  },
  {
    company: "Codegic",
    title: "Senior Software Engineer — Java Spring Boot & PKI",
    period: "Aug 2021 – Jul 2024",
    location: "On-site / hybrid",
    bullets: [
      "Built PKI infrastructure: certificate authority, OCSP/CRL responders, and full lifecycle management.",
      "Developed S/MIME/CMS email signing and Crypto-Core microservices integrated with enterprise HSMs.",
      "Integrated Bouncy Castle and IAIK with Spring Boot; established CI/CD, containers, and performance tuning.",
      "Delivered multi-tenant signing services with audit trails and compliance-oriented workflows.",
    ],
  },
];

export const projects = [
  {
    name: "PKI Server",
    desc: "End-to-end CA and certificate lifecycle platform with OCSP/CRL, HSM-backed keys, multi-tenant policies, and automated renewal.",
    tech: ["Java", "Spring Boot", "PKCS#11", "PostgreSQL", "HSM"],
  },
  {
    name: "Secure Email Signing",
    desc: "S/MIME and CMS signing and verification with RSA/ECDSA, smart certificate selection, and enterprise mail integration.",
    tech: ["Java", "Spring Boot", "Bouncy Castle", "S/MIME"],
  },
  {
    name: "Workflow Management",
    desc: "PDF signing and multi-level approvals with certificate auth, timestamping, and compliance audit trails.",
    tech: ["Spring Boot", "PDF Signing", "PKI", "Timestamping"],
  },
  {
    name: "Timestamp Authority (TSA)",
    desc: "RFC 3161 compliant timestamp service for legal and operational signing artifacts.",
    tech: ["Java", "RFC 3161", "Bouncy Castle"],
  },
  {
    name: "PKCS#11 Service",
    desc: "REST abstraction over HSMs (AWS CloudHSM, Utimaco, SoftHSM2) with session management and RBAC for signing apps.",
    tech: ["PKCS#11", "HSM", "Spring Boot"],
  },
  {
    name: "Crypto-Core",
    desc: "Central crypto microservice: key generation, CSR signing, encrypt/decrypt, and tenant-isolated key handling.",
    tech: ["Java", "Spring Boot", "Bouncy Castle", "IAIK"],
  },
];

export const education = {
  degree: "B.S. Computer Science",
  school: "KFUEIT",
  year: "2021",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
