<script setup>
defineProps({
  title: String,
  textColor: {
    type: String,
    default: 'text-gray-800',
  },
})
</script>

<template>
  <div class="mb-12 text-center">
    <h2 :class="`text-4xl font-bold ${textColor}`">{{ title }}</h2>
    <div class="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
  </div>
</template>
