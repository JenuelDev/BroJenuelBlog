<script setup lang="ts">
const route = useRoute();
const isShowContent = ref(false);
const { setMeta } = useMeta();

onMounted(() => (isShowContent.value = true));

const WORKS = useWorks();

useHead({
    ...setMeta({
        title: "My Work - Jenuel Ganawed",
        description: "Check Jenuel Ganawed's Works/Personal Projects.",
        path: route.path,
        keywords: ["brojenuel", "Jenuel", "Jenuel Ganawed", "works", "projects"],
        lang: "en",
    }),
});

defineOgImage({
    component: "DefaultOgImage",
    path: route.path,
    title: "My Works",
    description: "Check out my works I created. Created some ",
    appName: "www.BroJenuel.com",
});
</script>
<template>
    <NuxtLayout>
        <Transition>
            <div v-show="isShowContent" class="sm:mt-90px mt-60px sm:p-0 p-5">
                <div>
                    <div class="lg:max-w-800px max-w-600px mx-auto px-10px">
                        <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px">
                            <Icon name="pajamas:project" />
                            My Works
                        </div>
                        <div class="pt-5 mb-5">
                            <div class="indent-md">
                                Showing are personal projects that I made during my spare/free time. I don't add
                                projects from my Jobs, only if allowed.
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-20 lg:max-w-800px max-w-600px mx-auto px-10px mt-50px">
                        <div
                            v-for="(work, i) in WORKS"
                            :key="i"
                            class="relative group flex gap-15px sm:flex-row flex-col sm:opacity-80 hover:opacity-100 sm:transform sm:scale-98 sm:hover:scale-100 transition-all"
                        >
                            <div
                                class="border-1 border-[var(--gray-lightest)] flex justify-center items-center overflow-hidden rounded-lg relative sm:w-[55%] w-full"
                                :class="{ 'sm:order-2': i % 2 != 0 }"
                            >
                                <img
                                    :src="
                                        work.thumbnail.includes('http') ? work.thumbnail : `/img/work/${work.thumbnail}`
                                    "
                                    class="w-full transform scale-110 group-hover:scale-transform-130 transition-all"
                                    :alt="work.description"
                                    width="500"
                                />
                            </div>
                            <div class="group sm:w-[45%] w-full" :class="{ 'sm:text-right': i % 2 != 0 }">
                                <div>{{ work.overline }}</div>
                                <div class="flex gap-10px items-center" :class="{ 'sm:justify-end': i % 2 != 0 }">
                                    <div v-if="work.logo" class="w-30px h-30px overflow-hidden rounded-md bg-white">
                                        <img class="w-30px" :src="work.logo" :alt="work.title" />
                                    </div>
                                    <div class="font-700 group-hover:text-[var(--primary)] text-size-25px">
                                        {{ work.title }}
                                    </div>
                                </div>
                                <div>
                                    <ul
                                        class="flex gap-1 flex-wrap py-10px text-size-13px"
                                        :class="{ 'sm:justify-end': i % 2 != 0 }"
                                    >
                                        <li v-for="tags in work.techs" :key="tags" :class="`tag-${tags}`" class="tag">
                                            #{{ tags }}
                                        </li>
                                    </ul>
                                    <div class="mb-2">{{ work.description }}</div>
                                    <div class="flex gap-2 flex-wrap" :class="{ 'sm:justify-end': i % 2 != 0 }">
                                        <a
                                            v-if="work.article_link"
                                            :href="work.article_link"
                                            title="Check Article"
                                            class="btn"
                                            :class="{ 'order-1': i % 2 == 0 }"
                                        >
                                            <Icon name="mdi:launch" />
                                            Article
                                        </a>
                                        <a
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
                    </div>
                </div>
            </div>
        </Transition>
    </NuxtLayout>
</template>
