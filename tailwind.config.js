module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    container: {
      center: true,
    },

    extend: {
      colors: {
        'color-primary': '#0091C1',
        'color-secondary': '#775ada',
        'color-success': '#00FF19',
        'color-warning': '#F9F871',
        'color-dark': '#002651',
        'color-danger': '#ff304f',
        'color-black': '#333'
      },
      fontFamily: {
        'display': ['JetBrains Mono', 'monospace'],
        'body': ['Lato', 'sans-serif'],
      }
    },

  },
  plugins: [],
}
