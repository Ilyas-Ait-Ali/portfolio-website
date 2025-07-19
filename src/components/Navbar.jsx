import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react"; // optional icon library

export default function Navbar() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md px-6 py-4 fixed w-full top-0 z-10">
      <ul className="flex gap-6 justify-center text-lg font-medium">
        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
        <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
        <li><Link to="/resume" className="hover:text-blue-400">Resume</Link></li>
        <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
      </ul>

      <button
        onClick={toggleTheme}
        className="absolute right-4 top-4 flex items-center gap-2 text-sm px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 transition duration-200 shadow-sm"
      >
        {dark ? <Sun size={16} /> : <Moon size={16} />}
        <span>{dark ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </nav>
  );
}
