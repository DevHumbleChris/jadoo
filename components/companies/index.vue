<script setup></script>

<template>
  <section class="p-6 sm:p-20 font-poppins">
    <div
      class="flex items-center space-x-16 justify-center overflow-x-scroll companies"
    >
      <nuxt-picture
        src="/images/axon.jpg"
        alt="axon"
        class="shrink-0"
        width="130"
        height="130"
      />
      <nuxt-picture
        src="/images/jestar.jpg"
        alt="jestar"
        class="shrink-0"
        width="173"
        height="110"
      />
      <nuxt-picture
        src="/images/expedia.jpg"
        alt="expedia"
        class="shrink-0"
        width="162"
        height="162"
      />
      <nuxt-picture
        src="/images/qantas.jpg"
        alt="qantas"
        class="shrink-0"
        width="162"
        height="32"
      />
      <nuxt-picture
        src="/images/alitalia.jpg"
        alt="alitalia"
        class="shrink-0"
        width="94"
        height="21"
      />
    </div>
  </section>
</template>

<style scoped>
.companies::-webkit-scrollbar {
  height: 5px;
}
.companies::-webkit-scrollbar-thumb {
  background: #181e4b;
  border-radius: 10px;
}
</style>
