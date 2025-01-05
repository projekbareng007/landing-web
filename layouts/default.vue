<template>
  <div
    id="body"
    class="w-screen min-h-screen bg-custom-pattern bg-repeat bg-primary relative"
  >
    <header class="p-4 w-full">
      <div
        id="header1"
        class="bg-white shadow-md p-4 max-w-[1000px] mx-auto w-full rounded-full fixed top-[-100px] left-0 right-0 z-50"
      >
        <div class="grid grid-cols-1 justify-center md:grid-cols-2 gap-4 px-4">
          <div class="hidden md:flex md:span-col-1 flex-row items-center gap-2">
            <img
              src="/assets/images/pb-icon.png"
              alt="logo"
              class="w-10 h-10 rounded-full"
            />
            <div class="flex flex-col">
              <p class="font-semibold text-default-secondary p-0 m-0 text-sm leading-none">
                Projek
              </p>
              <p class="font-semibold text-default-primary p-0 m-0 text-sm leading-none">
                Bareng
              </p>
            </div>
          </div>

          <div
            class="md:span-col-1 flex flex-row justify-center md:justify-end items-center gap-4"
          >
            <nav>
              <ul class="flex flex-row gap-1 items-center">
                <a href="#">
                  <li
                    class="min-w-[72px] md:min-w-[105px] md:text-base text-[11px] text-center hover:font-semibold hover:bg-default-primary hover:text-white hover:rounded-full transition-all px-2 py-1 text-default-primary"
                  >
                    Home
                  </li>
                </a>
                <a href="#">
                  <li
                    class="min-w-[72px] md:min-w-[105px] md:text-base text-[11px] text-center hover:font-semibold hover:bg-default-primary hover:text-white hover:rounded-full transition-all px-2 py-1 text-default-primary"
                  >
                    About Us
                  </li>
                </a>
                <a href="#">
                  <li
                    class="min-w-[72px] md:min-w-[105px] md:text-base text-[11px] text-center hover:font-semibold hover:bg-default-primary hover:text-white hover:rounded-full transition-all px-2 py-1 text-default-primary"
                  >
                    Portfolio
                  </li>
                </a>
                <a href="#">
                  <li
                    class="min-w-[72px] md:min-w-[105px] md:text-base text-[11px] text-center hover:font-semibold hover:bg-default-primary hover:text-white hover:rounded-full transition-all px-2 py-1 text-default-primary"
                  >
                    Contact Us
                  </li>
                </a>
              </ul>
            </nav>
          </div>

        </div>
      </div>
      <div
        id="header2"
        class="p-4 max-w-[1000px] mx-auto w-full z-50"
      >
        <div class="grid grid-cols-1 justify-center md:grid-cols-2 gap-4 px-4">
          <div class="hidden md:flex md:span-col-1 flex-row items-center gap-2">
            <img
              src="/assets/images/pb-icon-white.png"
              alt="logo"
              class="w-10 h-10 rounded-full"
            />
            <div class="flex flex-col">
              <p class="font-semibold text-white p-0 m-0 text-sm leading-none">
                Projek
              </p>
              <p class="font-semibold text-white p-0 m-0 text-sm leading-none">
                Bareng
              </p>
            </div>
          </div>
          <div
            class="md:span-col-1 flex flex-row justify-center md:justify-end items-center gap-4"
          >
            <nav>
              <ul class="flex flex-row gap-1 items-center">
                <a href="#">
                  <li
                    class="min-w-[72px] md:min-w-[105px] md:text-base text-[11px] text-center hover:font-semibold hover:bg-white hover:text-primary hover:rounded-full transition-all px-2 py-1 text-white"
                  >
                    Home
                  </li>
                </a>
                <a href="#">
                  <li
                    class="min-w-[72px] md:min-w-[105px] md:text-base text-[11px] text-center hover:font-semibold hover:bg-white hover:text-primary hover:rounded-full transition-all px-2 py-1 text-white"
                  >
                    About Us
                  </li>
                </a>
                <a href="#">
                  <li
                    class="min-w-[72px] md:min-w-[105px] md:text-base text-[11px] text-center hover:font-semibold hover:bg-white hover:text-primary hover:rounded-full transition-all px-2 py-1 text-white"
                  >
                    Portfolio
                  </li>
                </a>
                <a href="#">
                  <li
                    class="min-w-[72px] md:min-w-[105px] md:text-base text-[11px] text-center hover:font-semibold hover:bg-white hover:text-primary hover:rounded-full transition-all px-2 py-1 text-white"
                  >
                    Contact Us
                  </li>
                </a>
              </ul>
            </nav>
          </div>
        </div>
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
