<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const skills = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills')
    skills.value = response.data
  } catch (error) {
    console.error(error)
  }
})

const getColor = (level) => {
  switch (level.toLowerCase()) {
    case 'mahir':
      return 'bg-green-100 text-green-700'
    case 'menengah':
      return 'bg-yellow-100 text-yellow-700'
    case 'dasar':
      return 'bg-red-100 text-red-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}
</script>

<template>
  <section id="skill" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="bg-white p-6 rounded-xl shadow-lg text-center hover:-translate-y-2 transition-all duration-300"
        >
          <h3 class="text-xl font-bold text-gray-800">{{ skill.name }}</h3>
          <span
            class="inline-block mt-3 px-3 py-1 text-sm rounded-full font-medium"
            :class="getColor(skill.level)"
          >
            {{ skill.level }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
