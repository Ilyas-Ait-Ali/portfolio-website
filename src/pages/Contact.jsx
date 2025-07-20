import { Mail, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useLang } from "../contexts/LanguageContext";
import contact from "../i18n/contact";

export default function Contact() {
  const { lang } = useLang();
  const t = contact[lang];
  const key = lang;

  const socialLinks = [
    {
      icon: <Mail size={28} />,
      href: "mailto:ilyasgameraa@gmail.com",
      label: t.email,
    },
    {
      icon: <Github size={28} />,
      href: "https://github.com/Ilyas-Ait-Ali",
      label: t.github,
    },
    {
      icon: <Linkedin size={28} />,
      href: "https://www.linkedin.com/in/ilyas-ait-ali-467bb819b",
      label: t.linkedin,
    },
  ];

  return (
    <motion.section
      className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 text-white text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <AnimatePresence mode="wait">
        <motion.h1
          key={`heading-${key}`}
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white">{t.headingStart} </span>
          <span className="text-blue-500">{t.headingEnd}</span>
        </motion.h1>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.p
          key={`paragraph-${key}`}
          className="text-lg text-gray-400 max-w-xl mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {t.paragraph}
        </motion.p>
      </AnimatePresence>

      <div className="flex gap-8 text-xl">
        {socialLinks.map((link, idx) => (
          <Tooltip.Provider key={`${link.label}-${lang}`}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <motion.a
                  key={`${link.label}-${lang}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {link.icon}
                </motion.a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="bg-gray-700 text-white px-2 py-1 rounded text-sm"
                  side="top"
                  sideOffset={6}
                >
                  {link.label}
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.a
          key={`button-${key}`}
          href="mailto:ilyasgameraa@gmail.com"
          className="mt-12 inline-block bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {t.sayHello}
        </motion.a>
      </AnimatePresence>
    </motion.section>
  );
}
