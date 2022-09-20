<script setup lang="ts">
const blogs = await queryContent("blog")
    .where({ active: 1 })
    .sort({ _path: -1 })
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

            <!-- Social Media Tags -->
            <!-- Facebook -->
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

            <!-- Twitter -->
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
            <div class="flex flex-col gap-20px mt-10px">
                <NuxtLink
                    v-for="article in blogs"
                    :key="article._path"
                    :to="article._path"
                    class="hover:underline"
                >
                    <h2 class="font-700 text-size-20px">
                        {{ article.title }}
                    </h2>
                    <p>{{ article.description }}</p>
                </NuxtLink>
            </div>
        </div>
    </NuxtLayout>
</template>
