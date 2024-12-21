/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cgrey: '#1f1f1f',
        lgrey :"#b3b3b3", // Custom color name and hex code
      },
    },
  },
  plugins: [],
}




