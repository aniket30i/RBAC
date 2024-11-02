/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Questrial", "sans-serif"],
      },
      screens: {
        "custom-xl": "1650px",
        xs: "425px",
        xxs: "320px",
      },
    },
    plugins: [],
  },
};
