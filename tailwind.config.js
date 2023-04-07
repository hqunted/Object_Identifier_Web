/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        triangle: {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "50%": { transform: "translate(-50%, -50%) rotate(180deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
      },
      fontFamily: {
        amaticsc: ["Amatic SC", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-gradients")],
};
