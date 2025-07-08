<script setup>
import SectionTitle from './SectionTitle.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
</script>

<template>
  <footer id="kontak" class="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" textColor="text-white" />
      <p class="text-lg text-gray-300 mb-8">Jangan ragu untuk terhubung atau bertanya langsung.</p>
      <a
        href="mailto:emailanda@example.com"
        class="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-lg inline-flex items-center gap-2 font-semibold text-white shadow-md mb-10"
      >
        <i class="fas fa-envelope"></i> Kirim Email
      </a>
      <div class="flex justify-center space-x-6 text-2xl mb-10">
        <a href="https://github.com/username" target="_blank" class="text-gray-400 hover:text-white transition">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/username" target="_blank" class="text-gray-400 hover:text-white transition">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="mailto:emailanda@example.com" class="text-gray-400 hover:text-white transition">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
      <p class="text-sm text-gray-500">
        &copy; {{ new Date().getFullYear() }} Iqbal Maulana Fajar. Dibuat dengan sepenuh hati ❤️
      </p>
    </div>
  </footer>
</template>
