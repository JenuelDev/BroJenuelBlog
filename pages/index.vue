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
        lang: "en"
    })
});

</script>
<template>
    <OgImageStatic
        :path="route.path"
        appName="www.BroJenuel.com"
        component="DefaultOgImage"
        description="Jenuel Ganawed is a software developer from the philippines. His passionate about coding, writing, and sharing what he know. Sharing about experiences, personal projects and articles about code, self-improvement, health, and more"
        title="BroJenuel"
    />
    <NuxtLayout>
        <HomeIntro />
        <HomeAboutMe />
        <HomeRecentArticles />
        <HomeOngoingPersonalProjects />
        <HomeSkills />
        <HomeOffer />
    </NuxtLayout>
</template>
