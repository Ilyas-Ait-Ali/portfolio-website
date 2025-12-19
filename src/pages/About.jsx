import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../contexts/LanguageContext";
import about from "../i18n/about";
import { Link } from "react-router-dom";

export default function About() {
  const { lang } = useLang();
  const t = about[lang];

  return (
    <motion.section
      className="min-h-screen px-6 pt-24 pb-16 bg-slate-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="relative">
        {/* Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[980px] h-[980px] rounded-full bg-blue-500/12 blur-3xl dark:bg-blue-400/10" />
        <div className="pointer-events-none absolute top-40 left-10 w-[520px] h-[520px] rounded-full bg-indigo-500/8 blur-3xl dark:bg-indigo-400/10" />
        {/* Texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.35)_1px,transparent_1px)] [background-size:18px_18px]" />

        <Content t={t} />
      </div>
    </motion.section>
  );
}

function Content({ t }) {
  const { lang } = useLang();

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Centered About Me */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`about-hero-${lang}`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            {t.heading}
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {t.intro}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* 2-column */}
      <div className="grid lg:grid-cols-12 gap-10">
        {/* LEFT: Skills + CTA (sticky) */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24 space-y-10">
            <SkillsPanel t={t} />

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`cta-${lang}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <Link
                  to="/projects"
                  className="
                    inline-flex w-full items-center justify-center
                    px-6 py-3 rounded-xl
                    bg-blue-600 text-white hover:bg-blue-700
                    shadow-[0_14px_28px_rgba(37,99,235,0.18)]
                    hover:shadow-[0_16px_34px_rgba(37,99,235,0.22)]
                    dark:shadow-none
                    transition
                  "
                >
                  {t.viewProjects}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT: Experience */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.h2
                key={`exp-title-${lang}`}
                className="text-2xl md:text-3xl font-semibold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                {t.experienceTitle}
              </motion.h2>
            </AnimatePresence>
            <div className="flex-1 h-px bg-slate-200 dark:bg-gray-700" />
          </div>

          <ExperienceTimeline items={t.experience} />
        </div>
      </div>
    </div>
  );
}

/* ================= Skills ================= */

function SkillsPanel({ t }) {
  const { lang } = useLang();

  return (
    <section>
      <div
        className="
          rounded-2xl overflow-hidden
          border border-slate-200/80 dark:border-gray-700/70
          bg-slate-100/70 dark:bg-gray-900/60
          shadow-[0_12px_30px_rgba(0,0,0,0.06)]
          dark:shadow-none
          backdrop-blur
        "
      >
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
          <AnimatePresence mode="wait" initial={false}>
            <motion.h2
              key={`skills-title-${lang}`}
              className="text-white text-xl md:text-2xl font-semibold tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {t.skillsTitle}
            </motion.h2>
          </AnimatePresence>
        </div>

        <div className="grid gap-6 p-6">
          {Object.entries(t.skills).map(([category, items], idx) => (
            <div
              key={idx}
              className="
                rounded-xl p-4
                border border-slate-200/70 dark:border-gray-800
                bg-white/70 dark:bg-gray-900/40
                shadow-[0_6px_16px_rgba(0,0,0,0.05)]
                dark:shadow-none
              "
            >
              <div className="flex items-center gap-3 mb-3">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={`skill-cat-${lang}-${idx}-${category}`}
                    className="text-blue-700 dark:text-blue-400 font-semibold"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {category}
                  </motion.span>
                </AnimatePresence>
                <div className="flex-1 h-px bg-slate-200 dark:bg-gray-800" />
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`skill-items-${lang}-${idx}-${category}`}
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {items.map((item, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1 rounded-full text-sm font-medium
                        bg-blue-50 text-blue-900 border border-blue-100/80
                        dark:bg-blue-600/80 dark:text-white dark:border-blue-500/30
                      "
                    >
                      {item}
                    </span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= Helpers ================= */

function getCompanyLogo(company) {
  if (!company) return null;
  const c = company.toLowerCase();

  if (c.includes("deloitte")) return "/logos/deloitte.jpg";
  if (c.includes("transportation safety board") || c.includes("sécurité des transports")) return "/logos/tsb.jpg";
  if (c.includes("university of ottawa") || c.includes("université d’ottawa")) return "/logos/uottawa.jpg";


  return null;
}

function getCompanyInitials(company) {
  if (!company) return "";
  return company
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 3)
    .join("")
    .toUpperCase();
}

/* ================= Timeline ================= */

function ExperienceTimeline({ items }) {
  const { lang } = useLang();

  return (
    <div className="relative">
      <div className="absolute left-7 top-0 bottom-0 w-px bg-slate-300/70 dark:bg-gray-700" />

      <div className="space-y-14">
        {items.map((job, idx) => (
          <motion.div
            key={idx}
            className="relative pl-24"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.06, ease: "easeOut" }}
          >
            {/* Logo */}
            <div
              className="
                absolute left-0 top-0 w-16 h-16 md:w-[72px] md:h-[72px] rounded-full
                bg-white dark:bg-gray-900
                ring-[5px] ring-slate-50 dark:ring-gray-900
                overflow-hidden
                shadow-[0_14px_28px_rgba(0,0,0,0.10)]
                dark:shadow-sm
              "
              title={job.company}
            >
              {getCompanyLogo(job.company) ? (
                <img
                  src={getCompanyLogo(job.company)}
                  alt={`${job.company} logo`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-base font-bold text-blue-600 dark:text-blue-400">
                    {getCompanyInitials(job.company)}
                  </span>
                </div>
              )}
            </div>

            {/* Card (repaint-safe) */}
            <div
              className="
                group rounded-2xl overflow-hidden
                transform-gpu will-change-transform
                border border-slate-200/80 dark:border-gray-700/70

                bg-white dark:bg-gray-900/60
                supports-[backdrop-filter]:bg-white/70
                supports-[backdrop-filter]:dark:bg-gray-900/60
                supports-[backdrop-filter]:backdrop-blur

                shadow-[0_16px_40px_rgba(0,0,0,0.08)]
                dark:shadow-none
                transition-all duration-200
                hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)]
                dark:hover:shadow-lg
              "
            >
              <div className="h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="px-6 md:px-7 py-6">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`exp-content-${lang}-${idx}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="transform-gpu will-change-transform"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                          {job.role}
                        </h3>
                        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                          {job.company}
                        </p>
                      </div>

                      {/* UPDATED: job.type badge + duration */}
                      <div className="flex flex-wrap items-center gap-2">
                        {job.type && (
                          <span
                            className="
                              text-xs md:text-sm font-semibold
                              text-blue-700 dark:text-blue-300
                              bg-blue-50 border border-blue-100
                              dark:bg-blue-900/30 dark:border-blue-700/40
                              px-3 py-1.5 rounded-full
                            "
                          >
                            {job.type}
                          </span>
                        )}

                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full w-fit">
                          {job.duration}
                        </span>
                      </div>
                    </div>

                    <ul className="mt-5 list-disc list-inside space-y-2.5 leading-relaxed text-gray-700 dark:text-gray-200">
                      {job.bullets.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>

                    {job.tech?.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {job.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="
                              px-3 py-1 rounded-full text-xs md:text-sm font-medium
                              bg-blue-50 text-blue-900 border border-blue-100/80
                              dark:bg-blue-600/80 dark:text-white dark:border-blue-500/30
                            "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
