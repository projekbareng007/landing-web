<template>
  <div class="relative">
    <div
      class="relative h-[calc(100vh-104px)] w-full flex flex-col justify-center items-center z-10"
    >
      <div class="flex md:flex-row flex-col gap-2">
        <h1
          ref="title1"
          class="text-white text-[7rem] md:text-[12rem] px-4 md:px-0 font-semibold md:pb-16 leading-none"
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
          class="text-white text-[7rem] md:text-[12rem] px-4 md:px-0 font-semibold md:pb-16 leading-none"
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

    <div class="absolute right-10 top-[225px] z-0">
      <img
        ref="image1"
        src="/assets/images/ornament-blue.png"
        alt="logo"
        class="w-[200px] rounded-full"
      />
    </div>
    <div class="absolute left-10 top-[300px] z-0">
      <img
        ref="image2"
        src="/assets/images/ornament-blue.png"
        alt="logo"
        class="w-[100px] rounded-full"
      />
    </div>
    <div class="absolute left-10 top-[400px] z-0">
      <img
        ref="image3"
        src="/assets/images/ornament-yellow.png"
        alt="logo"
        class="w-[200px] rounded-full"
      />
    </div>
    <div class="absolute right-10 top-[325px] z-0">
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

export default {
  data() {
    return {
      letters1: "Projek".split(""),
      letters2: "Bareng".split(""),
    };
  },
  mounted() {
    const letters1 = this.$refs.title1.querySelectorAll(".letter");
    const letters2 = this.$refs.title2.querySelectorAll(".letter");
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
    images.forEach((image) => {
      gsap.to(image, {
        scale: () => Math.random() * 0.5 + 1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
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
