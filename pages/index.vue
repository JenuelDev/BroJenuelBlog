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
        <section class="items-center justify-center pt-20px relative sm:mt-100px mt-50px">
            <div
                class="relative flex flex-col items-center gap-20px relative w-full max-w-750px mx-auto text-center px-20px"
            >
                <div class="mb-10">
                    <div class="md:text-size-48px text-size-32px font-600 mt-10px text-[var(--primary)]">
                        Software Developer
                    </div>
                    <div class="md:text-size-24px text-size-20px font-300 tracking-tight py-2">
                        i code to develop apps and websites, I create articles, and I love what I do.
                    </div>
                </div>
                <img class="mx-auto" src="~/assets/images/programming.svg" width="800" height="600" />
            </div>
            <div class="opacity-80 w-full px-5 py-3 rounded- text-center">
                <div class="md:text-size-32px text-size-24px font-bold mb-5">
                    Hi!
                    <span class="animate-wave lg:text-size-54px md:text-size-46px text-size-60px">👋</span>
                    Im Jenuel.
                </div>
                <div class="text-size-20px max-w-700px mx-auto leading-8">
                    Since the beginning my journey as a software developer
                    {{ $dayjs().year() - 2017 }} years ago, I've done office and remote work for companies, and
                    collaborated with teams of developers to build and maintain awesome products. I'm quietly confident,
                    naturally curious, and perpetually working on improving my craft.
                </div>
            </div>
        </section>
        <HomeSkills />
        <!-- <HomeMyCompanies /> -->
        <HomeMyCompaniesTimeline />
        <!-- <HomeRecentArticles /> -->
        <!-- <HomeOngoingPersonalProjects /> -->
    </NuxtLayout>
</template>
