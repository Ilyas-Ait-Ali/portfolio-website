import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "../contexts/LanguageContext";
import { home } from "../i18n/home";

export default function Hero() {
  const { lang } = useLang();
  const t = home[lang];

  return (
    <section className="h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {t.greeting} <span className="text-blue-500">Ilyas</span>.
      </motion.h1>

      <motion.h2
        className="text-lg md:text-2xl text-gray-400 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {t.subtitle}
      </motion.h2>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <Link
          to="/projects"
          className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          {t.viewProjects}
        </Link>
        <a
          href="/resume.pdf"
          className="px-6 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition"
        >
          {t.downloadResume}
        </a>
      </motion.div>
    </section>
  );
}
