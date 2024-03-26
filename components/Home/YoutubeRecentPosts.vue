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
        <div class="grid sm:grid-cols-3 grid-cols-2 gap-2">
            <NuxtLink
                v-for="(post, i) in youtubePosts"
                :href="post.link"
                target="_blank"
                class="rounded-lg p-3px dark:text-white decoration-none text-[var(--color)]"
            >
                <div
                    class="rounded-md p-4 overflow-hidden border border-3px flex flex-col justify-between h-100px dark:bg-gray-50 dark:text-dark-700 bg-dark-800 text-white"
                >
                    <div class="font-bold">
                        <Icon name="logos:youtube-icon" size="25" />
                        {{ post.title }}
                    </div>
                    <div class="text-xs opacity-50">@BroJenuel</div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
