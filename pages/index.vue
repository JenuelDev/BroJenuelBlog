<template>
    <NuxtLayout>
        <div>
            <div class="border rounded-md p-5 mb-10">
                Hi! This blog is under construction but feel free to read some
                of my articles.
            </div>
            <h3 class="text-size-20px font-600">Articles:</h3>
            <div class="flex flex-col gap-20px mt-10px">
                <ContentList path="/blog" v-slot="{ list }">
                    <NuxtLink
                        v-for="article in list"
                        :key="article._path"
                        :to="article._path"
                        class="hover:underline"
                    >
                        <h2>{{ article.title }}</h2>
                        <p>{{ article.description }}</p>
                    </NuxtLink>
                </ContentList>
            </div>
        </div>
    </NuxtLayout>
</template>
