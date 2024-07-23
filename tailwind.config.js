/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        third: {
          100: "var(--third-100)",
          200: "var(--third-200)",
          500: "var(--third-500)",
        }, 
        accent: {
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          500: "var(--accent-500)",
        },
        primary: "#ffc001",
        secondary: "#ff9c01",
        dark: "#1e1e1e",
        light: "#f5f5f5",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Allura", "cursive"],
        cursive2: ["Pacifico", "cursive"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}