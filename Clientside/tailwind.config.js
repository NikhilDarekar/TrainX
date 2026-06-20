
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5f6FFF",
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        josefin: ['"Josefin Sans"', 'sans-serif'],
        ranade: ['Ranade', 'sans-serif'], // only works if locally added
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}