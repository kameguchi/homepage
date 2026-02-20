/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0f172a",
          accent: "#c6a75e",
          light: "#f8f6f2",
          text: "#1e293b",
          sub: "#94a3b8",
        },
      },
    },
  },
  plugins: [],
};