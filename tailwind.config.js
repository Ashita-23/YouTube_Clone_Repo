/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide') ,
    require('tailwind-scrollbar'),
  
  ],
}

