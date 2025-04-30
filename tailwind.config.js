/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        candid: ['"Candid Style Regular"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

