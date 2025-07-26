import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "../contexts/LanguageContext";
import { home } from "../i18n/home";

export default function Home() {
  const { lang } = useLang();
  const t = home[lang];

  return (
    <section className="h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 flex flex-col justify-center items-center text-center px-4 transition-colors duration-300">
      <AnimatePresence mode="wait">
        <motion.h1
          key={`hero-heading-${lang}`}
          className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          {t.greeting} <span className="text-blue-700 dark:text-blue-500">Ilyas</span>.
        </motion.h1>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.h2
          key={`hero-subtitle-${lang}`}
          className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {t.subtitle}
        </motion.h2>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`hero-buttons-${lang}`}
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link
            to="/about"
            className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 transition"
          >
            {t.learnMore}
          </Link>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
