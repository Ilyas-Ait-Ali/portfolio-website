import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Languages } from "lucide-react";
import { useLang } from "../contexts/LanguageContext";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [language, setLanguage] = useState("en");

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
    
  };


  return (
    <nav className="bg-gray-800 text-white shadow-md px-6 py-4 fixed w-full top-0 z-10 flex justify-center items-center">
      <ul className="flex gap-6 text-lg font-medium">
        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
        <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
        <li><Link to="/resume" className="hover:text-blue-400">Resume</Link></li>
        <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
      </ul>

      <div className="absolute right-4 inset-y-0 flex items-center gap-2">
        {/* Language toggle */}
        <div className="flex items-center bg-gray-700 rounded-full p-1 text-sm shadow relative w-20 h-8">
          <button
            onClick={() => setLanguage("en")}
            className={`w-1/2 h-full rounded-full transition-all duration-300 ${
              language === "en" ? "bg-blue-500 text-white" : "text-gray-300"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("fr")}
            className={`w-1/2 h-full rounded-full transition-all duration-300 ${
              language === "fr" ? "bg-blue-500 text-white" : "text-gray-300"
            }`}
          >
            FR
          </button>
        </div>


        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="relative w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-200 shadow"
          title="Toggle Theme"
        >
          <div className="absolute transition-all duration-300 ease-in-out transform">
            {dark ? (
              <Sun key="sun" size={20} className="text-yellow-400 animate-fade-in" />
            ) : (
              <Moon key="moon" size={20} className="text-blue-300 animate-fade-in" />
            )}
          </div>
        </button>

      </div>
    </nav>
  );
}
