module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'off-white': '#dddddd',
        'slate-gray': '#717C89',
        'pewter-blue': '#8AA2A9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
