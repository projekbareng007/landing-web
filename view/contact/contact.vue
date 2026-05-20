<template>
  <section id="contact" class="relative overflow-hidden py-20 md:py-28">
    <div class="relative w-full flex flex-col items-center z-10">
      <!-- Section Title -->
      <div class="text-center mb-16 md:mb-20 px-4">
        <h2
          ref="contactTitle"
          class="text-[4rem] md:text-[6rem] xl:text-[9rem] text-white font-semibold leading-none select-none tracking-tight opacity-90"
        >
          Contact Us
        </h2>
        <p
          ref="contactSub"
          class="text-white/80 text-lg md:text-xl max-w-[600px] mx-auto mt-4 font-light"
        >
          Punya ide projek luar biasa atau butuh partner teknologi? Hubungi kami dan mari berdiskusi untuk mewujudkannya!
        </p>
      </div>

      <!-- Contact Container -->
      <div class="w-full px-6 md:px-10 max-w-[800px] mx-auto">
        <div
          ref="contactCard"
          class="bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-white/20 p-8 md:p-12 relative overflow-hidden transition-all duration-300"
        >
          <!-- Decorative Top Gradient Line -->
          <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-secondary to-default-secondary"></div>

          <!-- Form Grid -->
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Name Input -->
              <div class="flex flex-col gap-2">
                <label for="name" class="text-sm font-semibold text-default-primary">
                  Nama Lengkap
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Masukkan nama lengkap Anda"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary focus:bg-white focus:outline-none transition-all duration-300 text-default-primary placeholder-gray-400 text-sm"
                />
              </div>

              <!-- Email Input -->
              <div class="flex flex-col gap-2">
                <label for="email" class="text-sm font-semibold text-default-primary">
                  Alamat Email
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="contoh@email.com"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary focus:bg-white focus:outline-none transition-all duration-300 text-default-primary placeholder-gray-400 text-sm"
                />
              </div>
            </div>

            <!-- Subject Input -->
            <div class="flex flex-col gap-2">
              <label for="subject" class="text-sm font-semibold text-default-primary">
                Subjek
              </label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                placeholder="Apa perihal yang ingin didiskusikan?"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary focus:bg-white focus:outline-none transition-all duration-300 text-default-primary placeholder-gray-400 text-sm"
              />
            </div>

            <!-- Message Input -->
            <div class="flex flex-col gap-2">
              <label for="message" class="text-sm font-semibold text-default-primary">
                Pesan Anda
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                placeholder="Tuliskan detail kebutuhan projek Anda di sini..."
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary focus:bg-white focus:outline-none transition-all duration-300 text-default-primary placeholder-gray-400 text-sm resize-none"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="pt-2">
              <PbButton
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-4"
              >
                <span>{{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan Sekarang' }}</span>
                <svg
                  v-if="!isSubmitting"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </PbButton>
            </div>
          </form>

          <!-- Status Message Toast (Simulated) -->
          <Transition
            enter-active-class="transform ease-out duration-300 transition"
            enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
            leave-active-class="transition ease-in duration-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-if="submitStatus"
              class="absolute bottom-6 left-6 right-6 p-4 rounded-xl shadow-lg border flex items-center justify-between z-30"
              :class="submitStatus === 'success' ? 'bg-emerald-50 text-emerald-800 border-emerald-100' : 'bg-rose-50 text-rose-800 border-rose-100'"
            >
              <div class="flex items-center gap-3">
                <!-- Success Check Icon -->
                <svg
                  v-if="submitStatus === 'success'"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-emerald-600 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <!-- Error Cross Icon -->
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-rose-600 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-sm font-medium">
                  {{ submitStatus === 'success' ? 'Pesan Anda berhasil dikirim! Kami akan menghubungi Anda segera.' : 'Gagal mengirim pesan. Silakan coba lagi nanti.' }}
                </p>
              </div>
              <button
                @click="submitStatus = null"
                class="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <!-- Background Ornaments (Subtle, non-intrusive floating bubbles) -->
    <div
      ref="bubbleYellowParent"
      class="absolute left-[-30px] md:left-[6%] top-[20%] z-0 select-none pointer-events-none transition-all duration-300"
    >
      <img
        ref="bubbleYellow"
        src="/assets/images/ornament-yellow.png"
        alt="ornament"
        class="w-[120px] md:w-[150px] opacity-100 rounded-full"
      />
    </div>
    <div
      ref="bubbleBlueParent"
      class="absolute right-[-40px] md:right-[5%] bottom-[15%] z-0 select-none pointer-events-none transition-all duration-300"
    >
      <img
        ref="bubbleBlue"
        src="/assets/images/ornament-blue.png"
        alt="ornament"
        class="w-[90px] md:w-[110px] opacity-100 rounded-full"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactTitle = ref<HTMLElement | null>(null);
const contactSub = ref<HTMLElement | null>(null);
const contactCard = ref<HTMLElement | null>(null);
const bubbleBlue = ref<HTMLElement | null>(null);
const bubbleYellow = ref<HTMLElement | null>(null);
const bubbleBlueParent = ref<HTMLElement | null>(null);
const bubbleYellowParent = ref<HTMLElement | null>(null);
const isSubmitting = ref(false);
const submitStatus = ref<'success' | 'error' | null>(null);

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: ""
});

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitStatus.value = null;

  try {
    // Simulate API network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Simulate successful form submission
    submitStatus.value = "success";
    
    // Reset form fields
    form.name = "";
    form.email = "";
    form.subject = "";
    form.message = "";

    // Clear success message after 5 seconds
    setTimeout(() => {
      if (submitStatus.value === "success") {
        submitStatus.value = null;
      }
    }, 5000);
  } catch (error) {
    submitStatus.value = "error";
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
  // Title entrance animation
  if (contactTitle.value) {
    gsap.from(contactTitle.value, {
      y: -40,
      opacity: 0,
      duration: 1.0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }

  // Subtitle entrance animation
  if (contactSub.value) {
    gsap.from(contactSub.value, {
      y: 30,
      opacity: 0,
      duration: 1.0,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }

  // Entrance animation for the contact form card when scrolled to
  if (contactCard.value) {
    gsap.from(contactCard.value, {
      y: 80,
      opacity: 0,
      duration: 1.0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%", // triggers when top of #contact is 80% down the viewport
        toggleActions: "play none none none"
      }
    });
  }

  // Parallax scroll effects for bubble parent wrappers
  if (bubbleYellowParent.value) {
    gsap.to(bubbleYellowParent.value, {
      y: 100,
      scrollTrigger: {
        trigger: "#contact",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      }
    });
  }
  if (bubbleBlueParent.value) {
    gsap.to(bubbleBlueParent.value, {
      y: 140,
      scrollTrigger: {
        trigger: "#contact",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      }
    });
  }

  // Smooth floating bubble animations
  if (bubbleYellow.value) {
    gsap.to(bubbleYellow.value, {
      rotation: -12,
      scale: 1.08,
      duration: 3.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
  if (bubbleBlue.value) {
    gsap.to(bubbleBlue.value, {
      rotation: 8,
      scale: 1.12,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
});
</script>

<style scoped>
/* High display rendering standard fixes */
input, textarea {
  font-family: inherit;
}
</style>

