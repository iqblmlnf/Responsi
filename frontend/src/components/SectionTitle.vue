<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  title: String,
  textColor: {
    type: String,
    default: 'text-gray-800'
  }
})

const isVisible = ref(false)
const sectionRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.3 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <div
    ref="sectionRef"
    class="mb-12 text-center transition-all duration-1000 ease-out"
    :class="[
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    ]"
  >
    <h2 :class="`text-4xl font-bold ${textColor}`">{{ title }}</h2>

    <div
      :class="[
        'w-24 h-1 mx-auto mt-4 rounded',
        textColor.replace('text-', 'bg-')
      ]"
    ></div>
  </div>
</template>
