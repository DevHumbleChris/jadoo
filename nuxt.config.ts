// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui"
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore',
    ],
  },
})
