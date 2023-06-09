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
      "2.25xl": "288px",
      "2.5xl": "384px",
      "2.75xl": "420px",
      "3xl": "512px",
      "3.5xl": "576px",
      "4xl": "768px",
      "5xl": "1024px",
      "6xl": "1280px",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
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
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
        "waving-object": "wave 2s linear infinite",
        "bounce-loading": "bounce 2s",
      },
      fontFamily: {
        amaticsc: ["Amatic SC", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-gradients")],
};
