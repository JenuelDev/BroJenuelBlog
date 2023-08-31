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
        class="relative group flex gap-15px sm:flex-row flex-col items-center sm:opacity-90 hover:opacity-100 sm:transform sm:scale-100 sm:hover:scale-105 transition-all"
    >
        <div
            class="flex overflow-hidden rounded-lg relative sm:w-[55%] w-full"
            :class="{ 'sm:order-2 justify-start': i % 2 != 0, 'justify-end': i % 2 == 0 }"
        >
            <div
                class="border-1 border-[var(--gray-lightest)] flex justify-center items-center overflow-hidden rounded-lg relative"
            >
                <nuxt-img
                    :src="work.thumbnail.includes('http') ? work.thumbnail : `/img/work/${work.thumbnail}`"
                    class="w-full transform scale-110 group-hover:scale-transform-130 transition-all h-full w-full"
                    :alt="work.description"
                    width="500"
                    height="250"
                    format="webp"
                />
            </div>
        </div>
        <div class="group sm:w-[45%] w-full" :class="{ 'sm:text-right': i % 2 != 0 }">
            <div>{{ work.overline }}</div>
            <div class="flex gap-10px items-center" :class="{ 'sm:justify-end': i % 2 != 0 }">
                <div v-if="work.logo" class="w-30px h-30px overflow-hidden rounded-md bg-white">
                    <img class="w-30px" height="30" width="30" :src="work.logo" :alt="work.title" />
                </div>
                <div class="font-700 group-hover:text-[var(--primary)] text-size-25px">
                    {{ work.title }}
                </div>
            </div>
            <div>
                <ul class="flex gap-1 flex-wrap py-10px text-size-13px" :class="{ 'sm:justify-end': i % 2 != 0 }">
                    <li v-for="tags in work.techs" :key="tags" :class="`tag-${tags}`" class="tag">#{{ tags }}</li>
                </ul>
                <div class="mb-2">{{ work.description }}</div>
                <div class="flex gap-2 flex-wrap" :class="{ 'sm:justify-end': i % 2 != 0 }">
                    <NuxtLink
                        v-if="work.article_link"
                        :href="work.article_link"
                        title="Check Article"
                        class="btn"
                        :class="{ 'order-1': i % 2 == 0 }"
                    >
                        <Icon name="mdi:launch" />
                        Article
                    </NuxtLink>
                    <a
                        v-if="work.external_link"
                        :href="work.external_link"
                        target="_blank"
                        title="Open App"
                        class="btn"
                        :class="{ 'order-1': i % 2 == 0 }"
                    >
                        <Icon name="mdi:launch" />
                        Open App
                    </a>
                    <a
                        v-if="work.github_link"
                        :href="work.github_link"
                        target="_blank"
                        title="Open Github"
                        class="btn"
                        :class="{ 'order-1': i % 2 == 0 }"
                    >
                        <Icon name="mdi:github" />
                        Github
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
