const colors = require('./src/styles/equinor.colors')

const tailwindcolors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: 'media',
  variants: {},
  theme: {
    colors,
    fontFamily: {
      sans: ['Equinor', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}

/* https://tailwindcss.com/docs/configuration#core-plugins */
