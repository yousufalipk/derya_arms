/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#fff',
        textColor: '#d6d6d6'
      },
      animation: {
        'bounce-down-once': 'bounceDown 1.5s ease-out forwards',
      },
      keyframes: {
        bounceDown: {
          '0%': { transform: 'translateY(30%)' },
          '50%': { transform: 'translateY(-20%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
