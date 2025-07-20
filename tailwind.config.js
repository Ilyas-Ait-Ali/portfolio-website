/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",    
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.8) rotate(-15deg)" },
          "100%": { opacity: 1, transform: "scale(1) rotate(0)" },
        },
      },
    },
  },
  plugins: [],
}

