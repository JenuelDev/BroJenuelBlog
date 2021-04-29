<template>
    <div class="p-4 md:w-1/2 sm:w-1/2 lg:w-1/3 xl:w-1/4">
        <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden flex flex-col justify-between">
            <div>
                <img @click="$router.push(`/view/${article.slug}`)" class="lg:h-48 md:h-36 w-full object-cover object-center cursor-pointer" :src="article.img" alt="article_image_header">
                <div class="p-6 flex flex-col justify-between">
                    <div>
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{{article.category}}</h2>
                        <h1 class="title-font text-lg font-medium text-white mb-3 cursor-pointer hover:text-blue-400 duration-300"
                        @click="$router.push(`/view/${article.slug}`)">{{article.title}}</h1>
                        <p class="leading-relaxed mb-3">{{article.description.slice(0, 140)}} ...</p>
                    </div>
                </div>
            </div>
            <div class="flex items-center px-6 pb-6 justify-between">
                    <div class="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer hover:text-blue-200 duration-200"
                        @click="$router.push(`/view/${article.slug}`)"
                    >
                        Read More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </div>
                    <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm">
                        <svg class="mr-2" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M7.5 7.5H7a.5.5 0 00.146.354L7.5 7.5zm0 6.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM7 3v4.5h1V3H7zm.146 4.854l3 3 .708-.708-3-3-.708.708z" fill="currentColor"></path></svg>{{dateNow(article.createdAtDate)}}
                    </span>
                </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import relativeTime from 'dayjs/plugin/relativeTime'
export default Vue.extend({
    props: ['article'],
    methods: {
        dateNow(d: any) {
            this.$dayjs.extend(relativeTime)
            return this.$dayjs(d).fromNow()
        }
    }
})
</script>