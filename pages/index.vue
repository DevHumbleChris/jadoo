<script setup>
import Hero from '~/components/hero/index.vue'
import Category from '~/components/category/index.vue'
import Destinations from '~/components/destinations/index.vue'
import Bookings from '~/components/bookings/index.vue'
</script>

<template>
    <LazyHero />
    <LazyCategory />
    <LazyDestinations />
    <LazyBookings />
</template>
