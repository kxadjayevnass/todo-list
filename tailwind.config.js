/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(31,20,222,1) 0%, rgba(153,15,243,1) 35%, rgba(155,19,251,1) 68%, rgba(237,70,245,1) 100%)',
      },
    },
  },
  plugins: [],
}