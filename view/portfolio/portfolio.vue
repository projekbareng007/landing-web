<template>
  <section id="portfolio" class="relative overflow-hidden py-20 md:py-28">
    <div class="relative w-full flex flex-col items-center z-10">
      <!-- Section Title -->
      <div class="text-center mb-16 md:mb-24 px-4">
        <h2
          ref="portfolioTitle"
          class="text-[4rem] md:text-[6rem] xl:text-[9rem] text-white font-semibold leading-none select-none tracking-tight opacity-90"
        >
          Portfolio
        </h2>
        <p
          ref="portfolioSub"
          class="text-white/80 text-lg md:text-xl max-w-[600px] mx-auto mt-4 font-light"
        >
          Karya-karya kolaboratif terbaik yang kami bangun bersama untuk menghadirkan solusi digital yang inovatif.
        </p>
      </div>

      <!-- Portfolio Grid -->
      <div class="w-full px-6 md:px-10 max-w-[1240px] mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1: SaaS Dashboard Analitik -->
          <div
            ref="portfolioCards"
            class="portfolio-card bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 flex flex-col justify-between border border-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer group relative overflow-hidden"
          >
            <!-- Decorative Accent Line -->
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary"></div>

            <div>
              <div class="flex items-center justify-between mb-6">
                <span class="text-xs font-semibold tracking-wider uppercase text-default-secondary bg-emerald-50 px-3 py-1.5 rounded-full">
                  SaaS Platform
                </span>
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>

              <h3 class="text-2xl font-bold text-default-primary mb-3 group-hover:text-primary transition-colors duration-300">
                SaaS Dashboard Analitik
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-6">
                Platform analitik komprehensif untuk melacak metrik bisnis, konversi, dan performa penjualan secara real-time. Dilengkapi visualisasi data interaktif dan ekspor laporan instan.
              </p>
            </div>

            <div>
              <!-- Tech Stack Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="text-xs px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-100 font-medium">Vue 3</span>
                <span class="text-xs px-2.5 py-1 rounded-md bg-sky-50 text-sky-600 border border-sky-100 font-medium">Tailwind CSS</span>
                <span class="text-xs px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-600 border border-indigo-100 font-medium">Chart.js</span>
                <span class="text-xs px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-100 font-medium">Pinia</span>
              </div>

              <!-- CTA / View Details -->
              <div class="flex items-center text-default-primary font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                <span>Lihat Selengkapnya</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Card 2: Platform E-Learning -->
          <div
            ref="portfolioCards"
            class="portfolio-card bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 flex flex-col justify-between border border-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer group relative overflow-hidden"
          >
            <!-- Decorative Accent Line -->
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary to-default-secondary"></div>

            <div>
              <div class="flex items-center justify-between mb-6">
                <span class="text-xs font-semibold tracking-wider uppercase text-default-primary bg-sky-50 px-3 py-1.5 rounded-full">
                  Education
                </span>
                <div class="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>

              <h3 class="text-2xl font-bold text-default-primary mb-3 group-hover:text-primary transition-colors duration-300">
                Platform E-Learning
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-6">
                Sistem pembelajaran daring interaktif dengan fitur kelas virtual, diskusi langsung (live chat), kuis interaktif berwaktu, dan sistem manajemen materi modular yang user-friendly.
              </p>
            </div>

            <div>
              <!-- Tech Stack Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="text-xs px-2.5 py-1 rounded-md bg-green-50 text-green-700 border border-green-200 font-medium">Nuxt 3</span>
                <span class="text-xs px-2.5 py-1 rounded-md bg-lime-50 text-lime-700 border border-lime-200 font-medium">Node.js</span>
                <span class="text-xs px-2.5 py-1 rounded-md bg-purple-50 text-purple-600 border border-purple-100 font-medium">WebSockets</span>
                <span class="text-xs px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-200 font-medium">MongoDB</span>
              </div>

              <!-- CTA / View Details -->
              <div class="flex items-center text-default-primary font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                <span>Lihat Selengkapnya</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Card 3: Sistem Kasir Pintar (POS) -->
          <div
            ref="portfolioCards"
            class="portfolio-card bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 flex flex-col justify-between border border-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer group relative overflow-hidden"
          >
            <!-- Decorative Accent Line -->
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-default-secondary to-primary"></div>

            <div>
              <div class="flex items-center justify-between mb-6">
                <span class="text-xs font-semibold tracking-wider uppercase text-default-tertiary bg-amber-50 px-3 py-1.5 rounded-full">
                  Retail / POS
                </span>
                <div class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>

              <h3 class="text-2xl font-bold text-default-primary mb-3 group-hover:text-primary transition-colors duration-300">
                Sistem Kasir Pintar (POS)
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-6">
                Solusi Point of Sale berbasis cloud dengan kemampuan offline mode, sinkronisasi otomatis saat online, manajemen inventaris stok pintar, dan pembuatan laporan penjualan harian otomatis.
              </p>
            </div>

            <div>
              <!-- Tech Stack Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="text-xs px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-100 font-medium">Vue 3</span>
                <span class="text-xs px-2.5 py-1 rounded-md bg-rose-50 text-rose-600 border border-rose-100 font-medium">PWA Support</span>
                <span class="text-xs px-2.5 py-1 rounded-md bg-amber-50 text-amber-600 border border-amber-100 font-medium">Firebase POS</span>
                <span class="text-xs px-2.5 py-1 rounded-md bg-teal-50 text-teal-600 border border-teal-100 font-medium">Tailwind CSS</span>
              </div>

              <!-- CTA / View Details -->
              <div class="flex items-center text-default-primary font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                <span>Lihat Selengkapnya</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Ornaments (Subtle, non-intrusive floating bubbles) -->
    <div
      ref="bubbleBlueParent"
      class="absolute left-[-40px] md:left-[4%] top-[30%] z-0 select-none pointer-events-none transition-all duration-300"
    >
      <img
        ref="bubbleBlue"
        src="/assets/images/ornament-blue.png"
        alt="ornament"
        class="w-[110px] md:w-[130px] opacity-100 rounded-full"
      />
    </div>
    <div
      ref="bubbleYellowParent"
      class="absolute right-[-50px] md:right-[3%] bottom-[12%] z-0 select-none pointer-events-none transition-all duration-300"
    >
      <img
        ref="bubbleYellow"
        src="/assets/images/ornament-yellow.png"
        alt="ornament"
        class="w-[160px] md:w-[190px] opacity-100 rounded-full"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const portfolioTitle = ref<HTMLElement | null>(null);
