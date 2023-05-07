<script setup lang="ts">
const route = useRoute();
const search = ref(null);
const colorMode = useColorMode();
const theme = ref("");
const { share } = useShareFunction();

onMounted(() => (theme.value = colorMode.preference));

watch(
    () => colorMode.value,
    (val) => (theme.value = val)
);
if (route.query.search) search.value = route.query.search as any;

function searchRoute() {
    location.href = `/blog?search=${search.value}`;
}
</script>
<template>
    <div class="h-[100vh]">
        <div
            class="fixed top-0 left-0 flex md:flex-row flex-col md:justify-between justify-center px-20px items-center transition-all dark:bg-[var(--opacity-background)] z-999 duration-300 w-full dark:shadow-md shadow-lg backdrop-filter backdrop-blur-sm bg-[var(--background)] w-full mx-auto flex flex-wrap items-center py-3 gap-10px"
        >
            <div class="flex gap-10px">
                <NuxtLink href="/blog" class="flex">
                    <div class="flex items-center gap-7px lg:px-0 px-10px">
                        <Icon name="pajamas:project" class="text-[var(--primary)]" />
                        <div>
                            <span>Bro</span>
                            <span class="text-[var(--primary)] font-800">Jenuel</span>
                            <span>Blog</span>
                        </div>
                    </div>
                </NuxtLink>
                <NuxtLink href="/">
                    <button
                        type="button"
                        @click="$colorMode.preference = 'dark'"
                        class="w-25px h-25px rounded-md flex items-center justify-center transition-all duration-500"
                        :class="{
                            'bg-yellow-50 text-[var(--background)]': theme == 'dark',
                            'bg-[#0a192f] text-light-50': theme == 'light',
                            'bg-white text-dark-900': theme == 'sepia',
                        }"
                        role="button"
                        title="Go to BroJenuel Home"
                        id="change-theme-button"
                    >
                        <Icon name="material-symbols:home" />
                    </button>
                </NuxtLink>
            </div>
            <div class="flex gap-10px">
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
            <div class="flex gap-2 md:hidden block">
                <button
                    title="Go back"
                    class="h-40px w-40px bg-[var(--background-secondary)] rounded-full flex items-center justify-center hover:text-[var(--primary)]"
                    @click="$router.back()"
                >
                    <Icon name="material-symbols:arrow-back"></Icon>
                </button>
                <button
                    v-for="social in ['facebook', 'twitter', 'linkedin', 'copy']"
                    :key="social"
                    :title="social != 'Copy' ? `Share To ${social.toUpperCase()}` : 'Copy to Clipboard'"
                    class="h-40px w-40px bg-[var(--background-secondary)] rounded-full flex items-center justify-center hover:text-[var(--primary)]"
                    @click="share(social)"
                >
                    <Icon v-if="social == 'facebook'" name="ri:facebook-fill"></Icon>
                    <Icon v-if="social == 'twitter'" name="mdi:twitter"></Icon>
                    <Icon v-if="social == 'linkedin'" name="ri:linkedin-fill"></Icon>
                    <Icon v-if="social == 'copy'" name="ph:link-simple-bold"></Icon>
                </button>
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
