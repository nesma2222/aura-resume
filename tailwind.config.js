/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        peach: {
          // 50: '#fff5f2',
          // 100: '#ffede6',
          // 400: '#ff9a7b', // Primary accent
          // 500: '#ff7e5f', // Main button color
          // 600: '#e66b4e',
          50: "#fff5f3",
          100: "#ffe5de",
          200: "#ffcbbd",
          300: "#ffad97",
          400: "#ff8a6d",
          500: "#ff6a45",
          600: "#f5522e",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}