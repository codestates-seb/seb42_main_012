/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        100: '100px',
        160: '160px',
        852: '852px',
      },
      width: {
        393: '393px',
        70: '70px',
      },
    },
    colors: {
      orange: '#FCA43B',
      grey: '#d4d4d4',
      white: '#FFFFFF',
    },
  },
  plugins: [],
};
