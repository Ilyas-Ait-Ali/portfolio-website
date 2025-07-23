import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../contexts/LanguageContext";
import projectDetails from "../i18n/projectDetails";

export default function SuppliesProDetail() {
  const { lang } = useLang();
  const t = projectDetails[lang].suppliesPro;

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 transition-colors duration-300">
      <AnimatePresence mode="wait">
        <motion.h1
          key={`supplies-title-${lang}`}
          className="text-4xl md:text-5xl font-bold text-center text-black dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          {t.title}
        </motion.h1>
      </AnimatePresence>
    </section>
  );
}