const portfolioSub = ref<HTMLElement | null>(null);
const portfolioCards = ref<HTMLElement[]>([]);
const bubbleBlue = ref<HTMLElement | null>(null);
const bubbleYellow = ref<HTMLElement | null>(null);
const bubbleBlueParent = ref<HTMLElement | null>(null);
const bubbleYellowParent = ref<HTMLElement | null>(null);

onMounted(() => {
  // Title entrance animation
  if (portfolioTitle.value) {
    gsap.from(portfolioTitle.value, {
      y: -40,
      opacity: 0,
      duration: 1.0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#portfolio",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }

  // Subtitle entrance animation
  if (portfolioSub.value) {
    gsap.from(portfolioSub.value, {
      y: 30,
      opacity: 0,
      duration: 1.0,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#portfolio",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }

  // Staggered entrance animation for portfolio cards when scrolled into view
  if (portfolioCards.value.length > 0) {
    gsap.from(portfolioCards.value, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#portfolio",
        start: "top 75%", // triggers when top of #portfolio is 75% down the viewport
        toggleActions: "play none none none",
      },
    });
  }

  // Parallax scroll effects for bubble parent wrappers
  if (bubbleBlueParent.value) {
    gsap.to(bubbleBlueParent.value, {
      y: 120,
      scrollTrigger: {
        trigger: "#portfolio",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      }
    });
  }
  if (bubbleYellowParent.value) {
    gsap.to(bubbleYellowParent.value, {
      y: 180,
      scrollTrigger: {
        trigger: "#portfolio",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      }
    });
  }

  // Smooth floating bubble breathing animations (applied to child images)
  if (bubbleBlue.value) {
    gsap.to(bubbleBlue.value, {
      rotation: 12,
      scale: 1.1,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
  if (bubbleYellow.value) {
    gsap.to(bubbleYellow.value, {
      rotation: -10,
      scale: 1.15,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
});
</script>

<style scoped>
/* Ensuring cards rendering on high display standards */
.portfolio-card {
  backface-visibility: hidden;
  transform: translateZ(0);
}
</style>