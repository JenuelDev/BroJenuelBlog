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
        image: "https://i.imgur.com/F9M3b73h.png",
    }),
});
</script>
<template>
    <NuxtLayout>
        <div>
            <HomeHeroContent />
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
                        class="border border-2px px-10 dark:border-white border-gray-900 py-5 rounded-full font-bold flex items-center gap-2 !hover:border-[var(--primary)] hover:bg-[var(--primary)] transition-all hover:text-[var(--background)]"
                    >
                        <span class="icon--solar icon--solar--mailbox-broken text-25px"></span>
                        Start The Conversation
                    </NuxtLink>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
