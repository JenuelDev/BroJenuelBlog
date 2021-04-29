<template>
    <div class="container mr-auto ml-auto dark:bg-gray-800">
        <Contents :articles="articles"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createSEOMeta } from '@/utils/seo'

export default Vue.extend({
    scrollToTop:true,
    async asyncData({$content, params } : any) {
        const articles = await $content('articles')
            .only(['title', 'description', 'img', 'slug', 'author', 'category','createdAt','createdAtDate'])
            .sortBy('createdAtDate', 'desc')
            .fetch()

        return {articles}
    },
    head: {
        title: 'Home - Bro Jenuel Blog',
        meta: createSEOMeta({
            title: "Home - Bro Jenuel Blog",
            description: "Jenuel Ganawed ... share and to keep track and have a record of things I learned in my journey as I travel to the world of being a programmer. Bookmark this website in your browsers, and check it anytime. I will be posting here at least 1 to 2 times a week..",
            image: 'https://i.ibb.co/WkWW3rs/Screenshot-2021-04-19-232949.png',
            url: process.env.baseUrl
        }),
    },
})
</script>