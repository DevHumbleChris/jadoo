<script setup>
</script>

<template>
    <section class="p-6 sm:p-20 font-poppins">
        <div class="flex items-center space-x-16 justify-center overflow-x-scroll companies">
            <nuxt-picture src="/images/axon.jpg" alt="axon" class="shrink-0" />
            <nuxt-picture src="/images/jestar.jpg" alt="jestar" class="shrink-0"  />
            <nuxt-picture src="/images/expedia.jpg" alt="expedia" class="shrink-0"  />
            <nuxt-picture src="/images/qantas.jpg" alt="qantas" class="shrink-0"  />
            <nuxt-picture src="/images/alitalia.jpg" alt="alitalia" class="shrink-0"  />
        </div>
    </section>
</template>

<style scoped>
.companies::-webkit-scrollbar {
    height: 5px;
}
.companies::-webkit-scrollbar-thumb {
    background: #181E4B;
    border-radius: 10px;
}
</style>
