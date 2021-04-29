<template>
<div>
  <AboutIntroSection />
  <AboutLatestPost :articles="articles" />
</div>
</template>
<script lang="ts">
import Vue from 'vue'
import { createSEOMeta } from '~/utils/seo'
export default Vue.extend({
  scrollToTop:true,
  async asyncData({$content, params }) {
        const articles = await $content('articles')
            .only(['title', 'description', 'img', 'slug', 'author', 'category','createdAt'])
            .sortBy('createdAt', 'desc')
            .limit(2)
            .fetch()
        return {articles}
    },
    head() {
        return {
            title: 'Bro Jenuel Blog - About',
            meta: createSEOMeta({
                title: "Bro Jenuel Blog - About",
                description: "...share and to keep track and have a record of things I learned in my journey as I travel to the world of being a programmer. Bookmark this website in your browsers, and check it anytime. I will be posting here at least 1 to 2 times a week..",
                image: 'https://i.ibb.co/WkWW3rs/Screenshot-2021-04-19-232949.png',
                url: process.env.baseUrl
            }),
        }
    },
})
</script>