module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "komunis": "582px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  // mode: 'jit',
}
