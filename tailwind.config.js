/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    screens: {
'sm':'600px',
'md': '728px',
'lg': '984px',
'xl': '1260px',
'2xl': '1500px'
    },
    extend: {},
  },
  plugins: [],
}

