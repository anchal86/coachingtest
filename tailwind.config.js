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
        'mlg':'1130px'
      },
      colors:{
        cartBg:'#282a2c',
        cartItem:'#2e3033',
        cartTotal:'#343739'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}