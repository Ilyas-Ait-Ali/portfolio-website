import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";

const socialLinks = [
  {
    icon: <Mail size={28} />,
    href: "mailto:ilyasgameraa@gmail.com",
    label: "Email",
  },
  {
    icon: <Github size={28} />,
    href: "https://github.com/Ilyas-Ait-Ali",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={28} />,
    href: "https://www.linkedin.com/in/ilyas-ait-ali-467bb819b",
    label: "LinkedIn",
  },
];

export default function Contact() {
  return (
    <motion.section
      className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 text-white text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-white">Let&apos;s </span>
        <span className="text-blue-500">Connect</span>
      </motion.h1>

      <motion.p
        className="text-lg text-gray-400 max-w-xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I'm always open to new opportunities, collaborations, or just a good tech convo.
        Reach out! I’ll get back to you quickly.
      </motion.p>

      <div className="flex gap-8 text-xl">
        {socialLinks.map((link, idx) => (
          <Tooltip.Provider key={link.label}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
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

      <motion.a
        href="mailto:ilyasgameraa@gmail.com"
        className="mt-12 inline-block bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
        whileHover={{ scale: 1.05 }}
      >
        Say Hello
      </motion.a>
    </motion.section>
  );
}
