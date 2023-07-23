<script setup>
import SatelightSVG from "~/components/global/svg/SatelightSVG.vue";
import AeroplaneSVG from "~/components/global/svg/AeroplaneSVG.vue";
import MicrophoneSVG from "~/components/global/svg/MicrophoneSVG.vue";
import CogSVG from "~/components/global/svg/CogSVG.vue";
import PlusPlusSVG from "~/components/global/svg/PlusPlusSVG.vue";
</script>

<template>
  <section class="p-6 sm:p-20">
    <div class="text-center space-y-3 relative">
      <p class="uppercase font-semibold text-gray-600">Category</p>
      <h2 class="text-[#14183E] font-bold text-4xl sm:text-5xl font-volkhov">We Offer Best Services</h2>
      <PlusPlusSVG />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-8 sm:p-0 gap-8 sm:gap-16 items-center my-4 sm:my-12 text-center">
      <div class="relative group">
        <div class="space-y-3 cursor-pointer mt-2 group-hover:border  p-12 sm:px-6 sm:py-12 group-hover:rounded-3xl group-hover:z-20 group-hover:bg-white group-hover:drop-shadow-2xl">
          <SatelightSVG />
          <p class="text-[#1E1D4C] font-semibold">Calculated Weather</p>
          <p class="text-xs text-gray-500">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
        </div>
        <svg
          class="hidden group-hover:block group-hover:absolute group-hover:-bottom-4 group-hover:w-20 group-hover:-left-4 group-hover:-z-10"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 30C0 13.4315 13.4315 0 30 0H100V90C100 95.5228 95.5229 100 90 100H0V30Z"
            fill="#DF6951"
          />
        </svg>
      </div>
      <div class="relative group">
        <div class="space-y-3 cursor-pointer -mt-6 group-hover:border px-6 py-12 group-hover:rounded-3xl group-hover:z-20 group-hover:bg-white group-hover:drop-shadow-2xl">
          <AeroplaneSVG />
          <p class="text-[#1E1D4C] font-semibold">Best Flights</p>
          <p class="text-xs text-gray-500">
            Engrossed listening. Park gate sell they west hard for the.
          </p>
        </div>
        <svg
          class="hidden group-hover:block group-hover:absolute group-hover:-bottom-4 group-hover:w-20 group-hover:-left-4 group-hover:-z-10"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 30C0 13.4315 13.4315 0 30 0H100V90C100 95.5228 95.5229 100 90 100H0V30Z"
            fill="#DF6951"
          />
        </svg>
      </div>
      <div class="relative group">
        <div class="space-y-3 cursor-pointer mt-1 group-hover:border px-6 py-12 group-hover:rounded-3xl group-hover:z-20 group-hover:bg-white group-hover:drop-shadow-2xl">
          <MicrophoneSVG />
          <p class="text-[#1E1D4C] font-semibold">Local Events</p>
          <p class="text-xs text-gray-500">
            Barton vanity itself do in it. Preferd to men it engrossed
            listening.
          </p>
        </div>
        <svg
          class="hidden group-hover:block group-hover:absolute group-hover:-bottom-4 group-hover:w-20 group-hover:-left-4 group-hover:-z-10"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 30C0 13.4315 13.4315 0 30 0H100V90C100 95.5228 95.5229 100 90 100H0V30Z"
            fill="#DF6951"
          />
        </svg>
      </div>
      <div class="relative group">
        <div class="space-y-3 cursor-pointer group-hover:border px-6 py-12 group-hover:rounded-3xl group-hover:z-20 group-hover:bg-white group-hover:drop-shadow-2xl">
          <CogSVG />
          <p class="text-[#1E1D4C] font-semibold">Customization</p>
          <p class="text-xs text-gray-500">
            We deliver outsourced aviation services for military customers
          </p>
        </div>
        <svg
          class="hidden group-hover:block group-hover:absolute group-hover:-bottom-4 group-hover:w-20 group-hover:-left-4 group-hover:-z-10"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 30C0 13.4315 13.4315 0 30 0H100V90C100 95.5228 95.5229 100 90 100H0V30Z"
            fill="#DF6951"
          />
        </svg>
      </div>
    </div>
  </section>
</template>
