import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "../contexts/LanguageContext";
import projects from "../i18n/projects";

export default function Projects() {
  const { lang } = useLang();
  const t = projects[lang];

  const projectList = [
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
    <section className="px-6 py-16 min-h-screen transition-colors duration-300">
      <motion.h1
        className="text-4xl font-bold mt-4 mb-12 text-center text-black dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t.heading}
      </motion.h1>

      <div className="grid gap-8 md:grid-cols-2">
        {projectList.map((project, idx) => (
          <motion.div
            key={project.title}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col justify-between transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ExternalLink size={16} />
                {t.suppliesPro.live}
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Github size={16} />
                {t.suppliesPro.github}
              </a>
              <Link
                to={`/projects/${project.id}`}
                className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ArrowRight size={16} />
                {t.suppliesPro.viewMore}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
