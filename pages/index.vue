<script lang="ts" setup>
const route = useRoute();
const { setMeta } = useMeta();

useHead({
    ...setMeta({
        title: "BroJenuel - My Home In the Internet!",
        description:
            "Jenuel Ganawed is a software developer from the philippines. His passionate about coding, writing, and sharing what he know. Sharing about experiences, personal projects and articles about code, self-improvement, health, and more",
        path: route.path,
        keywords: ["brojenuel", "Jenuel", "Jenuel Ganawed", "bro jenuel", "web developer", "software developer"],
        lang: "en",
    }),
});
</script>
<template>
    <OgImageStatic
        :description="`Jenuel Ganawed is a software developer from the philippines. His passionate about coding, writing, and sharing what he know. Sharing about experiences, personal projects and articles about code, self-improvement, health, and more`"
        :path="route.path"
        :title="`BroJenuel`"
        appName="www.BroJenuel.com"
        component="DefaultOgImage"
    />
    <NuxtLayout>
        <section class="items-center justify-center pt-20px relative sm:mt-100px mt-50px pb-100px">
            <div
                class="relative flex flex-col items-center gap-20px relative w-full max-w-750px mx-auto text-center px-20px"
            >
                <div class="mb-10">
                    <div class="md:text-size-48px text-size-32px font-800 mt-10px text-[var(--primary)]">
                        Software Developer
                    </div>
                    <div class="md:text-size-24px text-size-20px font-300 tracking-tight py-2">
                        i code to develop apps and websites, I create articles, and I love what I do.
                    </div>
                </div>
                <img
                    class="mx-auto"
                    src="~/assets/images/programming.svg"
                    width="800"
                    height="600"
                    alt="im a programmer by brojenuel"
                />
            </div>
            <div class="opacity-80 w-full px-5 py-3 rounded- text-center">
                <div class="md:text-size-32px text-size-24px font-bold mb-5">
                    Hi!
                    <span class="animate-wave lg:text-size-54px md:text-size-46px text-size-60px">👋</span>
                    Im Jenuel.
                </div>
                <div class="text-size-20px max-w-700px mx-auto leading-8 mb-5">
                    Since the beginning of my journey as a software developer
                    {{ $dayjs().year() - 2017 }} years ago, I've done office and remote work for companies, and
                    collaborated with teams of developers to build and maintain awesome products. I'm quietly confident,
                    naturally curious, and perpetually working on improving my craft.
                </div>
                <div class="flex items-center justify-center gap-3 text-xl flex-wrap">
                    <a
                        href="https://www.linkedin.com/in/jenuelganawed/"
                        class="flex items-center hover:text-[var(--primary)]"
                        target="_blank"
                        alt="Jenuel Oras Ganawed Linkedin"
                        aria-label="Jenuel Oras Ganawed Linkedin"
                    >
                        <span class="icon--mdi icon--mdi--linkedin text-45px"></span>
                    </a>
                    <NuxtLink
                        to="/cv"
                        class="border px-5 py-5px rounded-full font-bold flex items-center gap-2 hover:text-[var(--primary)] hover:border-[var(--primary)] hover:underline dark:border-white border-gray-900"
                    >
                        <span class="icon--solar icon--solar--document-broken text-25px"></span>
                        Resume
                    </NuxtLink>
                    <NuxtLink
                        to="/contact"
                        class="border px-5 py-5px bg-[var(--primary)] border-none text-[var(--background)] rounded-full font-bold flex items-center gap-2 hover:underline"
                    >
                        <span class="icon--solar icon--solar--mailbox-broken text-25px"></span>
                        Email Me
                    </NuxtLink>
                </div>
            </div>
        </section>
        <HomeSkills />
        <HomeRecentArticles />
        <HomePersonalProjects />
        <HomeMyCompaniesTimeline />
        <div class="text-center px-10px mb-100px">
            <div class="text-xl font-bold mb-5">Interested in collaborating with me?</div>
            <div class="text-lg max-w-700px mx-auto leading-8 mb-5">
                I’m always open to discussing product development or partnership opportunities.
            </div>
            <div class="flex items-center justify-center gap-3 text-xl flex-wrap">
                <NuxtLink
                    to="/contact"
                    class="border border-2px px-10 dark:border-white border-gray-900 py-5 rounded-full font-bold flex items-center gap-2 hover:border-[var(--primary)] hover:bg-[var(--primary)] transition-all hover:text-[var(--background)]"
                >
                    <span class="icon--solar icon--solar--mailbox-broken text-25px"></span>
                    Start The Conversation
                </NuxtLink>
            </div>
        </div>
    </NuxtLayout>
</template>
