/** @type {import('tailwindcss').Config} */
const { heroui } = require('@heroui/react');

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#EF8404',
        primaryHover: '#FFAA43',
        grey: '#232321',
        danger: '#FF0000',
        success: '#47d147',
        blue: '#084F9F',
      },
    },
    dropShadow: {
      getStarted: [
        '0px 81px 32px rgba(0,0,0,0.01)',
        '0px 45px 27px rgba(0, 0, 0, 0.05)',
        '0px 20px 20px rgba(0, 0, 0, 0.09)',
        '0px 5px 11px rgba(0, 0, 0, 0.1)',
        '0px 0px 0px rgba(0, 0, 0, 0.1)',
      ],
    },
  },
  plugins: [heroui()],
};
