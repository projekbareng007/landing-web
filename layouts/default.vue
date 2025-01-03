<template>
  <div
    id="body"
    class="w-screen min-h-screen bg-custom-pattern bg-repeat bg-primary relative"
  >
    <header class="p-4 w-full">
      <div
        id="header1"
        class="bg-white shadow-md p-4 max-w-[1200px] mx-auto w-full rounded-full fixed top-[-100px] left-0 right-0"
      >
        <img
          src="/assets/images//pb-icon.png"
          alt="logo"
          class="w-10 h-10 rounded-full"
        />
      </div>
      <div id="header2" class="p-4 max-w-[1200px] mx-auto w-full">
        <p class="text-white">
          <img
            src="/assets/images//pb-icon-white.png"
            alt="logo"
            class="w-10 h-10 rounded-full"
          />
        </p>
      </div>
    </header>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.set("#header1", { y: -100, opacity: 0 });
  gsap.set("#header2", { y: 0, opacity: 1 });

  ScrollTrigger.create({
    trigger: "#body",
    start: "100px",
    end: "+=1px",
    onEnter: () => {
      gsap.to("#header1", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        position: "fixed",
        top: 10,
        left: 0,
        right: 0,
        width: "calc(100% - 20px)",
      });
      gsap.to("#header2", { y: -100, opacity: 0, duration: 0.5 });
    },
    onLeaveBack: () => {
      gsap.to("#header1", { y: -100, opacity: 0, duration: 0.5 });
      gsap.to("#header2", { y: 0, opacity: 1, duration: 0.5 });
    },
  });
});
</script>
