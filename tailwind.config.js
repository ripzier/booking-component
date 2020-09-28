module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primary: '#cc0000',
        'gray-333': '#333333',
        'gray-666': '#666666',
        'gray-999': '#999999',
        'gray-light': '#cdcdcd',
        'gray-dark': '#474747',
      },
    },
  },
  variants: {},
  plugins: [],
}
