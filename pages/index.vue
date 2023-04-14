<script lang="ts" setup>
const route = useRoute();
const { setMeta, googleStream } = useMeta();

useHead({
    ...setMeta({
        title: "BroJenuel - My Home In the Internet!",
        description:
            "Jenuel Ganawed is a software developer from the philippines. His passionate about coding, writing, and sharing what he know. Sharing about experiences, personal projects and articles about code, self-improvement, health, and more",
        path: route.path,
        keywords: ["brojenuel", "Jenuel", "Jenuel Ganawed", "bro jenuel", "web developer", "software developer"],
        lang: "en",
    }),
    ...(process.env.NODE_ENV != "development" ? googleStream() : {}),
});

defineOgImageStatic({
    appName: "www.BroJenuel.com",
    component: "DefaultOgImage",
    path: route.path,
    title: "BroJenuel",
    description:
        "Jenuel Ganawed is a software developer from the philippines. His passionate about coding, writing, and sharing what he know. Sharing about experiences, personal projects and articles about code, self-improvement, health, and more",
});
</script>
<template>
    <NuxtLayout name="nofooter">
        <ClientOnly>
            <HomeIntro />
            <HomeAboutMe />
            <HomeRecentArticles />
            <HomeOngoingPersonalProjects />
            <HomeSkills />
            <HomeOffer />
            <Footer />
        </ClientOnly>
    </NuxtLayout>
</template>
