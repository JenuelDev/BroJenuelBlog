<script setup lang="ts">
const blogs = await queryContent("blog").where({ active: 1 }).find();
</script>
<template>
    <NuxtLayout>
        <div>
            <h3 class="text-size-20px font-600">Articles:</h3>
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
