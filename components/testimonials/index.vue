<script setup></script>

<template>
  <section class="p-6 sm:p-20 sm:-mt-32 font-poppins">
    <div class="grid grid-cols-8 gap-20">
      <div class="space-y-6 col-span-3">
        <p class="uppercase font-semibold text-gray-600">Testimonials</p>
        <p class="text-[#14183E] font-bold text-4xl sm:text-5xl font-volkhov leading-loose">
          What people say about Us.
        </p>
      </div>
      <div class="relative col-span-4">
          <div class="relative shadow-xl rounded-xl bg-white">
            <nuxt-img src="/images/person.jpg" alt="person" class="absolute top-0 -left-4 w-12 h-12 rounded-full" />
            <div class="space-y-7 p-10">
              <p class="text-gray-600 text-[#5E6282]">
                “On the Windows talking painted pasture yet its express parties use.
                Sure last upon he same as knew next. Of believed or diverted no.”
              </p>
              <div>
                  <p class="text-gray-600 text-[#5E6282] font-bold">Mike taylor</p>
                  <p class="text-gray-600 text-[#5E6282]">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
          <div class="absolute -right-12 top-24 -z-10 max-w-lg">
              <div class="relative border rounded-xl">
                <nuxt-img src="/images/person.jpg" alt="person" class="absolute top-0 -left-4 w-12 h-12 rounded-full" />
                <div class="space-y-7 p-10">
                  <p class="text-gray-600 text-[#5E6282]">
                    “On the Windows talking painted pasture yet its express parties use.
                    Sure last upon he same as knew next. Of believed or diverted no.”
                  </p>
                  <div>
                      <p class="text-gray-600 text-[#5E6282] font-bold">Chris Thomas</p>
                      <p class="text-gray-600 text-[#5E6282]">CEO of Red Button</p>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <div class="col-span-1">
        <Icon name="ion:chevron-down" />
        <Icon name="ion:chevron-up" />
      </div>
    </div>
  </section>
</template>
