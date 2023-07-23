// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      theme: {
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'volkhov': ['Volkhov', 'serif']
        }
      }
    }
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore",
    ],
  },
  googleFonts: {
    families: {
      'Poppins+Sans': [400],
      'Volkhov+Serif': [400, 700]
    },
    download: true,
    base64: true,
    stylePath: 'css/fonts.css'
  },
  buildModules: ["@nuxtjs/google-fonts"],
});
