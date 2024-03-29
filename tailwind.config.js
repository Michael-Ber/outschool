const autoprefixer = require('autoprefixer');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "./src/js/*.js"],
  theme: {
    container: {
      // padding: '20px',
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
    
    boxShadow: {
      'card': '0px 0px 9px 0px rgba(153, 153, 151, 0.25)',
      'input': '0px 1px 15px 0px rgba(0, 0, 0, 0.15)'
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
        'purple': '#ff00c7',
        'pink-bg-dark': '#4923b4',
        'pink-bg-light': '#e878cf',
        'blue-light': '#eaeaea'
      },
      keyframes: {
        width: {
          '0%': {width: '0%'},
          '100%': {width: '100%'} 
        },
        heightIn: {
          from : {
            'max-height': '0px'
          },
          to: {
            'max-height': 'fit-content'
          }
        },
        heightOut: {
          from : {
            'max-height': '1200px'
          },
          to: {
            'max-height': '0px'
          }
        }
      },
      animation: {
        width: 'width .5s ease forwards',
        heightIn: 'heightIn .5s ease forwards',
        heightOut: 'heightOut .5s ease forwards'
      },
      gridTemplateColumns: {
        'custom-3': 'repeat(auto-fill, minmax(340px, auto))',
        'custom-3-575': 'repeat(auto-fill, minmax(280px, auto))',
        'custom-4': 'repeat(auto-fill, minmax(277px, auto))',
        'custom-5': 'repeat(auto-fill,minmax(100px, auto))',
        'custom-5-fit': 'repeat(auto-fit,minmax(100px, auto))',
      },
    },
  },
  plugins: [
    {tailwindcss: {}},
    {autoprefixer: {}}
  ],
}

