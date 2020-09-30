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
        'primary-dark': '#ab0a0a',
        'gray-333': '#333333',
        'gray-666': '#666666',
        'gray-999': '#999999',
        'gray-light': '#cdcdcd',
        'gray-dark': '#474747',
      },
      gridTemplateColumns: {
        '1e': '1fr',
        '2e': 'repeat(2, 1fr)',
        '8e': 'repeat(8, 1fr)',
      },
      inset: {
        '1/2': '50%',
      },
    },
  },
  variants: {},
  plugins: [],
}
