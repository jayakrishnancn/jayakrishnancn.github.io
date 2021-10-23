module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["Merriweather", "Georgia", "serif"],
      "sans-serif": ["montserrat", "sans-serif"],
    },
    extend: {
      textColor: ["visited"],
    },

    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
