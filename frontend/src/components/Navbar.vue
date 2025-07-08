<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header class="bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50 animate-fade-in">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-indigo-700 tracking-wide">Iqbal</div>

      <button
        class="md:hidden text-indigo-700 focus:outline-none"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <ul
        class="hidden md:flex space-x-6 text-sm font-medium text-gray-700"
      >
        <li><a href="#profil" class="hover:text-indigo-600 transition">Profil</a></li>
        <li><a href="#pendidikan" class="hover:text-indigo-600 transition">Pendidikan</a></li>
        <li><a href="#skill" class="hover:text-indigo-600 transition">Skill</a></li>
        <li><a href="#proyek" class="hover:text-indigo-600 transition">Proyek</a></li>
        <li><a href="#kontak" class="hover:text-indigo-600 transition">Kontak</a></li>
      </ul>
    </nav>

    <div
      v-if="isOpen"
      class="md:hidden px-6 pb-4"
    >
      <ul class="flex flex-col space-y-3 text-sm font-medium text-gray-700">
        <li><a href="#profil" @click="toggleMenu" class="hover:text-indigo-600">Profil</a></li>
        <li><a href="#pendidikan" @click="toggleMenu" class="hover:text-indigo-600">Pendidikan</a></li>
        <li><a href="#skill" @click="toggleMenu" class="hover:text-indigo-600">Skill</a></li>
        <li><a href="#proyek" @click="toggleMenu" class="hover:text-indigo-600">Proyek</a></li>
        <li><a href="#kontak" @click="toggleMenu" class="hover:text-indigo-600">Kontak</a></li>
      </ul>
    </div>
  </header>
</template>
