<template>
  <button
    ref="buttonEl"
    :type="type"
    :disabled="disabled"
    class="relative overflow-hidden px-8 py-4 font-bold rounded-xl shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group select-none"
    :class="[
      // Default primary button colors (Dark slate bg, white text)
      'bg-default-primary text-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
      customClass
    ]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousemove="handleMouseMove"
  >
    <!-- The GSAP Hover Bubble -->
    <span
      ref="bubbleEl"
      class="absolute rounded-full bg-[#027EFA] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 scale-0"
      :style="{
        width: bubbleSize + 'px',
        height: bubbleSize + 'px',
        left: bubbleX + 'px',
        top: bubbleY + 'px'
      }"
    ></span>

    <!-- Button Content Slot Container -->
    <span class="relative z-10 flex items-center justify-center gap-2">
      <slot>
        {{ text }}
      </slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

interface Props {
  text?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: "Kirim",
  type: "button",
  disabled: false,
  class: ""
});

// Avoid naming collision with class binding
const customClass = props.class;

const buttonEl = ref<HTMLButtonElement | null>(null);
const bubbleEl = ref<HTMLSpanElement | null>(null);

const bubbleX = ref(0);
const bubbleY = ref(0);
const bubbleSize = ref(0);

onMounted(() => {
  if (buttonEl.value) {
    // Calculate the size necessary to fully cover the button on scale up
    const rect = buttonEl.value.getBoundingClientRect();
    bubbleSize.value = Math.max(rect.width, rect.height) * 2.5;
  }
});

const handleMouseEnter = (event: MouseEvent) => {
  if (props.disabled || !buttonEl.value || !bubbleEl.value) return;

  const rect = buttonEl.value.getBoundingClientRect();
  bubbleX.value = event.clientX - rect.left;
  bubbleY.value = event.clientY - rect.top;

  // Scale the bubble up from the entering cursor coordinates
  gsap.to(bubbleEl.value, {
    scale: 1,
    duration: 0.5,
    ease: "power2.out",
    overwrite: "auto"
  });
};

const handleMouseMove = (event: MouseEvent) => {
  if (props.disabled || !buttonEl.value || !bubbleEl.value) return;

  const rect = buttonEl.value.getBoundingClientRect();
  const targetX = event.clientX - rect.left;
  const targetY = event.clientY - rect.top;

  // Smoothly guide the bubble center toward the active mouse coordinates
  gsap.to(bubbleEl.value, {
    left: targetX,
    top: targetY,
    duration: 0.35,
    ease: "power1.out",
    overwrite: "auto"
  });
};

const handleMouseLeave = (event: MouseEvent) => {
  if (props.disabled || !buttonEl.value || !bubbleEl.value) return;

  const rect = buttonEl.value.getBoundingClientRect();
  const targetX = event.clientX - rect.left;
  const targetY = event.clientY - rect.top;

  // Shrink the bubble scale back to 0 precisely at the exit coordinates
  gsap.to(bubbleEl.value, {
    scale: 0,
    left: targetX,
    top: targetY,
    duration: 0.45,
    ease: "power2.inOut",
    overwrite: "auto"
  });
};
</script>

<style scoped>
/* Optimize rendering layer performance */
button {
  backface-visibility: hidden;
  transform: translateZ(0);
}
</style>
