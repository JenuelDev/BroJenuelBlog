<script setup lang="ts">
const route = useRoute();
const search = ref(null);
if (route.query.search) search.value = route.query.search as any;

function searchRoute() {
    location.href = `/blog?search=${search.value}`;
}
</script>
<template>
    <div class="h-[100vh]">
        <div
            class="fixed top-0 left-0 flex justify-between px-20px items-center transition-all dark:bg-[var(--opacity-background)] z-999 duration-300 w-full dark:shadow-md shadow-lg backdrop-filter backdrop-blur-sm bg-[var(--background)] w-full mx-auto flex flex-wrap justify-between items-center py-3 gap-10px"
        >
            <NuxtLink href="/" class="flex">
                <div class="flex items-center gap-7px lg:px-0 px-10px">
                    <Icon name="pajamas:project" class="text-[var(--primary)]" />
                    <div>
                        <span>Bro</span>
                        <span class="text-[var(--primary)] font-800">Jenuel</span>
                        <span>Blog</span>
                    </div>
                </div>
            </NuxtLink>
            <div class="flex gap-10px pr-4">
                <form @submit.prevent="searchRoute" class="flex items-center">
                    <input
                        class="w-full shadow appearance-none border border-[var(--background)] rounded w-full text-white leading-tight focus:border-gray-400 focus:outline-none focus:shadow-outline bg-[var(--background-secondary)] h-30px px-3"
                        type="text"
                        placeholder="Search..."
                        v-model="search"
                    />
                    <button
                        type="submit"
                        class="w-full shadow appearance-none border border-[var(--background)] rounded text-white leading-tight focus:border-gray-400 focus:outline-none focus:shadow-outline bg-[var(--background-secondary)] h-30px w-30px flex items-center justify-center"
                        name="search article"
                        title="search articles"
                    >
                        <Icon name="ri:search-fill" />
                    </button>
                </form>
                <div class="mt-2px">
                    <ThemeChangerButton />
                </div>
            </div>
        </div>
        <slot />
    </div>
</template>
<style lang="scss">
@media (max-width: 375px) {
    .header-blog-title-logo {
        display: none;
    }
}
</style>
