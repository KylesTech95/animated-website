/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    /*Add custom styles below*/
    fontSize: {
      'oversize': '35rem'
    },
    /*Add custom styles above*/
    extend: {
      keyframes: {
        test1: {
          '0%': { transform: 'rotate(0.0deg)' },
          '50%': { transform: 'rotate(-100deg)' },
          '100%': {transform: 'rotate(360deg)'},
        },
        test2: {
          '0%': { transform: 'rotate(0.0deg)' },
          '50%': { transform: 'rotate(100deg)' },
          '100%': {transform: 'rotate(-360deg)'},
        }
      },
      animation: {
        'rotation': 'test1 20s linear infinite',
        'reverse': 'test2 35s linear infinite'
      }
    },
  },
  plugins: [],
}

