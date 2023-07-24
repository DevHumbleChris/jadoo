<script setup></script>

<template>
  <section class="p-6 sm:p-20 sm:-mt-32 font-poppins">
    <div class="text-center space-y-3 relative">
      <p class="capitalize font-semibold text-gray-600">
        Top Selling
      </p>
      <h2 class="text-[#14183E] font-bold text-4xl sm:text-5xl font-volkhov">
        Top Destinations
      </h2>
      <PlusPlusSVG />
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 my-12 px-4 sm:p-0"
    >
      <div>
        <nuxt-img
          format="webp"
          src="/images/rome.png"
          alt="rome"
          class="w-full h-80 object-cover rounded-t-3xl"
          width="314"
          height="457"
        />
        <div
          class="space-y-3 p-3 border-b border-r border-l rounded-x-3xl rounded-b-3xl bg-white shadow-xl"
        >
          <div class="flex items-center justify-between font-poppins">
            <p class="text-gray-500 font-medium">Rome</p>
            <p class="text-gray-500 font-medium">$5,42k</p>
          </div>
          <div class="flex items-center justify-even space-x-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0682 2.76033L11.1932 17.7603C11.1357 17.886 11.0381 17.989 10.9158 18.0533C10.7935 18.1177 10.6533 18.1396 10.5172 18.1158C10.3811 18.092 10.2567 18.0237 10.1635 17.9217C10.0703 17.8197 10.0135 17.6896 10.0021 17.5519L9.42083 10.579L2.44789 9.99771C2.31017 9.98627 2.18013 9.92951 2.0781 9.8363C1.97607 9.7431 1.90781 9.61871 1.88399 9.48258C1.86017 9.34646 1.88213 9.20628 1.94645 9.08397C2.01077 8.96166 2.11381 8.86411 2.23945 8.80658L17.2395 1.93158C17.3554 1.87844 17.4849 1.86205 17.6104 1.88461C17.736 1.90718 17.8516 1.96762 17.9418 2.05781C18.032 2.14801 18.0924 2.26365 18.115 2.38919C18.1375 2.51474 18.1212 2.64418 18.068 2.76014L18.0682 2.76033Z"
                fill="#080809"
              />
            </svg>
            <p class="text-gray-500 font-medium">10 Days Trip</p>
          </div>
        </div>
      </div>
      <div>
        <nuxt-img
          format="webp"
          src="/images/london.jpg"
          alt="london"
          class="w-full h-80 object-cover rounded-t-3xl"
          width="314"
          height="457"
        />
        <div
          class="space-y-3 p-3 border-b border-r border-l rounded-x-3xl rounded-b-3xl bg-white shadow-xl"
        >
          <div class="flex items-center justify-between font-poppins">
            <p class="text-gray-500 font-medium">London, UK</p>
            <p class="text-gray-500 font-medium">$4.2k</p>
          </div>
          <div class="flex items-center justify-even space-x-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0682 2.76033L11.1932 17.7603C11.1357 17.886 11.0381 17.989 10.9158 18.0533C10.7935 18.1177 10.6533 18.1396 10.5172 18.1158C10.3811 18.092 10.2567 18.0237 10.1635 17.9217C10.0703 17.8197 10.0135 17.6896 10.0021 17.5519L9.42083 10.579L2.44789 9.99771C2.31017 9.98627 2.18013 9.92951 2.0781 9.8363C1.97607 9.7431 1.90781 9.61871 1.88399 9.48258C1.86017 9.34646 1.88213 9.20628 1.94645 9.08397C2.01077 8.96166 2.11381 8.86411 2.23945 8.80658L17.2395 1.93158C17.3554 1.87844 17.4849 1.86205 17.6104 1.88461C17.736 1.90718 17.8516 1.96762 17.9418 2.05781C18.032 2.14801 18.0924 2.26365 18.115 2.38919C18.1375 2.51474 18.1212 2.64418 18.068 2.76014L18.0682 2.76033Z"
                fill="#080809"
              />
            </svg>
            <p class="text-gray-500 font-medium">12 Days Trip</p>
          </div>
        </div>
      </div>
      <div class="relative">
        <nuxt-img
          format="webp"
          src="/images/europe.jpg"
          alt="europe"
          class="w-full h-80 object-cover rounded-t-3xl"
          width="314"
          height="457"
        />
        <div
          class="space-y-3 p-3 border-b border-r border-l rounded-x-3xl rounded-b-3xl bg-white shadow-xl"
        >
          <div class="flex items-center justify-between font-poppins">
            <p class="text-gray-500 font-medium">Full Europe</p>
            <p class="text-gray-500 font-medium">$15k</p>
          </div>
          <div class="flex items-center justify-even space-x-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0682 2.76033L11.1932 17.7603C11.1357 17.886 11.0381 17.989 10.9158 18.0533C10.7935 18.1177 10.6533 18.1396 10.5172 18.1158C10.3811 18.092 10.2567 18.0237 10.1635 17.9217C10.0703 17.8197 10.0135 17.6896 10.0021 17.5519L9.42083 10.579L2.44789 9.99771C2.31017 9.98627 2.18013 9.92951 2.0781 9.8363C1.97607 9.7431 1.90781 9.61871 1.88399 9.48258C1.86017 9.34646 1.88213 9.20628 1.94645 9.08397C2.01077 8.96166 2.11381 8.86411 2.23945 8.80658L17.2395 1.93158C17.3554 1.87844 17.4849 1.86205 17.6104 1.88461C17.736 1.90718 17.8516 1.96762 17.9418 2.05781C18.032 2.14801 18.0924 2.26365 18.115 2.38919C18.1375 2.51474 18.1212 2.64418 18.068 2.76014L18.0682 2.76033Z"
                fill="#080809"
              />
            </svg>
            <p class="text-gray-500 font-medium">28 Days Trip</p>
          </div>
        </div>
        <svg
        class="hidden lg:block absolute bottom-5 -right-16 -z-10 w-24"
        viewBox="0 0 98 254"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.95816 14.2344C15.985 5.71795 33.7527 -7.37604 48.6094 8.37933C63.4661 24.1347 43.423 53.6228 31.5443 66.3974C25.6886 69.9459 13.4754 75.9784 11.4677 71.7202C8.95816 66.3974 7.45241 55.2196 28.0309 45.6387C41.248 39.961 69.7902 33.9286 78.2224 55.2196C82.0704 64.4457 82.7396 85.8787 54.6324 97.8017L19.4984 113.238M19.4984 113.238C6.11398 113.774 -13.1261 107.392 16.9888 77.5752C26.5252 72.9621 49.6133 63.6296 65.6746 63.2038C74.8763 65.1554 92.5772 74.8074 89.7665 97.8017C90.1011 102.415 83.8439 113.876 56.1382 122.819C49.7806 124.238 35.5597 127.183 29.5367 127.609L7.95439 130.803L19.4984 113.238ZM19.4984 113.238C28.2808 110.754 49.0085 106.531 61.6592 109.512C77.4727 113.238 83.7435 110.044 96.2913 130.803C98.4663 141.448 96.8936 163.272 73.2033 165.401C49.5129 167.53 34.2212 163.449 29.5367 161.143V141.448M29.5367 141.448C46.7691 143.045 83.7435 141.874 93.7818 124.415C98.6336 111.996 99.0017 86.6239 61.6592 84.4948C52.6248 84.8496 33.3513 85.9852 28.5329 87.6884L29.5367 125.48C47.1037 127.077 84.0446 134.635 91.2722 152.094C95.1202 162.207 96.3917 183.498 70.6937 187.756C61.1573 188.111 39.575 186.798 29.5367 178.708M29.5367 141.448V178.708M29.5367 141.448C40.4115 144.11 64.3696 151.455 73.2033 159.546C83.9108 168.417 99.604 190.418 76.7167 207.45C69.5225 210.112 50.4163 212.241 31.5443 199.466M29.5367 178.708L31.5443 199.466M29.5367 178.708C41.5827 187.224 66.1765 207.876 68.1841 222.354C69.0207 231.225 66.7788 249.713 51.119 252.694C47.1037 253.404 37.1658 253.333 29.5367 247.371L31.5443 199.466"
          stroke="#84829A"
        />
      </svg>
      </div>

    </div>
  </section>
</template>
