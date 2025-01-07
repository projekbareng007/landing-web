<script setup lang="ts">
import About from "~/view/about/about.vue";
import Hero from "~/view/home/hero.vue";
import Portfolio from "~/view/portfolio/portfolio.vue";

useSeoMeta({
  title: 'Projek Bareng',
  ogTitle: 'Projek Bareng',
  description: 'Welcome to Projek Bareng, your go-to platform for collaborative projects.',
  ogDescription: 'Welcome to Projek Bareng, your go-to platform for collaborative projects.',
  ogImage: 'https://example.com/default-og-image.png',
  twitterCard: 'summary_large_image',
  ogType: 'website',
  ogUrl: 'https://projekbareng.com',
  ogSiteName: 'Projek Bareng',
  twitterSite: '@projekbareng',
  twitterCreator: '@projekbareng',
  ogLocale: 'en_US',
  ogImageAlt: 'Projek Bareng default image',
  twitterImage: 'https://example.com/default-twitter-image.png',
  twitterImageAlt: 'Projek Bareng default Twitter image',
  keywords: 'collaborative projects, team projects, project management, Projek Bareng',
  author: 'Projek Bareng Team',
  robots: 'index, follow',
  charset: 'UTF-8',
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#ffffff',
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppStatusBarStyle: 'black-translucent',
  msapplicationTileColor: '#ffffff',
  msapplicationTileImage: 'https://example.com/mstile-150x150.png',
  applicationName: 'Projek Bareng',
  generator: 'Vue 3',
  rating: null,
})

</script>

<template>
  <div>
    <Hero />
    <About />
    <Portfolio />
  </div>
</template>
