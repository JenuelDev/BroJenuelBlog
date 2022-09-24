<script setup lang="ts"></script>

<template>
    <NuxtLayout name="bloglayout">
        <ContentDoc v-slot="{ doc }">
            <Head>
                <Title>{{ doc.title }}</Title>
                <Meta name="description" :content="doc.description" />
                <Meta name="keywords" :content="doc.keywords.join(',')"></Meta>
                <Meta name="copyright" content="BroJenuel" />
                <Meta name="language" content="ES" />
                <Meta name="summary" :content="doc.description" />
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
                <Meta name="og:title" :content="doc.title" />
                <Meta name="og:description" :content="doc.description" />
                <Meta name="og:image" :content="doc.image" />
                <Meta name="og:site_name" content="blog.brojenuel.com" />
                <Meta
                    name="og:url"
                    :content="'https://blog.brojenuel.com' + doc._path"
                />

                <!-- Twitter -->
                <Meta name="twitter:title" :content="doc.title" />
                <Meta name="twitter:description" :content="doc.description" />
                <Meta name="twitter:image" :content="doc.image" />
                <Meta
                    name="twitter:url"
                    :content="'https://blog.brojenuel.com' + doc._path"
                />
                <Meta name="twitter:card" content="summery_large_image" />
            </Head>
            <main class="view-blog-content">
                <div class="mb-50px text-center">
                    <h1
                        class="!text-size-25px !sm:text-size-30px font-800 mb-4"
                    >
                        {{ doc.title }}
                    </h1>
                    <div class="flex gap-8px mt-10px justify-center">
                        <span
                            v-for="word in doc.keywords"
                            :key="word"
                            class="keywords"
                            :class="word"
                        >
                            {{ word }}
                        </span>
                    </div>
                </div>
                <ContentRenderer :value="doc" />
            </main>
        </ContentDoc>
    </NuxtLayout>
</template>
<style lang="postcss">
.view-blog-content {
    ul {
        @apply list-upper-roman;
    }
}
</style>
