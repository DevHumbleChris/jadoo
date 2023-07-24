<template>
  <footer class="p-5 sm:px-16 sm:py-6 mt-12">
    <div
      class="w-full text-center p-12 sm:p-0 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-10 gap-20 md:gap-12 lg:gap-20"
    >
      <div class="col-span-2 space-y-3">
        <NuxtLink to="/" class="text-[#181E4B] font-medium text-5xl"
          >Jadoo.</NuxtLink
        >
        <p class="text-[#080809] text-xs font-light">
          Book your trip in minute, get full Control for much longer.
        </p>
      </div>
      <div class="col-span-6 grid grid-cols-1 sm:grid-cols-6">
        <div class="col-span-2 space-y-4">
          <p class="font-bold text-lg">Company</p>
          <div class="space-y-2">
            <NuxtLink to="/" class="block text-[#5E6282]">About</NuxtLink>
            <NuxtLink to="/" class="block text-[#5E6282]">Careers</NuxtLink>
            <NuxtLink to="/" class="block text-[#5E6282]">Mobile</NuxtLink>
          </div>
        </div>
        <div class="col-span-2 space-y-4">
          <p class="font-bold text-lg">Contact</p>
          <div class="space-y-2">
            <NuxtLink to="/" class="block text-[#5E6282]">Help/FAQ</NuxtLink>
            <NuxtLink to="/" class="block text-[#5E6282]">Press</NuxtLink>
            <NuxtLink to="/" class="block text-[#5E6282]">Affilates</NuxtLink>
          </div>
        </div>
        <div class="col-span-2 space-y-4">
          <p class="font-bold text-lg">More</p>
          <div class="space-y-2">
            <NuxtLink to="/" class="block text-[#5E6282]">Airlinefees</NuxtLink>
            <NuxtLink to="/" class="block text-[#5E6282]">Airline</NuxtLink>
            <NuxtLink to="/" class="block text-[#5E6282]"
              >Low fare tips</NuxtLink
            >
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <div class="space-y-3 md:space-y-0 lg:space-y-3">
          <div class="flex items-center justify-center sm:justify-right">
            <svg
              width="61"
              height="61"
              viewBox="0 0 61 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_108_74)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.5 49C41.8218 49 51 39.8218 51 28.5C51 17.1782 41.8218 8 30.5 8C19.1782 8 10 17.1782 10 28.5C10 39.8218 19.1782 49 30.5 49Z"
                  fill="white"
                />
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M33.1084 26.2445C32.7883 26.1432 32.4202 26.0757 32.0842 26.0757C31.6681 26.0757 30.7719 26.3626 30.7719 26.9195V28.2527H32.9003V30.4971H30.7719V36.6905H28.6275V30.4971H27.5713V28.2527H28.6275V27.122C28.6275 25.4176 29.3636 24 31.14 24C31.7481 24 32.8363 24.0338 33.4284 24.2531L33.1084 26.2445Z"
                fill="#080809"
              />
              <defs>
                <filter
                  id="filter0_d_108_74"
                  x="0"
                  y="0"
                  width="61"
                  height="61"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_108_74"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_108_74"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <nuxt-picture
              src="/images/Social.jpg"
              alt="instagram"
              width="45"
              height="45"
            />

            <svg
              width="61"
              height="61"
              viewBox="0 0 61 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_108_76)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.5 49C41.8218 49 51 39.8218 51 28.5C51 17.1782 41.8218 8 30.5 8C19.1782 8 10 17.1782 10 28.5C10 39.8218 19.1782 49 30.5 49Z"
                  fill="white"
                />
              </g>
              <path
                d="M38 23.539C37.405 23.8 36.771 23.973 36.11 24.057C36.79 23.651 37.309 23.013 37.553 22.244C36.919 22.622 36.219 22.889 35.473 23.038C34.871 22.397 34.013 22 33.077 22C31.261 22 29.799 23.474 29.799 25.281C29.799 25.541 29.821 25.791 29.875 26.029C27.148 25.896 24.735 24.589 23.114 22.598C22.831 23.089 22.665 23.651 22.665 24.256C22.665 25.392 23.25 26.399 24.122 26.982C23.595 26.972 23.078 26.819 22.64 26.578C22.64 26.588 22.64 26.601 22.64 26.614C22.64 28.208 23.777 29.532 25.268 29.837C25.001 29.91 24.71 29.945 24.408 29.945C24.198 29.945 23.986 29.933 23.787 29.889C24.212 31.188 25.418 32.143 26.852 32.174C25.736 33.047 24.319 33.573 22.785 33.573C22.516 33.573 22.258 33.561 22 33.528C23.453 34.465 25.175 35 27.032 35C33.068 35 36.368 30 36.368 25.666C36.368 25.521 36.363 25.381 36.356 25.242C37.007 24.78 37.554 24.203 38 23.539Z"
                fill="#080809"
              />
              <defs>
                <filter
                  id="filter0_d_108_76"
                  x="0"
                  y="0"
                  width="61"
                  height="61"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_108_76"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_108_76"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <p class="text-[#5E6282]">Discover our app</p>
          <div
            class="flex items-center justify-center sm:justify-right space-x-3"
          >
            <nuxt-picture
              src="/images/GooglePlay.jpg"
              alt="GooglePlay"
              width="107"
              height="35"
            />
            <nuxt-picture
              src="/images/PlayStore.jpg"
              alt="PlayStore"
              width="100"
              height="35"
            />
          </div>
        </div>
      </div>
    </div>
    <p class="text-center text-xs text-[#5E6282] mb-8 sm:mt-8">
      Made with 🥰🤗,
      <NuxtLink
        to="https://the-coding-montana.vercel.app"
        class="text-indigo-600"
        >The Coding Montana</NuxtLink
      >
    </p>
  </footer>
</template>
