/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#041E42",
        secondary: "#BC6A43",
        light: "#FEBF7A",
        dark: "#022C3A",
        font: "#6c6c6c",
        border: "#ccc",
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: "#FFFFFF",
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
      },
      fontFamily: {
        display: ["Oswald"],
        body: ['"Open Sans"'],
      },
      fontSize: {
        xxs: ["8px", "8px"],
        xs: ["10px", "12px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
      },

      backgroundImage: {
        mosaic: "url('../../public/background-1.jpg')",
      },
      screens: {
        phone: { max: "800px" },

        laptop: { max: "960px" },

        desktop: { max: "1440px" },
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.75)",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        md: "0.375rem",
        lg: "10px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
