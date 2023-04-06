/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'amaticsc': ["Amatic SC", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-gradients")],
};
