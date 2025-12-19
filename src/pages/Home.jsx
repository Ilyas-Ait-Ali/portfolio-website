import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "../contexts/LanguageContext";
import { home } from "../i18n/home";

export default function Home() {
  const { lang } = useLang();
  const t = home[lang];

  return (
    <section className="relative h-[calc(100vh-4rem)] bg-slate-50 dark:bg-gray-900 flex flex-col justify-center items-center text-center px-4 transition-colors duration-300 overflow-hidden">

      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-blue-500/12 blur-3xl dark:bg-blue-400/10" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.35)_1px,transparent_1px)] [background-size:18px_18px]" />
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
