/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    spacing: {
      "4xs": "8px",
      "3xs": "12px",
      "2xs": "16px",
      xxs: "24px",
      xs: "32px",
      sm: "48px",
      md: "64px",
      lg: "96px",
      xl: "128px",
      "1.5xl": "192px",
      "2xl": "256px",
      "2.5xl": "384px",
      "3xl": "512px",
      "3.5xl": "576px",
      "4xl": "768px",
      "5xl": "1024px",
      "6xl": "1280px",
    },
    screens: {
      sm: "512px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        bounce: {
          "0%": { delay: "100" },
          "50%": { delay: "500" },
        },
      },
      animation: {
        "waving-triangle": "wave 2s linear infinite",
        "bounce-loading": "bounce 2s",
      },
      fontFamily: {
        amaticsc: ["Amatic SC", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-gradients")],
};
