const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        plus: "url('/img/plus.svg')",
        school: "url('/img/school.png')",
        factory: "url('/img/factory.png')",
        desert: "url('/img/desert.png')",
      },
      colors: {
        "overlay-gray": "rgba(13, 12, 12, 0.8)",
        "main-blue": "#0500FF",
        "main-green": "#C5FD26",
        border: "#EAEAEA",
        line: "#3D3D3D",
        red: "#BE0F0F",
      },
      fontFamily: {
        helvetica: "Helvetica Neue Cyr",
      },
      width: {
        15: "3.75rem",
      },
      maxWidth: {
        mobile: "375px",
        "8xl": "1440px",
      },
      animation: {
        "spin-slow-right": "spin 20s linear infinite ",
        "spin-slow-left": "spin 20s linear infinite reverse",
      },
      screens: {
        ...defaultTheme.screens,
        mm: "375px",
        ml: "425px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "1xl": "1320px",
        xxl: "1440px",
        "2xl": "1536px",
        "3xl": "1880px",
        "4xl": "1920px",
        "5xl": "2500px",
      },
      lineHeight: {
        "42px": "42px",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "28px": "28px",
        "3xl": "30px",
        "35px": "35px",
        "4xl": "36px",
        "38px": "38px",
        "40px": "40px",
        "45px": "45px",
        "5xl": "48px",
        "6xl": "64px",
        "7xl": "80px",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["active"],
      textDecoration: ["active", "focus"],
      borderStyle: ["hover", "focus"],
      fill: ["hover", "focus", "active", "group-hover"],
      backgroundColor: ["group-focus"],
    },
  },
  plugins: [],
};
