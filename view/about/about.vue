<template>
  <section id="about-us" class="relative overflow-hidden py-16 md:py-24">
    <div
      class="relative min-h-[calc(100vh-104px)] w-full flex flex-col justify-center items-center z-10 max-w-[1100px] mx-auto px-4"
    >
      <div class="text-center mb-8 md:mb-14">
        <h2
          ref="aboutTitle"
          class="text-[4rem] md:text-[6rem] xl:text-[9rem] text-white font-semibold leading-none select-none tracking-tight opacity-90"
        >
          About Us
        </h2>
      </div>

      <div class="w-full mt-4">
        <div
          id="card"
          class="bg-white w-full max-w-[1000px] mx-auto p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 rounded-2xl relative overflow-hidden shadow-lg"
        >
          <!-- Left Column: Story & Intro -->
          <div class="flex-1 flex flex-col justify-between z-20">
            <div>
              <span class="text-xs font-bold tracking-widest text-default-secondary uppercase block mb-3">
                Siapa Kami
              </span>
              <h3 class="text-2xl md:text-3.5xl font-extrabold text-default-primary leading-tight mb-5">
                Mimpi Besar di Dunia IT, Solusi Terbaik untuk Bisnis Anda.
              </h3>
              <div class="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                <p>
                  Kami adalah tim kecil yang berdedikasi tinggi dengan mimpi besar untuk memajukan lanskap teknologi. Berbekal pengalaman dari berbagai portfolio proyek yang sukses dibangun, kami berkomitmen memberikan solusi digital terbaik yang tepat sasaran.
                </p>
                <p>
                  Bagi kami, teknologi bukan sekadar kode, melainkan jembatan untuk mempermudah kehidupan dan mengembangkan usaha Anda. Kami siap menemani setiap langkah perjalanan transformasi digital Anda.
                </p>
              </div>
            </div>

            <!-- Closing CTA line -->
            <div class="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <p class="font-bold text-sm md:text-md text-primary">
                Let’s build something awesome together!
              </p>
            </div>
          </div>

          <!-- Right Column: Core Strengths / Values -->
          <div class="flex-1 flex flex-col justify-center gap-6 z-20">
            <span class="text-xs font-bold tracking-widest text-default-tertiary uppercase block md:hidden">
              Nilai Utama Kami
            </span>
            
            <!-- Value 1: Kolaborasi Kuat -->
            <div class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-default-primary mb-1">Kolaborasi Erat & Terbuka</h4>
                <p class="text-gray-500 text-xs md:text-sm leading-relaxed">
                  Kami mengutamakan diskusi yang fleksibel dan transparan demi menyelaraskan visi teknologi dengan kebutuhan riil Anda.
                </p>
              </div>
            </div>

            <!-- Value 2: Kreatif & Fleksibel -->
            <div class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
              <div class="w-12 h-12 rounded-xl bg-default-secondary/10 flex items-center justify-center text-default-secondary flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-default-primary mb-1">Solusi Kreatif & Fleksibel</h4>
                <p class="text-gray-500 text-xs md:text-sm leading-relaxed">
                  Setiap fitur dirancang dinamis dengan pendekatan inovatif untuk memastikan sistem mudah berkembang di masa depan.
                </p>
              </div>
            </div>

            <!-- Value 3: Berorientasi Hasil -->
            <div class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
              <div class="w-12 h-12 rounded-xl bg-default-tertiary/10 flex items-center justify-center text-default-tertiary flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-default-primary mb-1">Kualitas Berorientasi Hasil</h4>
                <p class="text-gray-500 text-xs md:text-sm leading-relaxed">
                  Kami berkomitmen menghadirkan produk dengan performa tinggi, keamanan andal, dan pengalaman pengguna yang luar biasa.
                </p>
              </div>
            </div>
          </div>

          <!-- Ornaments (Preserved Exactly) -->
          <div
            class="absolute left-[-50px] transition-all top-[10px] xl:top-[0px] z-0 opacity-25 md:opacity-100"
          >
            <img
              ref="image2"
              src="/assets/images/ornament-blue.png"
              alt="logo"
              class="w-[100px] rounded-full"
            />
          </div>
          <div
            class="absolute right-[-50px] transition-all top-[10px] xl:top-[-70px] z-0 opacity-25 md:opacity-100"
          >
            <img
              ref="image3"
              src="/assets/images/ornament-yellow.png"
              alt="logo"
              class="w-[200px] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const image2 = this.$refs.image2;
    const image3 = this.$refs.image3;

    // Title entrance animation
    const title = this.$refs.aboutTitle;
    if (title) {
      gsap.from(title, {
        y: -40,
        opacity: 0,
        duration: 1.0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about-us",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }

    // Card entrance animation
    const card = this.$el.querySelector("#card");
    if (card) {
      gsap.from(card, {
        y: 70,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#about-us",
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });
    }

    // Parallax effect for image2 (left ornament)
    gsap.to(image2, {
      y: 200, // Move 200px down
      scrollTrigger: {
        trigger: "#card",
        start: "top bottom", // Start when #card top is at the bottom of the viewport
        end: "bottom top", // End when #card bottom is at the top of the viewport
        scrub: 0.5, // Smooth parallax effect
      },
    });

    // Parallax effect for image3 (right ornament)
    gsap.to(image3, {
      y: 250, // Move 250px down for a slightly stronger effect
      scrollTrigger: {
        trigger: "#card",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5, // Smooth parallax effect
      },
    });
  },
};
</script>

<style scoped>
.object {
  transition: transform 0.3s ease;
}
</style>


          <!-- style=md:max-w-[600px] lg:max-w-[1000px] mx-auto -->