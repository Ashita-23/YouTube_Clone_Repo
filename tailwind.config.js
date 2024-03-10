/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.js"],
  theme: {
    screens: {
      'xsm': '320px' ,
        // => @media (min-width: 320px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl':'1591px',
      // => @media (min-width: 1592ypx) { ... }
      '4xl':'1798px',
      // => @media (min-width: 1592ypx) { ... }
      '5xl':'1881px',
      // => @media (min-width: 1592ypx) { ... }
      '6xl':'1947px',
      // => @media (min-width: 1592ypx) { ... }
    },
    extend: {
      screens: {
        'xsm': {'min': '320px', 'max': '639px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'sm': {'min': '640px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1536px' , 'max': '1590px'},
        // => @media (min-width: 1536px) { ... }
        '3xl': {'min': '1591px' , 'max': '1797px'},
        // => @media (min-width: 1536px) { ... }
        '4xl': {'min': '1798px' , 'max': '1880px'},
        // => @media (min-width: 1536px) { ... }
        '5xl': {'min': '1881px' , 'max': '1946px'},
        // => @media (min-width: 1536px) { ... }
        '6xl': {'min': '1947px' , 'max': '2000px'},
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide') ,
    require('tailwind-scrollbar'),
  
  ],
}

