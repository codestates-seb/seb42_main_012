/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      orange: '#FCA43B',
      grey: '#d4d4d4',
      lightGrey: '#CBCBCB',
      darkGrey: '#7C7C7C',
      white: '#FFFFFF',
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
  ],
};
