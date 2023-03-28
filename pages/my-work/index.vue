<script setup lang="ts">
const route = useRoute();
const isShowContent = ref(false);
const codeChallenges = useCodeChallenges();
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

defineOgImageStatic({
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
            <div v-show="isShowContent" class="pt-90px">
                <div class="max-w-600px mx-auto px-10px">
                    <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px">
                        <Icon name="pajamas:project" />
                        My Work
                    </div>
                    <div class="pt-5 mb-5">
                        <div class="indent-md">
                            Showing are personal projects that I made during my spare/free time. I don't add projects
                            from my Work/Jobs, only if allowed.
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-15">
                        <NuxtLink
                            v-for="(work, i) in WORKS"
                            :key="i"
                            :href="work.url"
                            class="rounded-md cursor-pointer group"
                            :target="work.url_new_tab ? '_blank' : '_self'"
                        >
                            <div
                                class="border-1 border-[var(--gray-lightest)] flex justify-center items-center overflow-hidden rounded-lg relative"
                            >
                                <img
                                    :src="work.img.includes('http') ? work.img : `/img/work/${work.img}`"
                                    class="w-full transform scale-100 group-hover:scale-transform-105 transition-all duration-1000"
                                    :alt="work.description"
                                    width="500"
                                />
                            </div>
                            <div class="pt-15px flex gap-10px items-center">
                                <div class="w-30px h-30px overflow-hidden rounded-md bg-white">
                                    <img class="w-30px" :src="work.logo" :alt="work.title" />
                                </div>
                                <div class="font-700 group-hover:text-[var(--primary)] text-size-25px">
                                    {{ work.title }}
                                </div>
                            </div>
                            <div>
                                <ul class="flex gap-1 flex-wrap py-10px">
                                    <li v-for="tags in work.techs" :key="tags" :class="`tag-${tags}`" class="tag">
                                        #{{ tags }}
                                    </li>
                                </ul>
                                <div>{{ work.description }}</div>
                            </div>
                        </NuxtLink>
                    </div>
                    <div>
                        <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px pb-5 pt-10">
                            <Icon name="material-symbols:other-admission-sharp" />
                            Other Projects
                        </div>
                        <div class="grid sm:grid-cols-2 grid-cols-1 gap-3">
                            <div
                                v-for="codeChallenge in codeChallenges"
                                :key="codeChallenge.title"
                                class="group bg-[var(--background-secondary)] p-3 rounded-md flex flex-col justify-between transform translate-y-0 hover:translate-y-[-5px] transition-all"
                            >
                                <div>
                                    <div class="font-800 group-hover:text-[var(--primary)]">
                                        {{ codeChallenge.title }}
                                    </div>
                                    <div v-html="codeChallenge.des"></div>
                                </div>
                                <div class="flex gap-2 text-size-20px pt-2">
                                    <template v-for="link in codeChallenge.links">
                                        <a
                                            :href="link.link"
                                            target="_blank"
                                            :title="link.tooltip"
                                            class="hover:text-[var(--primary)]"
                                        >
                                            <Icon :name="link.icon" />
                                        </a>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </NuxtLayout>
</template>
