/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'height(70%)' },
          '50%': { transform: 'height(100%)' },
        }
      }
    },
  },
  plugins: [],
}

