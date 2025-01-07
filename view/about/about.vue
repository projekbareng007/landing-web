<template>
  <section id="about-us" class="relative">
    <div
      class="relative h-[calc(100vh-104px)] w-full flex flex-col justify-center items-center z-10"
    >
      <div>
        <h2 class="text-[4rem] md:text-[6rem] xl:text-[9rem] text-white font-semibold leading-none">
          About Us
        </h2>
      </div>
      <div class="w-full mt-20 p-10 lg:p-0">
        <div
          id="card"
          class="bg-white w-full lg:max-w-[900px] lg:max- mx-auto px-6 py-8 flex flex-col gap-3 rounded-md relative overflow-hidden"
        >
          <div class="flex flex-col gap-3 z-20">
            <p>
              <span class="font-semibold">Hai!</span> Kami adalah tim kecil
              dengan mimpi besar di
              <span class="font-semibold">dunia IT.</span> Kami percaya bahwa
              teknologi bisa jadi solusi untuk banyak hal—dan kami ada di sini
              untuk membantu mewujudkannya.
            </p>
            <p>
              Meskipun skala kami masih kecil, setiap proyek yang kami kerjakan
              adalah bukti nyata dari komitmen kami untuk memberikan yang
              terbaik. Dengan beberapa portfolio yang sudah kami bangun, kami
              terus belajar, berkembang, dan berinovasi untuk memberikan solusi
              yang pas buat kebutuhan Anda.
            </p>
            <p>
              Kami percaya <span class="font-semibold">kolaborasi</span> adalah
              kunci, dan bersama Anda, kami siap menciptakan sesuatu yang luar
              biasa. Jadi, jika Anda butuh partner teknologi yang kreatif,
              fleksibel, dan down-to-earth, jangan ragu untuk ngobrol dengan
              kami!
            </p>
            <p class="font-semibold text-lg text-primary">
              Let’s build something awesome together!
            </p>
          </div>
          <div
            class="absolute left-[-50px] transition-all top-[0px] xl:top-[0px] z-0"
          >
            <img
              ref="image2"
              src="/assets/images/ornament-blue.png"
              alt="logo"
              class="w-[100px] rounded-full"
            />
          </div>
          <div
            class="absolute right-[-50px] transition-all top-[0px] xl:top-[-70px] z-0"
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
