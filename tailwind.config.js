/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ifood': '#FF2B62',
        'ifood-dark': '#e02758',
      }
    },
  },
  plugins: [],
}
