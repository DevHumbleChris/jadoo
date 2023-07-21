<script setup>
import Logo from "../global/Logo.vue";
</script>

<template>
  <div class="p-4 flex items-center w-full justify-between font-poppins">
    <Logo />
    <div class="flex items-center space-x-20">
      <ul class="flex items-center space-x-12">
        <li><a href="">Destinations</a></li>
        <li><a href="">Hotels</a></li>
        <li><a href="">Flights</a></li>
        <li><a href="">Bookings</a></li>
      </ul>
      <ul class="flex items-center space-x-8">
        <li><a href="">Login</a></li>
        <li><a href="">Signup</a></li>
        <li>
          <select name="country">
            <option value="EN" selected>EN</option>
            <option value="FRA">FRA</option>
          </select>
        </li>
      </ul>
    </div>
  </div>
</template>
