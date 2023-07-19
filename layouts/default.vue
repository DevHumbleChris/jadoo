<script setup>
useHead({
  meta: [
    { property: "og:title", content: `Jadoo` },
    {
      name: "description",
      content:
        "Jadoo is a travel agency landing page built with Nuxt 3 and TailwindCSS.",
    },
    {
      property: "og:description",
      content:
        "Jadoo is a travel agency landing page built with Nuxt 3 and TailwindCSS.",
    },
    { property: "og:url", content: "https://nuxt-gmail-clone.vercel.app" },
    { name: "twitter:title", content: "Jadoo" },
    {
      name: "twitter:description",
      content:
        "Jadoo is a travel agency landing page built with Nuxt 3 and TailwindCSS.",
    },
    { name: "twitter:site", content: "https://nuxt-gmail-clone.vercel.app" },
  ],
  title: `Jadoo`,
});
</script>

<template>
  <main>
    <slot />
  </main>
</template>
