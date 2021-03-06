module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container:{
      center:true,
      padding: "1rem",
      screens:{
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
