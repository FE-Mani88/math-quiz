/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'miniSm': '405px'
      },
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}

