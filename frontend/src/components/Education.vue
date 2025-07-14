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
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />
      <div class="relative">
        <div class="absolute h-full border-r-4 border-[#D9D9D9] left-1/2 transform -translate-x-1/2"></div>
        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-12 flex justify-between items-center w-full"
        >
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="w-1/2 pr-8 text-right">
              <div class="bg-white border border-[#E3DBD2] shadow-md rounded-xl p-5 inline-block text-left">
                <p class="text-[#72383D] font-semibold">{{ edu.period }}</p>
                <div class="flex justify-end items-center gap-2 mt-1">
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
            <div class="w-1/2 flex justify-start">
              <div class="w-4 h-4 bg-[#72383D] rounded-full z-10"></div>
            </div>
          </div>
          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end">
              <div class="w-4 h-4 bg-[#72383D] rounded-full z-10"></div>
            </div>
            <div class="w-1/2 pl-8 text-left">
              <div class="bg-white border border-[#E3DBD2] shadow-md rounded-xl p-5 inline-block">
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
        </div>
      </div>
    </div>
  </section>
</template>

