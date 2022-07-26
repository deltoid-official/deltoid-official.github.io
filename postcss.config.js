module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-font-magician': {
      foundries: "google hosted",
      formats: "woff woff2"
    },
    'postcss-uncss': {
      html: [
        'index.html'
      ]
    }
  },
}
