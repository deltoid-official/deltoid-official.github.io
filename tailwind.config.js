module.exports = {
  content: ['./src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter',
        raleway: 'Raleway'
      },
      gridTemplateColumns: {
        footer: '40% 60%'
      },
      gridTemplateRows: {
        website: 'auto 1fr auto'
      }
    },
  },
  plugins: [],
}
