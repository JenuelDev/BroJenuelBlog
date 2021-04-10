<template>
    <section class="text-gray-400 bg-gray-900">
        <div class="container px-5 py-24 mx-auto flex flex-col">
            <div class="lg:w-4/6 mx-auto">
                <div class="rounded-lg h-64 overflow-hidden">
                    <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500">
                </div>
                <div class="flex flex-col sm:flex-row mt-10">
                    <div class="w-full">
                        <article>
                            <nuxt-content :document="article" />
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('articles', params.slug).fetch()

        return { article }
    },
}
</script>