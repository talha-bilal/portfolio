import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Default export React component for portfolio
export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const toggleDark = () => setDark((d) => !d);

  const site = {
    name: "Talha Bilal",
    title: "Senior Software Engineer (Java Spring Boot & PKI)",
    tagline: "Java Spring Boot | PKI | Cryptography",
    email: "talha.at43@gmail.com",
    linkedin: "https://www.linkedin.com/in/talha-bilal-a74477154",
    cvLink: "/portfolio/assets/Talha_Bilal_CV.pdf",
  };

  const skills = [
    "Java (21/17)",
    "Spring Boot",
    "Spring Security",
    "AOP",
    "RESTful APIs",
    "OpenAPI",
    "Microservices",
    "Bouncy Castle",
    "IAIK",
    "PKCS#11",
    "AWS CloudHSM",
    "Utimaco",
    "SoftHSM2",
    "RabbitMQ",
    "Redis",
    "Docker",
    "Jenkins",
    "Gradle / Maven",
    "PostgreSQL",
    "MySQL",
  ];

  const experience = [
    {
      company: "Dictalabs",
      title: "Technical Team Lead (Java Spring Boot & PKI)",
      period: "AUG 2024 – Present",
      bullets: [
        "Lead team delivering secure, microservices-based PKI and cryptographic systems.",
        "Architected HSM-integrated services for key management, digital signatures, and timestamping.",
        "Oversaw PKCS#11 integrations across AWS CloudHSM and SoftHSM2 environments.",
        "Improved reliability and performance of signing workflows.",
      ],
    },
    {
      company: "Codegic",
      title: "Senior Software Engineer (Java Spring Boot & PKI)",
      period: "AUG 2021 – JULY 2024",
      bullets: [
        "Built PKI infrastructure: CA, OCSP/CRL responders, certificate lifecycle management.",
        "Developed secure email signing (S/MIME/CMS) and Crypto-Core microservices.",
        "Integrated Bouncy Castle and IAIK with Spring Boot microservices and HSMs.",
        "Implemented CI/CD pipelines, containerization, and performance tuning.",
      ],
    },
  ];

  const projects = [
    {
      name: "PKI Server",
      desc:
        "End-to-end Certificate Authority and lifecycle management platform. Features OCSP/CRL, HSM-backed key storage, multi-tenant issuance policies, and automatic renewal workflows.",
      tech: ["Java", "Spring Boot", "PKCS#11", "OCSP", "CRL", "PostgreSQL", "HSM"],
    },
    {
      name: "Secure Email Signing Server",
      desc:
        "S/MIME and CMS-based signing and verification service with support for RSA and ECDSA, automated certificate selection, and integration with enterprise mail systems.",
      tech: ["Java", "Spring Boot", "Bouncy Castle", "S/MIME"],
    },
    {
      name: "Workflow Management System",
      desc:
        "Secure PDF signing and multi-level approval flows with certificate-based authentication, timestamping, and full audit trails for compliance.",
      tech: ["Spring Boot", "PDF Signing", "Timestamping", "PKI"],
    },
    {
      name: "Timestamp Server (TSA)",
      desc: "RFC 3161 compliant Timestamp Authority for verifiable timestamps used across signing services and legal artifacts.",
      tech: ["Java", "RFC 3161", "Bouncy Castle"],
    },
    {
      name: "PKCS#11 Service",
      desc:
        "RESTful abstraction layer for HSMs (AWS CloudHSM, Utimaco, SoftHSM2) providing secure key ops, session management, and role-based access controls for signing services.",
      tech: ["PKCS#11", "HSM", "Spring Boot"],
    },
    {
      name: "Crypto-Core",
      desc:
        "Centralized cryptographic microservice handling key generation, CSR signing, encryption/decryption, and in-memory key isolation for multi-tenant systems.",
      tech: ["Java", "Spring Boot", "Bouncy Castle", "IAIK"],
    },
  ];

  return (
    <div className={dark ? "min-h-screen bg-slate-900 text-slate-100" : "min-h-screen bg-white text-slate-900"}>
      <div className="max-w-5xl mx-auto p-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold">{site.name}</h1>
            <p className="text-sm opacity-80">{site.title}</p>
            <p className="text-xs mt-1 text-green-300">{site.tagline}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              className="px-3 py-1 rounded-lg border border-slate-700 hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {dark ? "Dark" : "Light"}
            </button>

            <a href={site.cvLink} className="px-3 py-1 rounded-lg bg-green-400 text-slate-900 font-medium" target="_blank" rel="noreferrer">
              Download CV
            </a>
          </div>
        </header>

        <main className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <aside className="md:col-span-1 space-y-6">
            <section className="p-4 rounded-2xl bg-slate-800/50">
              <h3 className="font-semibold mb-2">Contact</h3>
              <p className="text-sm">📧 <a href={`mailto:${site.email}`} className="underline">{site.email}</a></p>
              <p className="text-sm">🔗 <a href={site.linkedin} target="_blank" rel="noreferrer" className="underline">LinkedIn</a></p>
            </section>

            <section className="p-4 rounded-2xl bg-slate-800/50">
              <h3 className="font-semibold mb-2">Core Skills</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {skills.map((s) => (
                  <span key={s} className="inline-block bg-slate-700/40 px-2 py-1 rounded">
                    {s}
                  </span>
                ))}
              </div>
            </section>

            <section className="p-4 rounded-2xl bg-slate-800/50">
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-sm">BS in Computer Science — KFUEIT, 2021</p>
            </section>
          </aside>

          {/* Right Column */}
          <section className="md:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-2xl bg-slate-800/40">
              <h2 className="text-xl font-semibold">Professional Summary</h2>
              <p className="mt-2 text-sm leading-relaxed">
                Senior Software Engineer and Technical Team Lead with over 4 years of experience architecting and delivering secure, enterprise-grade systems using Java Spring Boot and Public Key Infrastructure (PKI). Specialized in designing microservices architectures, developing cryptographic services, and integrating with HSM platforms (AWS CloudHSM, Utimaco, SoftHSM2). Skilled in Spring Security, AOP, RESTful APIs, and OpenAPI, with hands-on expertise in Bouncy Castle and IAIK libraries.
              </p>
            </motion.div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Experience</h3>
              {experience.map((exp) => (
                <motion.article key={exp.company} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="p-4 rounded-2xl bg-slate-800/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{exp.title}</h4>
                      <p className="text-sm opacity-80">{exp.company} • {exp.period}</p>
                    </div>
                  </div>
                  <ul className="mt-3 list-disc list-inside text-sm">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((p) => (
                  <motion.div whileHover={{ y: -6 }} key={p.name} className="p-4 rounded-2xl bg-slate-800/40">
                    <h4 className="font-semibold">{p.name}</h4>
                    <p className="text-sm mt-2">{p.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-slate-700/30">{t}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/40">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p className="text-sm mb-3">Interested in collaborating or hiring? Send a short note — I typically respond via email.</p>
              <a className="inline-block bg-green-400 text-slate-900 px-4 py-2 rounded" href={`mailto:${site.email}`}>Email Me</a>
            </div>
          </section>
        </main>

        <footer className="mt-8 text-center text-xs opacity-70">
          © {new Date().getFullYear()} {site.name}. Built with React + Tailwind.
        </footer>
      </div>

      {/* Floating theme label */}
      <AnimatePresence>
        {dark ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed right-4 bottom-4 p-2 rounded-full bg-slate-800/60 text-sm">
            Dark mode
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
