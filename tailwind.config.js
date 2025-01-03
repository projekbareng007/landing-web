/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('/assets/images/pattern.png')",
      },
      colors: {
        primary: "#027EFA",
        'default-primary': "#264655",
        secondary: "#51CAFF",
        'default-secondary': "#2B9D90",
        tertiary: "#FFEE18",
        'default-tertiary': "#E9C46B"
      },
      fontFamily: {
        'open': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

