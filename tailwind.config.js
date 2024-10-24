/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px', // Custom breakpoint for very small screens
        'sm': '575px', // Existing breakpoint for small screens
        'md': '768px', // Existing breakpoint for medium screens
        'lg': '1024px', // Existing breakpoint for large screens
        'xl': '1280px', // Existing breakpoint for extra-large screens
        '2xl': '1536px', // Existing breakpoint for 2xl screens
        '3xl': '1920px', // Custom breakpoint for very large screens
      },
    },
  },
  plugins: [],
}

