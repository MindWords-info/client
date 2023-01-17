/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '6rem',
        xl: '10rem',
        '2xl': '12rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
