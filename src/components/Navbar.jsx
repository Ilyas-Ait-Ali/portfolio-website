import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useLang } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { navbar } from "../i18n/navbar";

export default function Navbar() {
  const { lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const t = navbar[lang];

  return (
    <nav className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white shadow-sm px-6 py-4 fixed w-full top-0 z-10 flex justify-center items-center transition-colors duration-300">
      <ul className="flex gap-6 text-lg font-medium">
        <li><Link to="/" className="hover:text-blue-700 dark:hover:text-blue-400">{t.home}</Link></li>
            <Link to="/about" className="hover:text-blue-700 dark:hover:text-blue-400">{t.about}</Link>
        <li><Link to="/projects" className="hover:text-blue-700 dark:hover:text-blue-400">{t.projects}</Link></li>
        <li><Link to="/contact" className="hover:text-blue-700 dark:hover:text-blue-400">{t.contact}</Link></li>
      </ul>

      <div className="absolute right-4 inset-y-0 flex items-center gap-2">
        {/* Language toggle */}
        <div
          onClick={toggleLang}
          className="relative w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-between px-1 cursor-pointer transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 shadow-inner"
          title="Switch Language"
        >
          {/* Sliding pill */}
          <div
            className={`absolute top-0 left-0 w-1/2 h-full rounded-full transition-all duration-300 z-0
              ${lang === "en"
                ? "translate-x-0 bg-black text-white dark:bg-white dark:text-gray-900"
                : "translate-x-full bg-black text-white dark:bg-white dark:text-gray-900"
              }`}
          />

          {/* EN Label */}
          <span
            className={`w-1/2 text-xs font-semibold text-center z-10 transition-colors duration-300
              ${lang === "en"
                ? "text-white dark:text-gray-900"
                : "text-gray-900 dark:text-white"
              }`}
          >
            EN
          </span>

          {/* FR Label */}
          <span
            className={`w-1/2 text-xs font-semibold text-center z-10 transition-colors duration-300
              ${lang === "fr"
                ? "text-white dark:text-gray-900"
                : "text-gray-900 dark:text-white"
              }`}
          >
            FR
          </span>
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="relative w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md transition-colors duration-200 shadow"
          title="Toggle Theme"
        >
          <div className="absolute transition-all duration-300 ease-in-out transform">
            {theme === "dark" ? (
              <Sun key="sun" size={20} className="text-yellow-400 animate-fade-in" />
            ) : (
              <Moon key="moon" size={20} className="text-blue-600 animate-fade-in" />
            )}
          </div>
        </button>
      </div>
    </nav>
  );
}
