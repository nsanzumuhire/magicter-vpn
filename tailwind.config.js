/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      t: '0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      purple: '0px 20px 20px -15px rgba(180, 161, 254, 0.996) ',
      'purple-md': '0px 20px 40px -15px rgba(180, 161, 254, 0.996) ',
      none: 'none',
    },
    colors: {
      transparent: 'transparent',
      black: {
        500: '#4F5665',
        600: '#0B132A',
      },
      purple: {
        100: '#efebff',
        500: '#6d49ff',
      },
      green: {
        500: '#2FAB73',
      },
      white: {
        300: '#F8F8F8',
        500: '#fff',
      },
      gray: {
        100: '#EEEFF2',
        400: '#AFB5C0',
        500: '#DDDDDD',
        600: '#2a2b32',
      },
    },
    extend: {},
    screens: {
      ...defaultTheme.screens,
      '3xl': '1792px',
      '4xl': '2048px',
      '5xl': '2304px',
      '6xl': '2560px',
      '7xl': '2816px',
      '8xl': '3072px',
      '9xl': '3328px',
      '10xl': '3584px',
    },
  },
  variants: {
    extend: {
      boxShadow: ['active', 'hover'],
    },
  },
  plugins: [],
};
