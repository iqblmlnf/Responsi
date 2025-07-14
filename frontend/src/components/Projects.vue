<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
const projects = ref([])
onMounted(async () => {
  try {
    const response = await axios.get('/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error(error);
  }
})

const getTechColor = (tech) => {
  const map = {
    Vue: 'bg-green-100 text-green-700',
    'Vue.js': 'bg-green-100 text-green-700',
    Laravel: 'bg-red-100 text-red-700',
    MySQL: 'bg-blue-100 text-blue-700',
    PostgreSQL: 'bg-blue-100 text-blue-700',
    React: 'bg-sky-100 text-sky-700',
    Firebase: 'bg-yellow-100 text-yellow-700',
    Tailwind: 'bg-teal-100 text-teal-700',
    Java: 'bg-red-100 text-red-700',
    Dart: 'bg-blue-100 text-blue-700',
  }
  return map[tech] || 'bg-gray-100 text-gray-700'
}
</script>

<template>
  <section id="proyek" class="py-20 bg-[#F5ECE2] scroll-mt-28">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" textColor="text-[#322D29]" />

      <div class="grid md:grid-cols-2 gap-12 mt-10">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-white rounded-xl border border-[#D9D9D9] shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
          <div class="overflow-hidden">
            <img
              :src="project.image"
              alt="Gambar Proyek"
              class="w-full h-64 object-cover rounded-t-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div class="p-6">
            <h3 class="text-2xl font-bold text-[#322D29] mb-2">{{ project.title }}</h3>
            <p class="text-[#72383D] mb-4">{{ project.description }}</p>

            <div class="mb-4">
              <span
                v-for="t in project.tech"
                :key="t"
                class="inline-block text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
                :class="getTechColor(t)"
              >
                {{ t }}
              </span>
            </div>

            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block mt-2 text-[#72383D] font-semibold hover:text-[#AC9C8D] transition"
            >
              Lihat Detail &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
