/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js", // Agar aap JS files mein bhi Tailwind classes istemal karna chahte hain
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f7444e',      // Original: $primary1
        'secondary': '#002c3e',   // Original: $primary2
        'custom-black': '#0c0c0c', // Original body text color from style.css
        'nav-link-color': '#131313', // Original nav link color from style.css
        'arrival-bg': '#d4ced0',   // Original .arrival_section background
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Matches 'Poppins' in style.scss, but 'Montserrat' in style.css body
        serif: ['Playfair Display', 'serif'], // Matches second-font
      }
    },
  },
  plugins: [],
}
