import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LinkCard, LinkCardGrid } from "./components/LinkCards";
import {
  site,
  summary,
  about,
  globalWork,
  skillGroups,
  highlights,
  compliance,
  experience,
  caseStudies,
  projects,
  openSource,
  proof,
  education,
  nav,
} from "./data/site";

const fade = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45 },
};

function ThemeToggle({ dark, onToggle }) {
  return (
    <button type="button" onClick={onToggle} className="btn-ghost" aria-label="Toggle theme">
      {dark ? (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}

function ExternalIcon() {
  return (
    <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

const featuredProjects = [...projects].filter((p) => p.featured);
const otherProjects = [...projects].filter((p) => !p.featured);

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const cvUrl = `${import.meta.env.BASE_URL}${site.cvFile}`;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const shell = dark
    ? "min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500/30"
    : "min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-600/20";

  const card = dark ? "card-dark" : "card-light";
  const muted = dark ? "text-slate-400" : "text-slate-600";
  const accent = dark ? "text-teal-400" : "text-teal-700";
  const body = dark ? "text-slate-300" : "text-slate-700";

  return (
    <div className={shell}>
      <div className="hero-glow pointer-events-none fixed inset-0 -z-10" aria-hidden />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <button type="button" onClick={() => scrollTo("top")} className="text-left">
            <span className="font-display text-lg font-semibold tracking-tight">{site.name}</span>
            <span className={`block text-xs ${muted}`}>{site.focus}</span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <button key={item.id} type="button" onClick={() => scrollTo(item.id)} className="nav-link">
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle dark={dark} onToggle={() => setDark((d) => !d)} />
            <a href={cvUrl} className="btn-primary hidden sm:inline-flex" target="_blank" rel="noreferrer">
              Resume
            </a>
            <button
              type="button"
              className="btn-ghost lg:hidden"
              aria-expanded={menuOpen}
              aria-label="Open menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth={1.5} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/5 px-5 py-3 lg:hidden" aria-label="Mobile">
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <button key={item.id} type="button" onClick={() => scrollTo(item.id)} className="nav-link w-full py-2 text-left">
                  {item.label}
                </button>
              ))}
              <a href={cvUrl} className="btn-primary mt-2 justify-center" target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5 pb-16">
        {/* Hero */}
        <section className="py-14 md:py-20">
          <motion.div {...fade}>
            <span className="badge">{site.availability}</span>
            <p className={`mt-5 text-sm font-medium uppercase tracking-widest ${accent}`}>{site.role}</p>
            <h1 className="font-display mt-2 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {site.headline}
            </h1>
            <p className={`mt-4 max-w-2xl text-lg ${muted}`}>{summary}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {site.languages?.map((lang) => (
                <span key={lang} className="tech-pill text-xs">
                  {lang}
                </span>
              ))}
            </div>

            <div className="hero-actions mt-8">
              <motion.a
                href={`mailto:${site.email}?subject=Engineering%20opportunity`}
                className="btn-primary btn-motion"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in touch
              </motion.a>
              <motion.a
                href={cvUrl}
                className="btn-secondary btn-motion"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Download resume
              </motion.a>
              <motion.a
                href={site.linkedin}
                className="btn-secondary btn-motion"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                LinkedIn <ExternalIcon />
              </motion.a>
              <motion.a
                href={openSource.repo}
                className="btn-secondary btn-motion"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Code samples <ExternalIcon />
              </motion.a>
            </div>

            <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className={card}>
                  <dt className={`text-xs uppercase tracking-wider ${muted}`}>{h.label}</dt>
                  <dd className="font-display mt-1 text-2xl font-semibold">{h.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="section-pad">
          <SectionTitle title="About" subtitle="What I do and where I fit" />
          <motion.div {...fade} className={`${card} space-y-4 p-6 md:p-8`}>
            {about.paragraphs.map((p) => (
              <p key={p} className={`leading-relaxed ${body}`}>
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {about.domains.map((d) => (
                <span key={d} className="tech-pill">
                  {d}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div {...fade} className={`${card} mt-4 p-6`}>
            <h3 className="font-display text-lg font-semibold">{globalWork.title}</h3>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              {globalWork.items.map((item) => (
                <div key={item.label}>
                  <dt className={`text-xs font-semibold uppercase tracking-wider ${accent}`}>{item.label}</dt>
                  <dd className={`mt-1 text-sm ${body}`}>{item.detail}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div {...fade} className="mt-6">
            <h3 className="font-display mb-4 text-lg font-semibold">{proof.title}</h3>
            <LinkCardGrid>
              {proof.items.map((item) => (
                <LinkCard
                  key={item.label}
                  href={item.internal ? cvUrl : item.url}
                  title={item.label}
                  description={item.detail}
                  icon={item.icon}
                  cta={item.cta || "Open"}
                  variant={item.icon === "repo" ? "primary" : "default"}
                />
              ))}
            </LinkCardGrid>
          </motion.div>

          <motion.div {...fade} className="mt-8">
            <h3 className="font-display mb-4 text-lg font-semibold">{openSource.title}</h3>
            <LinkCardGrid className="lg:grid-cols-3">
              {openSource.items.map((sample) => (
                <LinkCard
                  key={sample.name}
                  href={sample.url || `${openSource.repo}/tree/main/${sample.path}`}
                  title={sample.name}
                  description={sample.detail}
                  icon={sample.icon || "repo"}
                  cta="View sample"
                />
              ))}
            </LinkCardGrid>
            <motion.a
              href={openSource.repo}
              className="btn-primary btn-motion mt-4 inline-flex"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Browse full repository <ExternalIcon />
            </motion.a>
          </motion.div>
        </section>

        {/* Case studies */}
        <section id="case-studies" className="section-pad">
          <SectionTitle title="Case studies" subtitle="Problem → approach → outcome" />
          <div className="space-y-5">
            {caseStudies.map((cs) => (
              <motion.article key={cs.id} {...fade} className={`${card} p-6 md:p-8`}>
                <h3 className="font-display text-xl font-semibold">{cs.title}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <CaseBlock label="Problem" text={cs.problem} body={body} muted={muted} />
                  <CaseBlock label="My role" text={cs.role} body={body} muted={muted} />
                  <CaseBlock label="Approach" text={cs.approach} body={body} muted={muted} />
                  <CaseBlock label="Outcome" text={cs.outcome} body={body} muted={muted} accent={accent} />
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cs.tech.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section-pad">
          <SectionTitle title="Experience" subtitle="5+ years in PKI & signing" />
          <div className="space-y-5">
            {experience.map((exp) => (
              <motion.article key={exp.company} {...fade} className={`${card} p-6`}>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold">{exp.title}</h3>
                    <p className={`text-sm font-medium ${accent}`}>{exp.company}</p>
                    <p className={`mt-1 text-xs ${muted}`}>{exp.industry}</p>
                  </div>
                  <div className="text-right text-sm">
                    <p className={muted}>{exp.period}</p>
                    <p className="text-xs opacity-70">{exp.location}</p>
                  </div>
                </div>
                <ul className={`mt-4 space-y-2 text-sm leading-relaxed ${body}`}>
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dark ? "bg-teal-400" : "bg-teal-600"}`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section-pad">
          <SectionTitle title="Projects" subtitle="Featured production systems" />
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} card={`${card} card-featured`} muted={muted} featured />
            ))}
          </div>
          <h3 className={`mb-4 mt-10 text-sm font-semibold uppercase tracking-wider ${muted}`}>More systems</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {otherProjects.map((p) => (
              <ProjectCard key={p.id} project={p} card={card} muted={muted} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section-pad">
          <SectionTitle title="Skills" subtitle="Technical stack" />
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((g) => (
              <motion.div key={g.label} {...fade} className={`${card} p-5`}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400/90">{g.label}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s}>
                      <span className="tech-pill">{s}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div {...fade} className={`${card} mt-4 p-5`}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400/90">Compliance & assurance</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {compliance.map((c) => (
                <li key={c}>
                  <span className="tech-pill">{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fade} className={`${card} mt-4 p-5`}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400/90">Education</h3>
            <p className="mt-2">
              {education.degree} — {education.school}, {education.year}
            </p>
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-pad">
          <motion.div {...fade} className={`${card} border-teal-500/20 p-8 text-center md:p-10`}>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">Let&apos;s work together</h2>
            <p className={`mx-auto mt-3 max-w-lg text-sm ${muted}`}>
              Hiring for PKI, IAM, digital signing, or security-focused backend roles? Email role, stack, and timezone —
              I reply within 1–2 business days.
            </p>
            <p className={`mx-auto mt-2 text-xs ${muted}`}>{site.location}</p>
            <div className="hero-actions mt-6 justify-center">
              <motion.a
                href={`mailto:${site.email}?subject=Engineering%20opportunity`}
                className="btn-primary btn-motion"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {site.email}
              </motion.a>
              <motion.a
                href={site.linkedin}
                className="btn-secondary btn-motion"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href={cvUrl}
                className="btn-secondary btn-motion"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.focus}
        </p>
      </footer>
    </div>
  );
}

function CaseBlock({ label, text, body, muted, accent }) {
  return (
    <div>
      <h4 className={`text-xs font-semibold uppercase tracking-wider ${accent || muted}`}>{label}</h4>
      <p className={`mt-1 text-sm leading-relaxed ${body}`}>{text}</p>
    </div>
  );
}

function ProjectCard({ project, card, muted, featured }) {
  return (
    <motion.div whileHover={{ y: -4 }} className={`${card} flex flex-col p-5`}>
      {featured && <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal-400">Featured</span>}
      <h3 className="font-display font-semibold">{project.name}</h3>
      <p className={`mt-1 text-xs font-medium ${muted}`}>{project.impact}</p>
      <p className={`mt-2 flex-1 text-sm leading-relaxed ${muted}`}>{project.desc}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="tech-pill">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
    </div>
  );
}
