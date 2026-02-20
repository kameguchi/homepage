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
          primary: "#9fb1dd",
          accent: "#c6a75e",
          light: "#80ecc8",
          text: "#19a12b",
          sub: "#94a3b8",
        },
      },
    },
  },
  plugins: [],
};