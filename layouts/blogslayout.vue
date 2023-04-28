<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const search = ref(null);
if (route.query.search) search.value = route.query.search as any;
</script>
<template>
    <div class="h-[100vh]">
        <div
            class="fixed top-0 left-0 flex justify-between px-20px items-center transition-all dark:bg-[var(--opacity-background)] z-999 duration-300 w-full dark:shadow-md shadow-lg backdrop-filter backdrop-blur-sm bg-[var(--background)] w-full mx-auto flex flex-wrap justify-between items-center py-3 gap-10px"
        >
            <NuxtLink href="/" class="flex items-center header-blog-title-logo">
                <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px lg:px-0 px-10px">
                    <Icon name="pajamas:project" />
                    Blog
                </div>
            </NuxtLink>
            <div class="flex gap-10px pr-4">
                <form @submit.prevent="router.replace(`/blog?search=${search}`)" class="flex items-center">
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
