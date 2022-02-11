module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       colors: {
        'daily-dev-tips': "#F89283",
        'white': 'hsl(0, 0%, 100%)',
        'light-gray': 'hsl(212, 45%, 89%)',
        'grayish-blue': 'hsl(220, 15%, 55%)',
        'dark-blue': 'hsl(218, 44%, 22%)'
      },
      screens:{
        'sm':' 375px',
        'lg':'1440px'
      },
      fontWeight:{
         'extra-light':400,
         'extra-bold': 700
      },
      fontSize:{
        'sm':'15px'
      },
      fontFamily: {
        'body': ['Outfit','sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
