<template>
  <section id="profil" class="py-20 bg-[#EFE9E1] scroll-mt-28">
    <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-10 md:mb-0">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight text-[#322D29]">
          Halo, Saya <span class="text-[#72383D] drop-shadow-md">Iqbal Maulana Fajar</span>
        </h1>
        <p class="text-lg text-[#72383D] mt-4 leading-relaxed">
          Mahasiswa <span class="font-semibold text-[#AC9C8D]">Teknik Informatika</span> yang
          bersemangat dalam <span class="text-[#AC9C8D] font-medium">pengembangan web</span> dan
          <span class="text-[#AC9C8D] font-medium">desain antarmuka</span>.
        </p>
        <a
          href="#kontak"
          class="mt-6 inline-flex items-center gap-2 bg-[#72383D] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#AC9C8D] transition duration-300 transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
          Hubungi Saya
        </a>
      </div>
      <div class="md:w-1/2 flex justify-center animate-slide-in-right">
        <img
          src="/images/foto1.jpg"
          alt="Foto Profil"
          class="w-80 h-100 rounded-full object-cover shadow-lg border border-[#D9D9D9]"
        />
      </div>
    </div>
  </section>
</template>
