/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Questrial", "sans-serif"], // set Questrial as default sans font
      },
    },
  },
  plugins: [],
};
