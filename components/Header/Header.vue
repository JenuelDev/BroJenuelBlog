<template>
    <header id="top-navigation" class="text-gray-400 bg-gray-900 body-font">
        <div class="max-w-4xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                <img src="~/assets/images/brojenuellogo.svg" alt="" srcset="" width="40px">
                <span class="ml-3 text-xl font-bold">Bro Jenuel</span>
            </a>
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <div class="mr-5 hover:text-white cursor-pointer hover:underline" :class="{'text-white':$route.path == '/'}" @click="$router.push('/')">Blog</div>
                <div class="mr-5 hover:text-white cursor-pointer hover:underline" :class="{'text-white':$route.path == '/about'}" @click="$router.push('/about')">About</div>
                <div class="mr-5 hover:text-white cursor-pointer hover:underline" :class="{'text-white':$route.path == '/contact'}" @click="$router.push('/contact')">Contact</div>
            </nav>
            <button @click="goToLink('https://jenuelganawed.ml')" class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                About Me
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    </header>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    methods: {
        goToLink(url: string) {
            window.open(url)
        }
    }
})
</script>