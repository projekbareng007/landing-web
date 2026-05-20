<template>
  <div id="hero-section" class="relative overflow-hidden">
    <div
      class="relative h-[calc(100vh-104px)] w-full flex flex-col justify-center items-center z-10"
    >
      <div class="flex xl:flex-row flex-col gap-2 xl:pb-0 pb-8">
        <h1
          ref="title1"
          class="text-white text-[6rem] md:text-[9rem] xl:text-[12rem] px-4 md:px-0 font-semibold xl:pb-16 leading-none"
        >
          <span
            v-for="(letter, index) in letters1"
            :key="index"
            class="letter"
            >{{ letter }}</span
          >
        </h1>
        <h1
          ref="title2"
          class="text-white text-[6rem] md:text-[9rem] xl:text-[12rem] px-4 md:px-0 font-semibold xl:pb-16 leading-none"
        >
          <span
            v-for="(letter, index) in letters2"
            :key="index"
            class="letter"
            >{{ letter }}</span
          >
        </h1>
      </div>
    </div>

    <div class="absolute right-10 transition-all top-[150px] md:top-[225px] z-0">
      <img
        ref="image1"
        src="/assets/images/ornament-blue.png"
        alt="logo"
        class="w-[200px] rounded-full"
      />
    </div>
    <div class="absolute left-10 transition-all top-[200px] md:top-[300px] z-0">
      <img
        ref="image2"
        src="/assets/images/ornament-blue.png"
        alt="logo"
        class="w-[100px] rounded-full"
      />
    </div>
    <div class="absolute left-10 transition-all top-[300px] md:top-[400px] z-0">
      <img
        ref="image3"
        src="/assets/images/ornament-yellow.png"
        alt="logo"
        class="w-[200px] rounded-full"
      />
    </div>
    <div class="absolute right-10 transition-all top-[250px] md:top-[325px] z-0">
      <img
        ref="image4"
        src="/assets/images/ornament-yellow.png"
        alt="logo"
        class="w-[100px] rounded-full"
      />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  data() {
    return {
      letters1: "Projek".split(""),
      letters2: "Bareng".split(""),
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const letters1 = this.$refs.title1.querySelectorAll(".letter");
    const letters2 = this.$refs.title2.querySelectorAll(".letter");
    
    // Original bouncy entrance animation on mount
    gsap.from([...letters1, ...letters2], {
      y: () => Math.random() * -200 - 100,
      x: () => Math.random() * 200 - 100,
      rotation: () => Math.random() * 360 - 180,
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: "bounce.out",
    });



    const images = [
      this.$refs.image1,
      this.$refs.image2,
      this.$refs.image3,
      this.$refs.image4,
    ];
    
    // Original breathing loop
    images.forEach((image) => {
      gsap.to(image, {
        scale: () => Math.random() * 0.4 + 1.1,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    // Scroll parallax exit translation for ornaments
    images.forEach((image, index) => {
      gsap.to(image, {
        y: index % 2 === 0 ? 180 : 280,
        opacity: 0.05,
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          end: "bottom 15%",
          scrub: 0.5,
        }
      });
    });
  },
};
</script>

<style scoped>
.letter {
  display: inline-block;
}
</style>
