/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 50%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          }
        }
      }
    },
  },
  plugins: [],
}

