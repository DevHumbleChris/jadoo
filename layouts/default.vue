<script setup>
import Footer from '~/components/global/Footer.vue';
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { property: 'og:title', content: `Jadoo` },
    { name: 'description', content: 'Jadoo is a travel agency landing page built with Nuxt 3 and TailwindCSS.' },
    { property: 'og:description', content: 'Jadoo is a travel agency landing page built with Nuxt 3 and TailwindCSS.' },
    { property: 'og:url', content: 'https://jadoo-ke.vercel.app/' },
    { name: 'twitter:title', content: 'Jadoo' },
    { name: 'twitter:description', content: 'Jadoo is a travel agency landing page built with Nuxt 3 and TailwindCSS.' },
    { name: 'twitter:site', content: 'https://jadoo-ke.vercel.app/' }
  ],
  title: `Jadoo`,
})
</script>

<template>
  <main class="max-w-8xl">
    <slot/>
    <Footer />
  </main>
</template>
