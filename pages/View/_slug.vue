<template>
    <section class="text-gray-400 bg-gray-900">
        <div class="container px-5 py-24 mx-auto flex flex-col">
            <div class="lg:w-4/6 mx-auto">
                <div class="rounded-md h-64 overflow-hidden">
                    <img id="focus-here" alt="content" class="object-cover object-center h-full w-full" :src="article.img">
                </div>
                <div class="text-center mt-10">
                    <h1 class="text-xl md:text-2xl lg:text-4xl font-bold text-gray-50">{{article.title}}</h1>
                    <CommonTags :tags="article.tags" />
                    <p class="flex items-center justify-center">
                        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M7.5 7.5H7a.5.5 0 00.146.354L7.5 7.5zm0 6.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM7 3v4.5h1V3H7zm.146 4.854l3 3 .708-.708-3-3-.708.708z" fill="currentColor"></path></svg>
                        <span class="ml-3">{{dateNow(article.createdAtDate)}}</span>
                    </p>
                </div>
                <div class="flex flex-col sm:flex-row mt-10">
                    <div class="w-full">
                        <CommonShare
                            :url="href"
                            :title="article.title"
                            :description="article.description"
                            :quote="article.description"
                            :hashtags="article.tags"
                        />
                        <article class="prose dark:prose-dark prose-sm lg:prose-lg xl:prose-2xl mx-auto" >
                            <nuxt-content :document="article" />
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import relativeTime from 'dayjs/plugin/relativeTime'
import { createSEOMeta } from '@/utils/seo'
export default {
    scrollToTop:true,
    async asyncData({ $content, params }) {
        const article = await $content('articles', params.slug).fetch()
        return { article }
    },
    head() {
        return {
            title: this.article.title,
            meta: createSEOMeta({
                title: this.article.title,
                description: this.article.description,
                image: this.article.img,
                url: process.env.baseUrl +'/view/'+ this.$route.params.slug
            }),
        }
    },
    data: () => {
        return {
            href: ""
        }
    },
    methods: {
        dateNow(d) {
            this.$dayjs.extend(relativeTime)

            return this.$dayjs(d).fromNow()
        },
    },
    mounted() {
        this.href = window.location.href;
    }
}
</script>

<style lang="scss">
    .nuxt-content-container {
        p {
            a {
                @apply cursor-pointer hover:text-blue-400 duration-300;
            }
        }
        
    }
    @media only screen and (max-width: 632px) {
        .nuxt-content-highlight {
            pre {
                width: 90vw;
                overflow-x: scroll;
            }
        }
    }
</style>