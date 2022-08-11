/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "1/5": "20%",
      },
      colors: {
        background: {
          light: "#f1f5f7",
          dark: "#252b3b",
          darker: "#161923",
        },
        text: {
          DEFAULT: "#838ea3",
        },
        primary: "#5664d2",
      },
    },
  },
  plugins: [],
};
