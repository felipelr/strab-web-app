/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        strabblue: {
          50: '#6491b8',
          100: '#1e638e',
          200: '#1A577D',
        },
        strabyellow: {
          100: '#f3c023',
          200: '#D7A50C'
        }
      }
    },
  },
  plugins: [],
}
