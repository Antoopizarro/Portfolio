/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.ejs",
    "./src/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ]
}

