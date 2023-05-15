/** @type {import('tailwindcss').Config} */
const themes = require('./themes');
const { themeBlue, themeDeeppink } = themes;

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      "light", // light theme as fallback
      {
        "theme-blue": {
          "--primary": themeBlue.colors.primary,
          "primary": themeBlue.colors.primary
        },
      },
      {
        "theme-deeppink": {
          "--primary": themeDeeppink.colors.primary,
          "primary": themeDeeppink.colors.primary
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

