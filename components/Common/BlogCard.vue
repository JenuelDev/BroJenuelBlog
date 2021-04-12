<template>
    <div class="p-4 md:w-1/2 sm:w-1/2 lg:w-1/3 xl:w-1/4">
        <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden flex flex-col justify-between">
            <div>
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="article.img" alt="blog">
                <div class="p-6 flex flex-col justify-between">
                    <div>
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{{article.category}}</h2>
                        <h1 class="title-font text-lg font-medium text-white mb-3">{{article.title}}</h1>
                        <p class="leading-relaxed mb-3">{{article.description}}</p>
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
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                        </svg>{{dateNow(article.createdAt)}}
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