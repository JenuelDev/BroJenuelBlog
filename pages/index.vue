<template>
    <div class="container mr-auto ml-auto dark:bg-gray-800">
        <Contents :articles="articles"/>
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
            .fetch()

        return {articles}
    },
})
</script>