/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato, sans-serif'],
        dancingscript: ['Dancing Script ,sans-serif']
      }
    },
    boxShadow: {
      'pre': '9px -1px 11px -5px rgba(0, 0, 0, .3)',
      'nxt': '-20px 0 20px -20px rgba(0, 0, 0, .3) inset',
    },
    flex: {
      '0': '0 0 auto'
    }
  },
  plugins: [],
}

