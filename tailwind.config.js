/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "./src/**/*.{js}"],
  theme: {
    container: {
      padding: '20px',
      center: true
    },
    screens: {
      'xl': { 'max': '1440px' },
      'lg': { 'max': '1199px' },
      'md': { 'max': '991px' },
      'sm': { 'max': '767px' },
      'xs': { 'max': '575px' },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'gray-900': '#1b1b1b',
        'gray-800': '#1e1e1e',
        'gray-700': '#464747',
        'gray-600': '#515151',
        'gray-500': '#666768',
        'gray-400': '#787878',
        'gray-300': '#888888',
        'pink-dark': '#5027b5',
        'pink-medium': '#5228b6',
        'pink-light': '#ac85ff',
        'pink-bg-dark': '#4923b4',
        'pink-bg-light': '#e878cf',
        'blue-light': '#eaeaea'
      }
    },
  },
  plugins: [],
}

