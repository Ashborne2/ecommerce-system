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
        'latest-book1': "url('/src/assets/img/latest-book1.jpg')",
        'latest-book2': "url('/src/assets/img/latest-book2.jpg')",
        'latest-book3': "url('/src/assets/img/latest-book3.jpg')",
        'latest-book4': "url('/src/assets/img/latest-book4.jpg')",
        'latest-book5': "url('/src/assets/img/latest-book5.jpg')",
    },
  },
  plugins: [],
}
}