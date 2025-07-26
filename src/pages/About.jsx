import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../contexts/LanguageContext";
import about from "../i18n/about";
import { Link } from "react-router-dom";

export default function About() {
  const { lang } = useLang();
  const t = about[lang];

  return (
    <motion.section
      className="min-h-screen px-6 pt-24 pb-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <AnimatePresence mode="wait">
        <LanguageSection key={lang} t={t} />
      </AnimatePresence>
    </motion.section>
  );
}

function LanguageSection({ t }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        {t.heading}
      </h1>

      {/* Intro */}
      <p className="max-w-3xl mx-auto text-lg text-center text-gray-800 dark:text-gray-300 mb-16">
        {t.intro}
      </p>

      {/* Skills */}
      <section className="max-w-5xl mx-auto mb-16 px-4 md:px-6">
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3">
            <h2 className="text-white text-xl font-semibold tracking-wide">
              {t.skillsTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 p-6">
            {Object.entries(t.skills).map(([category, items], idx) => (
              <div key={idx}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {category}
                  </span>
                  <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {t.experience.map((job, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-1">{job.role}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {job.company} – {job.duration}
            </p>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-1 mb-4">
              {job.bullets.map((point, pointIdx) => (
                <li key={pointIdx}>{point}</li>
              ))}
            </ul>
            {job.tech && (
              <div className="flex flex-wrap gap-2 mt-2">
                {job.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* View Projects Button */}
      <div className="text-center mt-16">
        <Link
          to="/projects"
          className="inline-block px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 transition"
        >
          {t.viewProjects}
        </Link>
      </div>
    </motion.div>
  );
}
