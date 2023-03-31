/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':'315px',
        'mdl':'950px',
        'mlg':'1100px'
      }
    },
  },
  plugins: [],
}