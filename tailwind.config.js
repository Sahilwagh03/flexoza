/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Cormorant Garamond',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
        serif: [
          'Cormorant Garamond',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif'
        ],
      },
      colors: {
        primary: {
          DEFAULT: '#e63946',
          dark: '#d32836',
        },
        cream: '#f8f5f1',
      },
    },
  },
  plugins: [],
};