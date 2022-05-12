const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        "main-blue": "#0500FF",
        "main-green": "#C5FD26",
        "border": "#EAEAEA",
        "line": "#3D3D3D",
      },
      fontFamily: {
        helvetica: "Helvetica Neue Cyr",
      },
      maxWidth: {
        mobile: "375px",
        "8xl": "1440px",
      },
      animation: {
        'spin-slow-right': 'spin 20s linear infinite ',
        'spin-slow-left': 'spin 20s linear infinite reverse',
      },
      screens: {
        ...defaultTheme.screens,
        "mm": "375px",
        "ml": "425px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "1xl": "1320px",
        "xxl": "1440px",
        "2xl": "1536px",
        "3xl": "1880px",
        "4xl": "1920px",
        "5xl": "2500px",
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '28px': '28px',
        '3xl': '30px',
        '35px': '35px',
        '4xl': '36px',
        '38px': '38px',
        '45px': '45px',
        '5xl': '48px',
        '6xl': '64px',
        '7xl': '80px',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['active'],
      textDecoration: ['active', 'focus'],
      borderStyle: ['hover', 'focus'],
      fill: ['hover', 'focus', 'active', 'group-hover'],
      backgroundColor: ['group-focus'],
    },
  },
  plugins: [],
}
