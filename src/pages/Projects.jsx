import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useLang } from "../contexts/LanguageContext";
import projects from "../i18n/projects";

export default function Projects() {
  const { lang } = useLang();
  const t = projects[lang];

  const projectList = [
    {
      id: "exptrack",
      title: t.expTrack.title,
      description: t.expTrack.description,
      stack: ["FastAPI", "PostgreSQL", "React", "Pandas", "Statsmodels", "Docker"],
      live: null,
      repo: "https://github.com/Ilyas-Ait-Ali/ExpTrack",
    },
    {
      id: "anomalyexpenses",
      title: t.anomalyExpenses.title,
      description: t.anomalyExpenses.description,
      stack: ["Python", "Scikit-learn", "Streamlit", "Pandas", "Matplotlib"],
      live: "https://anomaly-expenses.streamlit.app",
      repo: "https://github.com/Ilyas-Ait-Ali/Anomaly-Expenses",
    },
    {
      id: "shwstrivia",
      title: t.shwsTrivia.title,
      description: t.shwsTrivia.description,
      stack: ["React", "Vite", "TypeScript", "Next.js", "Tailwind CSS"],
      live: "https://shws-trivia-challenge-ilyas.vercel.app",
      repo: "https://github.com/Ilyas-Ait-Ali/shws-trivia-challenge",
    },
    {
      id: "ehotels",
      title: t.eHotels.title,
      description: t.eHotels.description,
      stack: ["Flask", "PostgreSQL", "SQLAlchemy", "Bootstrap"],
      live: null,
      repo: "https://github.com/Ilyas-Ait-Ali/eHotels",
    },
    {
      id: "suppliespro",
      title: t.suppliesPro.title,
      description: t.suppliesPro.description,
      stack: [
        "React",
        "React Router",
        "JavaScript",
        "CSS",
        "Font Awesome",
        "GitHub Pages",
      ],
      live: "https://Ilyas-Ait-Ali.github.io/SuppliesPro-Website",
      repo: "https://github.com/Ilyas-Ait-Ali/SuppliesPro-Website",
    },
  ];

  return (
    <motion.section
      className="relative px-6 py-16 min-h-screen bg-slate-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* Background polish */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-blue-500/12 blur-3xl dark:bg-blue-400/10" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.35)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative z-10">
        <AnimatePresence mode="wait" initial={false}>
          <ProjectSection key={lang} t={t} projectList={projectList} />
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

function ProjectSection({ t, projectList }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-4xl font-bold mt-4 mb-12 text-center text-gray-900 dark:text-white">
        {t.heading}
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {projectList.map((project, idx) => (
          <motion.div
            key={project.title}
            className="
              bg-white/70 dark:bg-gray-800/70
              backdrop-blur
              border border-slate-200/80 dark:border-gray-700/70
              shadow-[0_12px_30px_rgba(0,0,0,0.06)]
              dark:shadow-none
              rounded-xl p-6
              flex flex-col justify-between
              transition-all duration-200
              hover:-translate-y-1
              hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              {project.title}
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="
                    text-xs font-medium px-2.5 py-1 rounded-full
                    bg-slate-100 text-slate-800 border border-slate-200
                    dark:bg-gray-700 dark:text-white dark:border-gray-600
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-auto">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink size={16} />
                  {t.live}
                </a>
              )}

              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Github size={16} />
                {t.github}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
