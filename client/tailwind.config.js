/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {},
    colors: {
      orange: '#FCA43B',
      grey: '#d4d4d4',
      lightGrey: '#CBCBCB',
      darkGrey: '#7C7C7C',
      white: '#FFFFFF',
      red: '#D21C33',
    },
    screens: {
      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '960px',
      // => @media (min-width: 960px) { ... }

      lg: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
  ],
};
