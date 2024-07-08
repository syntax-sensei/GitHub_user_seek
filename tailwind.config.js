/** @type {import('tailwindcss').Config} */
export default {
  
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cards-blue': '#1d2a4a',
        'bgcolor' : '#141D2F'
      },
      fontFamily:{
        'space': ['Space Mono', 'monospace']
      }
    },
  },
  plugins: [],
}

