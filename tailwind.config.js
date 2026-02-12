/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#fff5f2',
          100: '#ffede6',
          400: '#ff9a7b', // Primary accent
          500: '#ff7e5f', // Main button color
          600: '#e66b4e',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}