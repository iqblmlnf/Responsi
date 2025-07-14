<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import SectionTitle from './SectionTitle.vue'

const educationHistory = ref([])
const visibleLogos = ref({})

onMounted(async () => {
  try {
    const response = await axios.get('/api/education')
    educationHistory.value = response.data
  } catch (error) {
    console.error(error)
  }
})

const observe = (el, id) => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        visibleLogos.value[id] = true
        observer.unobserve(el)
      }
    },
    { threshold: 0.3 }
  )
  observer.observe(el)
}
</script>

<template>
  <section id="pendidikan" class="py-20 bg-[#F8F5F1] scroll-mt-28">
    <div class="container mx-auto px-4">
      <SectionTitle title="Riwayat Pendidikan" />
      <div class="relative">
        <!-- Garis timeline hanya di layar md ke atas -->
        <div class="hidden md:block absolute h-full border-r-4 border-[#D9D9D9] left-1/2 transform -translate-x-1/2"></div>

        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-12 w-full flex flex-col md:flex-row items-center"
        >
          <!-- Untuk index genap (kiri di desktop) -->
          <template v-if="index % 2 === 0">
            <div class="md:w-1/2 w-full md:pr-8 order-2 md:order-1">
              <div class="bg-white border border-[#E3DBD2] shadow-md rounded-xl p-5">
                <p class="text-[#72383D] font-semibold">{{ edu.period }}</p>
                <div class="flex items-center gap-2 mt-1">
                  <img
                    v-if="edu.logo"
                    :ref="(el) => el && observe(el, edu.id)"
                    :src="edu.logo"
                    alt="Logo"
                    class="w-8 h-8 object-contain transition-all duration-700 ease-out"
                    :class="{
                      'opacity-0 translate-y-4': !visibleLogos[edu.id],
                      'opacity-100 translate-y-0': visibleLogos[edu.id],
                    }"
                  />
                  <h3 class="text-xl font-bold text-[#322D29]">{{ edu.institution }}</h3>
                </div>
                <p class="text-[#AC9C8D] mt-1">{{ edu.major }}</p>
              </div>
            </div>
            <div class="md:w-1/2 w-full flex justify-center md:justify-start order-1 md:order-2 mb-4 md:mb-0">
              <div class="hidden md:block w-4 h-4 bg-[#72383D] rounded-full z-10"></div>
            </div>
          </template>

          <!-- Untuk index ganjil (kanan di desktop) -->
          <template v-else>
            <div class="md:w-1/2 w-full flex justify-center md:justify-end order-1 mb-4 md:mb-0">
              <div class="hidden md:block w-4 h-4 bg-[#72383D] rounded-full z-10"></div>
            </div>
            <div class="md:w-1/2 w-full md:pl-8 order-2">
              <div class="bg-white border border-[#E3DBD2] shadow-md rounded-xl p-5">
                <p class="text-[#72383D] font-semibold">{{ edu.period }}</p>
                <div class="flex items-center gap-2 mt-1">
                  <img
                    v-if="edu.logo"
                    :ref="(el) => el && observe(el, edu.id)"
                    :src="edu.logo"
                    alt="Logo"
                    class="w-8 h-8 object-contain transition-all duration-700 ease-out"
                    :class="{
                      'opacity-0 translate-y-4': !visibleLogos[edu.id],
                      'opacity-100 translate-y-0': visibleLogos[edu.id],
                    }"
                  />
                  <h3 class="text-xl font-bold text-[#322D29]">{{ edu.institution }}</h3>
                </div>
                <p class="text-[#AC9C8D] mt-1">{{ edu.major }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
