export const site = {
  name: "Talha Bilal",
  role: "Senior Software Engineer & Technical Team Lead",
  focus: "Java · Spring Boot · PKI · Keycloak · Java Card",
  location: "Pakistan (UTC+5)",
  availability: "Open to full-time & contract opportunities",
  email: "talha.at43@gmail.com",
  linkedin: "https://www.linkedin.com/in/talha-bilal-a74477154",
  github: "https://github.com/talha-bilal",
  portfolio: "https://talha-bilal.github.io/portfolio/",
  cvFile: "Talha_Bilal_CV.pdf",
};

export const summary =
  "Senior engineer and technical lead with 4+ years building secure, enterprise-grade platforms on Java Spring Boot, Public Key Infrastructure, and identity systems. Designs microservices for certificate lifecycle, digital signing, and HSM integration (AWS CloudHSM, Utimaco, SoftHSM2). Experienced in end-to-end Keycloak deployments with custom SPI development, Java Card applet design, Spring Security, REST/OpenAPI, Bouncy Castle, and PKCS#11 — from smart-card edge crypto to centralized IAM.";

export const skillGroups = [
  {
    label: "Backend & APIs",
    items: ["Java 21/17", "Spring Boot", "Spring Security", "AOP", "REST", "OpenAPI", "Microservices"],
  },
  {
    label: "Security, PKI & IAM",
    items: [
      "PKI / CA",
      "OCSP / CRL",
      "S/MIME & CMS",
      "PKCS#11",
      "Keycloak",
      "OAuth 2.0 / OIDC",
      "Keycloak SPI",
      "Bouncy Castle",
      "IAIK",
      "RFC 3161 TSA",
    ],
  },
  {
    label: "Java Card & HSM",
    items: ["Java Card", "Smart Card Applets", "GlobalPlatform", "APDU", "AWS CloudHSM", "Utimaco", "SoftHSM2"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "Jenkins", "RabbitMQ", "Redis", "PostgreSQL", "MySQL", "Gradle", "Maven", "Git"],
  },
];

export const highlights = [
  { value: "4+", label: "Years experience" },
  { value: "8+", label: "Production systems" },
  { value: "2", label: "Companies — lead & senior IC" },
];

export const experience = [
  {
    company: "Dictalabs",
    title: "Technical Team Lead — Java Spring Boot & PKI",
    period: "Aug 2024 – Present",
    location: "Pakistan",
    bullets: [
      "Lead engineers delivering microservices-based PKI, signing, and cryptographic platforms.",
      "Architect HSM-integrated services for key management, digital signatures, and RFC 3161 timestamping.",
      "Own PKCS#11 integrations across AWS CloudHSM and SoftHSM2; improve signing workflow reliability and latency.",
      "Led complete Keycloak integration: realms, clients, flows, and custom SPI providers for auth and platform-specific behavior.",
      "Develop Java Card applets for secure on-card operations (keys, signing primitives, and card-managed credentials).",
      "Partner with product and security stakeholders on roadmap, code review, and production incident response.",
    ],
  },
  {
    company: "Codegic",
    title: "Senior Software Engineer — Java Spring Boot & PKI",
    period: "Aug 2021 – Jul 2024",
    location: "Pakistan",
    bullets: [
      "Built PKI infrastructure: certificate authority, OCSP/CRL responders, and full lifecycle management.",
      "Developed S/MIME/CMS email signing and Crypto-Core microservices integrated with enterprise HSMs.",
      "Integrated Bouncy Castle and IAIK with Spring Boot; established CI/CD, containers, and performance tuning.",
      "Delivered Keycloak-based SSO and OIDC for internal services; extended Keycloak with custom SPI modules.",
      "Implemented Java Card applets and host applications for smart-card issuance and secure crypto workflows.",
      "Delivered multi-tenant signing services with audit trails and compliance-oriented workflows.",
    ],
  },
];

export const projects = [
  {
    name: "Keycloak IAM Integration",
    desc: "End-to-end Keycloak rollout: realm design, OIDC/OAuth clients, identity brokering, and custom SPI providers for authentication, user storage, and protocol extension tailored to PKI-backed login.",
    tech: ["Keycloak", "OAuth 2.0", "OIDC", "Java", "Custom SPI", "Spring Boot"],
  },
  {
    name: "Java Card Applets",
    desc: "Secure Java Card applet suite for credential storage, cryptographic operations, and card-resident key usage — integrated with host tools and issuance pipelines via GlobalPlatform lifecycle.",
    tech: ["Java Card", "GlobalPlatform", "APDU", "Smart Cards", "PKI"],
  },
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
