<script setup>
import Logo from "../global/Logo.vue";
</script>

<template>
  <div class="p-5 sm:px-16 sm:py-6 flex items-center w-full justify-between font-poppins">
    <Logo />
    <div class="hidden lg:flex items-center space-x-20">
      <ul class="flex items-center space-x-12">
        <li><NuxtLink to="#">Destinations</NuxtLink></li>
        <li><NuxtLink to="#">Hotels</NuxtLink></li>
        <li><NuxtLink to="#">Flights</NuxtLink></li>
        <li><NuxtLink to="#">Bookings</NuxtLink></li>
      </ul>
      <ul class="flex items-center space-x-8">
        <li><NuxtLink to="#">Login</NuxtLink></li>
        <li><NuxtLink to="#" class="border-2 rounded-lg px-3 py-2 border-gray-900">Signup</NuxtLink></li>
        <li>
          <select name="country" class="bg-transparent">
            <option value="EN" selected>EN</option>
            <option value="FRA">FRA</option>
          </select>
        </li>
      </ul>
    </div>
    <button class="lg:hidden block">
        <Icon name="icon-park-outline:hamburger-button" class="w-6 h-auto" />
    </button>
  </div>
</template>
