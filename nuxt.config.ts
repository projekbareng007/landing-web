// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@hypernym/nuxt-gsap', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Open Sans': [400, 500, 600, 700],
    },
    display: 'swap',
  },
  gsap: {
    composables: true,
    provide: false,
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true,
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})