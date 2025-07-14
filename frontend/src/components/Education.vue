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

<template v-for="(edu, index) in educationHistory" :key="edu.id">
  <!-- Untuk index genap -->
  <div v-if="index % 2 === 0" class="mb-12 flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 w-full md:pr-8 text-left md:text-right">
      <div class="bg-white border border-[#E3DBD2] shadow-md rounded-xl p-5 relative z-10">
        <p class="text-[#72383D] font-semibold">{{ edu.period }}</p>
        <div class="flex items-center md:justify-end gap-2 mt-1">
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

    <!-- Titik timeline (desktop only) -->
    <div class="hidden md:flex justify-center items-center w-10 z-10">
      <div class="w-4 h-4 bg-[#72383D] rounded-full"></div>
    </div>
  </div>

  <!-- Untuk index ganjil -->
  <div v-else class="mb-12 flex flex-col md:flex-row items-center">
    <!-- Titik timeline (desktop only) -->
    <div class="hidden md:flex justify-center items-center w-10 z-10">
      <div class="w-4 h-4 bg-[#72383D] rounded-full"></div>
    </div>
    <div class="md:w-1/2 w-full md:pl-8 text-left">
      <div class="bg-white border border-[#E3DBD2] shadow-md rounded-xl p-5 relative z-10">
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
  </div>
</template>
