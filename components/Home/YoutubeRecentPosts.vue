<script lang="ts" setup>
const youtubePosts = [
    {
        title: "Vite + Vue 3 + Electron",
        link: "https://www.youtube.com/watch?v=mzwQwnolMYg",
    },
    {
        title: "Liquid UI Element Html, CSS, JavaScript",
        link: "https://www.youtube.com/watch?v=EPrO9IYyBxo",
    },
    {
        title: "Knockout Text Html and CSS",
        link: "https://www.youtube.com/watch?v=_8X3kxcQI3w&t=138s",
    },
];
</script>
<template>
    <div class="w-full max-w-700px mx-auto">
        <div class="py-3">
            <span class="lg:text-lg font-bold"> Youtube Recent Posts </span>
            <NuxtLink
                href="https://youtube.com/@brojenuel"
                target="_blank"
                class="decoration-none text-blue-400 hover:bg-blue-500 hover:bg-opacity-20 rounded-md px-2 py-1"
            >
                Watch More
                <Icon name="material-symbols:arrow-right-alt" />
            </NuxtLink>
        </div>
        <div class="grid grid-cols-1 gap-2">
            <NuxtLink
                v-for="post in youtubePosts"
                :href="post.link"
                target="_blank"
                class="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-100 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800 text-dark-300 dark:text-gray-300 decoration-none"
            >
                <div>
                    <Icon
                        name="logos:youtube-icon"
                        size="25"
                        class="bg-white rounded-full p-1 mr-2"
                    />
                    {{ post.title }}
                </div>
                <Icon name="material-symbols:arrow-right-alt" />
            </NuxtLink>
        </div>
    </div>
</template>
