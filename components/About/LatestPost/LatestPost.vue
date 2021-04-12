<template>
    <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-12">
            <div v-for="article of articles" :key="article.title" class="p-12 md:w-1/2 flex flex-col items-start">
                <span class="inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">{{article.category}}</span>
                <h2 class="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">{{article.title}}</h2>
                <p class="leading-relaxed mb-8">{{article.description}}</p>
                <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
                    <div class="text-indigo-400 inline-flex items-center cursor-pointer" @click="$router.push(`/view/${article.slug}`)">Learn More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </div>
                    <span class="text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1">
                        <svg class="mr-2" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M7.5 7.5H7a.5.5 0 00.146.354L7.5 7.5zm0 6.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM7 3v4.5h1V3H7zm.146 4.854l3 3 .708-.708-3-3-.708.708z" fill="currentColor"></path></svg>{{dateNow(article.createdAt)}}
                    </span>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>
<script lang="ts">
import Vue from 'vue'
import relativeTime from 'dayjs/plugin/relativeTime'

export default Vue.extend({
    props: ['articles'],
    methods: {
        dateNow(d: any) {
            this.$dayjs.extend(relativeTime)

            return this.$dayjs(d).fromNow()
        }
    }
})
</script>