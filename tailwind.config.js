/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image1': "url('/src/assets/img/hero1.jpg')",
        'hero-image2': "url('/src/assets/img/Hero2.jpg')",
        'hero-image3': "url('/src/assets/img/hero3.jpg')",
        'product-image1': "url('/src/assets/img/book1.jpg')",
    },
  },
  plugins: [],
}
}