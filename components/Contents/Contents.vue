<template>
    <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-10 mx-auto">
            <div class="flex flex-col">
                <div class="h-1 bg-gray-800 rounded overflow-hidden">
                    <div class="w-24 h-full bg-blue-500"></div>
                </div>
                <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                    <h1
                        class="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0"
                    >
                        Blog Contents
                    </h1>
                </div>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <CommonBlogCard
                            v-for="article of articles"
                            :article="article"
                            :key="article.slug"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['articles']
}
</script>