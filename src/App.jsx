import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  site,
  summary,
  skillGroups,
  highlights,
  experience,
  projects,
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
    <button
      type="button"
      onClick={onToggle}
      className="btn-ghost"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
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

  return (
    <div className={shell}>
      <div className="hero-glow pointer-events-none fixed inset-0 -z-10" aria-hidden />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <button type="button" onClick={() => scrollTo("top")} className="text-left">
            <span className="font-display text-lg font-semibold tracking-tight">{site.name}</span>
            <span className={`block text-xs ${muted}`}>{site.focus}</span>
          </button>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
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
              className="btn-ghost md:hidden"
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
          <nav className="border-t border-white/5 px-5 py-3 md:hidden" aria-label="Mobile">
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <button key={item.id} type="button" onClick={() => scrollTo(item.id)} className="nav-link w-full text-left py-2">
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
        <section className="py-14 md:py-20">
          <motion.div {...fade}>
            <span className="badge">{site.availability}</span>
            <h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {site.role}
            </h1>
            <p className={`mt-4 max-w-2xl text-lg ${muted}`}>{summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${site.email}?subject=Remote%20opportunity`} className="btn-primary">
                Get in touch
              </a>
              <a href={cvUrl} className="btn-secondary" target="_blank" rel="noreferrer">
                Download resume
              </a>
              <a href={site.linkedin} className="btn-secondary" target="_blank" rel="noreferrer">
                LinkedIn <ExternalIcon />
              </a>
              <a href={site.github} className="btn-secondary" target="_blank" rel="noreferrer">
                GitHub <ExternalIcon />
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
              {highlights.map((h) => (
                <div key={h.label} className={card}>
                  <dt className={`text-xs uppercase tracking-wider ${muted}`}>{h.label}</dt>
                  <dd className="font-display mt-1 text-2xl font-semibold">{h.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </section>

        <section id="about" className="section-pad">
          <SectionTitle title="About" subtitle="What I bring to remote teams" />
          <motion.div {...fade} className={`${card} p-6 md:p-8`}>
            <p className={`leading-relaxed ${dark ? "text-slate-300" : "text-slate-700"}`}>{summary}</p>
            <p className={`mt-4 text-sm ${muted}`}>
              Based in {site.location}. Experienced collaborating across time zones, async standups, and written specs — with a track record in regulated, security-sensitive domains.
            </p>
          </motion.div>
        </section>

        <section id="experience" className="section-pad">
          <SectionTitle title="Experience" subtitle="Leadership and hands-on delivery" />
          <div className="space-y-5">
            {experience.map((exp) => (
              <motion.article key={exp.company} {...fade} className={`${card} p-6`}>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold">{exp.title}</h3>
                    <p className={`text-sm ${accent}`}>{exp.company}</p>
                  </div>
                  <div className="text-right text-sm">
                    <p className={muted}>{exp.period}</p>
                    <p className="text-xs opacity-70">{exp.location}</p>
                  </div>
                </div>
                <ul className={`mt-4 space-y-2 text-sm leading-relaxed ${dark ? "text-slate-300" : "text-slate-700"}`}>
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

        <section id="projects" className="section-pad">
          <SectionTitle title="Projects" subtitle="Production systems in PKI & signing" />
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <motion.div key={p.name} {...fade} whileHover={{ y: -4 }} className={`${card} flex flex-col p-5`}>
                <h3 className="font-display font-semibold">{p.name}</h3>
                <p className={`mt-2 flex-1 text-sm leading-relaxed ${muted}`}>{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="section-pad">
          <SectionTitle title="Skills" subtitle="Stack I use day to day" />
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400/90">Education</h3>
            <p className="mt-2">
              {education.degree} — {education.school}, {education.year}
            </p>
          </motion.div>
        </section>

        <section id="contact" className="section-pad">
          <motion.div {...fade} className={`${card} border-teal-500/20 p-8 text-center md:p-10`}>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">Let&apos;s work together</h2>
            <p className={`mx-auto mt-3 max-w-lg text-sm ${muted}`}>
              Hiring for a remote backend or security engineering role? Send a short note with the role and stack — I usually reply within 1–2 business days.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${site.email}?subject=Remote%20opportunity`} className="btn-primary">
                {site.email}
              </a>
              <a href={site.linkedin} className="btn-secondary" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} {site.name}.{" "}
          <a href={site.portfolio} className="underline-offset-2 hover:underline">
            Portfolio
          </a>
        </p>
      </footer>
    </div>
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
