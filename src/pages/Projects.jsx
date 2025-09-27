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
    stack: ["React", "React Router", "JavaScript", "CSS", "Font Awesome", "GitHub Pages"],
    live: "https://Ilyas-Ait-Ali.github.io/SuppliesPro-Website",
    repo: "https://github.com/Ilyas-Ait-Ali/SuppliesPro-Website",
  },
];


  return (
    <motion.section
      className="px-6 py-16 min-h-screen transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <AnimatePresence mode="wait">
        <ProjectSection key={lang} t={t} projectList={projectList} />
      </AnimatePresence>
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
      <h1 className="text-4xl font-bold mt-4 mb-12 text-center text-black dark:text-white">
        {t.heading}
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {projectList.map((project, idx) => (
          <motion.div
            key={project.title}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col justify-between transition-colors duration-300"
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
                  className="text-xs font-medium px-2 py-1 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-auto">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink size={16} />
                  {t.suppliesPro.live}
                </a>
              ) : null}

              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Github size={16} />
                {t.suppliesPro.github}
              </a>
            </div>

          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
