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
        secondary: "#51CAFF",
        tertiary: "#FFEE18"
      }
    },
  },
  plugins: [],
}

