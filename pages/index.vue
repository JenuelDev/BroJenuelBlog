<script setup lang="ts">
const blogs = await queryContent("blog")
    .where({ active: 1 })
    .sort({ _file: -1 })
    .find();

const title = "BroJenuel Blog - Jenuel Ganawed";
const description = "Learn about programming, and all technical stuffs.";
</script>
<template>
    <NuxtLayout>
        <Head>
            <Title>{{ title }}</Title>
            <Meta name="description" :content="description" />
            <Meta
                name="keywords"
                content="jenuel ganawed, brojenuel, blog, blogging jenuel, blog brojenuel"
            ></Meta>
            <Meta name="copyright" content="BroJenuel" />
            <Meta name="language" content="ES" />
            <Meta name="summary" :content="description" />
            <Meta name="robots" content="index, follow" />
            <Meta
                name="author"
                content="BroJenuel, jenuelganawed936@gmail.com"
            />
            <Meta name="url" content="https://blog.brojenuel.com" />
            <Meta name="og:locale" content="en_US" />
            <Meta name="og:type" content="article" />
            <Meta name="og:title" :content="title" />
            <Meta name="og:description" :content="description" />
            <Meta
                name="og:image"
                content="https://blog.brojenuel.com/img/brojenuel-blog.webp"
            />
            <Meta name="og:site_name" content="blog.brojenuel.com" />
            <Meta name="og:url" content="https://blog.brojenuel.com" />
            <Meta name="twitter:title" :content="title" />
            <Meta name="twitter:description" :content="description" />
            <Meta
                name="twitter:image"
                content="https://blog.brojenuel.com/img/brojenuel-blog.webp"
            />
            <Meta name="twitter:url" content="https://blog.brojenuel.com" />
            <Meta name="twitter:card" content="summery_large_image" />
        </Head>
        <div>
            <div class="flex flex-col sm:flex-row flex-wrap gap-30px mt-10px">
                <div
                    v-for="article in blogs"
                    :key="article._path"
                    class="min-w-290px max-w-350px flex-1"
                >
                    <NuxtLink :to="article._path">
                        <img
                            :src="article.image_thumbnail"
                            :alt="article.image_title"
                            class="rounded-md overflow-hidden mb-10px"
                        />
                        <h2 class="font-700 text-size-20px mb-2">
                            {{ article.title }}
                        </h2>
                        <p class="line-clamp">
                            {{ article.description }}
                        </p>
                        <small class="flex gap-4px">
                            <span class="w-16px"><IconCalendar /></span>
                            {{ article.date }}
                        </small>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
<style lang="scss">
.line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
