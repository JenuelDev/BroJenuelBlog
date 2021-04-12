<template>
<div>
  <AboutIntroSection />
  <AboutLatestPost :articles="articles" />
</div>
</template>
<script lang="ts">
import Vue from 'vue'
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
})
</script>