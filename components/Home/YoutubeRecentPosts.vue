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
                to="/blog"
                class="decoration-none text-blue-400 hover:bg-blue-500 hover:bg-opacity-20 rounded-md px-2 py-1"
            >
                Watch More
                <Icon name="material-symbols:arrow-right-alt" />
            </NuxtLink>
        </div>
        <div class="grid sm:grid-cols-3 grid-cols-2 gap-2">
            <NuxtLink
                v-for="(post, i) in youtubePosts"
                :to="post.link"
                class="rounded-lg bg-gradient-to-r p-3px dark:text-white decoration-none text-[var(--color)]"
                :class="{
                    'from-green-100 via-blue-400 to-purple-200': i == 1,
                    'from-pink-200 via-purple-300 to-blue-400': i == 0,
                    'from-yellow-100 via-red-300 to-red-300': i == 2,
                }"
            >
                <div
                    class="rounded-md bg-[var(--background)] p-4 overflow-hidden border border-3px flex flex-col justify-between h-100px"
                >
                    <div>
                        <Icon name="logos:youtube-icon" size="25" />
                        {{ post.title }}
                    </div>
                    <div class="text-xs opacity-50">@BroJenuel</div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
