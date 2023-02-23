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
      }
    },
    fontFamily: {
      playfair: ['Playfair Display', 'serif']
    }
  },
  plugins: [],
}
