/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero' : "url('https://res.cloudinary.com/doio2uvsw/image/upload/v1676951167/world_simplified_static_photos/ws-hero-photo_ymgr26.jpg')"
      },
      height: {
        '95/100' : '95%',
        '9/10': '90%'
      }, screens: {
        'mdy': { 'raw': '(min-height: 700px)'}
      },
      flexBasis: {
        '1/10': '10%'
      }
    },
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
      nanum: ['Nanum Myeongjo', 'serif'],
      rubik: ['Rubik', 'sans-serif'],
      anton: ['Anton', 'sans-serif'],
      gloock: ['Gloock', 'sans-serif']
    }
  },
  plugins: [],
}
