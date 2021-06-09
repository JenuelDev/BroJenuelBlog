<template>
<footer class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <div class="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <img src="~/assets/images/brojenuellogo.svg" alt="brojenuel_logo" srcset="" width="40px">
      <span class="ml-3 text-xl">Bro Jenuel</span>
    </div>
    <div class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4  whitespace-nowrap">© {{(new Date()).getFullYear()}} Bro Jenuel —
      <span @click="goToLink('https://twitter.com/brojenuel')" class="text-gray-500 ml-1 hover:text-gray-200 duration-300 cursor-pointer" target="_blank" rel="noopener">@BroJenuel</span>
    </div>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <!-- facebook -->
      <div class="text-gray-400 cursor-pointer hover:text-gray-50 duration-500" @click="goToLink('https://www.facebook.com/ganawed')">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </div>
      <!-- twitter -->
      <div class="ml-3 text-gray-400 cursor-pointer hover:text-gray-50 duration-500" @click="goToLink('https://www.twitter.com/ganawed')">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </div>
      <!-- linkedin -->
      <div class="ml-3 text-gray-400 cursor-pointer hover:text-gray-50 duration-500" @click="goToLink('https://www.linkedin.com/in/jenuelganawed/')">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </div>
    </span>
  </div>
</footer>
</template>
<script>
export default {
  methods: {
    goToLink(url) {
      window.open(url,'_blank')
    }
  }
}
</script>