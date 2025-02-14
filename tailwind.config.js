/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        effra: ['Effra', 'sans-serif'],
      },
    },
    backgroundImage: {
      'hero-bg': "url(../src/assets/img/BG1.svg)",
      
    }
  },
  plugins: [],
}

