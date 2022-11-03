module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      colors: {
        jobCard_bg_color_mob: '#EFF0F5',
        white: '#ffffff',
        darkBlue: '#3A4562',
        textGray: '#878D9D',
        darkGray: '#5c637a',
        bgDarkBlue: '#384564',
        blueCalm: '#55699E',
        gold: '#988B49'
      },
      padding: {
        big: '90px'
      },
    },
  },
  plugins: [],
}
