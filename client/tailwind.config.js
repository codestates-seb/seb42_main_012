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
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
