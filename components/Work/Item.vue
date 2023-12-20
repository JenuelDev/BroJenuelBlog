<script setup lang="ts">
type WORKS_TYPE = Array<{
    on_going: boolean;
    overline: string;
    title: string;
    description: string;
    techs: Array<string>;
    thumbnail: string;
    date: string;
    article_link: null | string;
    url_new_tab: boolean;
    external_link: string | null;
    github_link: string | null;
    logo: null | string | undefined;
}>;

defineProps({
    works: {
        type: Array,
    },
});
</script>

<template>
    <div
        v-for="(work, i) in (works as WORKS_TYPE)"
        :key="i"
        class="relative group flex gap-15px sm:flex-row flex-col items-center transition-all"
    >
        <div
            class="flex overflow-hidden rounded-lg relative sm:w-[55%] w-full"
            :class="{ 'sm:order-2 justify-start': i % 2 != 0, 'justify-end': i % 2 == 0 }"
        >
            <NuxtLink
                :href="work.external_link ?? work.article_link ?? '#'"
                :target="work.external_link ? '_blank' : '_parent'"
                class="flex justify-center items-center overflow-hidden rounded-lg relative w-full"
            >
                <nuxt-img
                    :src="work.thumbnail.includes('http') ? work.thumbnail : `/img/work/${work.thumbnail}`"
                    class="w-full transform scale-110 group-hover:scale-transform-130 transition-all h-full w-full"
                    :alt="work.description"
                    width="500"
                    height="250"
                    format="webp"
                    loading="lazy"
                    sizes="sm:100vw md:50vw lg:400px"
                />
            </NuxtLink>
        </div>
        <div class="group sm:w-[45%] w-full" :class="{ 'sm:text-right': i % 2 != 0 }">
            <div class="text-xs mb-1 text-[var(--primary)] -mb-1">{{ work.overline }}</div>
            <div class="flex gap-10px items-center" :class="{ 'sm:justify-end': i % 2 != 0 }">
                <div class="font-700 group-hover:text-[var(--primary)] text-xl">
                    {{ work.title }}
                </div>
            </div>
            <div>
                <ul class="flex gap-1 flex-wrap py-10px text-xs" :class="{ 'sm:justify-end': i % 2 != 0 }">
                    <li v-for="tags in work.techs" :key="tags" :class="`tag-${tags}`" class="tag">#{{ tags }}</li>
                </ul>
                <div class="mb-2 text-sm">{{ work.description }}</div>
                <div class="flex gap-2 flex-wrap !text-sm" :class="{ 'sm:justify-end': i % 2 != 0 }">
                    <NuxtLink
                        v-if="work.article_link"
                        :href="work.article_link"
                        title="Check Article"
                        class="btn decoration-none text-[var(--color)] flex items-center gap-1 dark:hover:text-blue-300 hover:text-blue-500 p-1 rounded-md dark:hover:bg-gray-50 dark:hover:bg-opacity-5 hover:bg-gray-800 hover:bg-opacity-5"
                        :class="{ 'order-1': i % 2 == 0 }"
                    >
                        <span class="icon--solar icon--solar--documents-line-duotone text-xl"></span>
                        Article
                    </NuxtLink>
                    <a
                        v-if="work.external_link"
                        :href="work.external_link"
                        target="_blank"
                        title="Open App"
                        class="btn decoration-none text-[var(--color)] flex items-center gap-1 dark:hover:text-blue-300 hover:text-blue-500 p-1 rounded-md dark:hover:bg-gray-50 dark:hover:bg-opacity-5 hover:bg-gray-800 hover:bg-opacity-5"
                        :class="{ 'order-1': i % 2 == 0 }"
                    >
                        <span class="icon--solar icon--solar--square-top-down-broken text-xl" />
                        Visit
                    </a>
                    <a
                        v-if="work.github_link"
                        :href="work.github_link"
                        target="_blank"
                        title="Open Github"
                        class="btn decoration-none text-[var(--color)] flex items-center gap-1 dark:hover:text-blue-300 hover:text-blue-500 p-1 rounded-md dark:hover:bg-gray-50 dark:hover:bg-opacity-5 hover:bg-gray-800 hover:bg-opacity-5"
                        :class="{ 'order-1': i % 2 == 0 }"
                    >
                        <span class="icon--mdi icon--mdi--github text-xl" />
                        Github
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
