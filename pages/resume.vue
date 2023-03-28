<script setup lang="ts">
const route = useRoute();

const { setMeta } = useMeta();

definePageMeta({
    layout: "nofooter",
});

useHead({
    ...setMeta({
        title: "Resume - Brojenuel",
        description: "Check Jenuel Oras Ganawed resume.",
        path: route.path,
        keywords: ["brojenuel", "Jenuel", "resume", "Jenuel Oras Ganawed", "jenuel ganawed"],
        lang: "en",
    }),
});

defineOgImageStatic({
    component: "DefaultOgImage",
    path: route.path,
    title: "Resume - BroJenuel",
    description: "Check Jenuel Oras Ganawed resume.",
    appName: "www.BroJenuel.com",
});
</script>
<template>
    <NuxtLayout>
        <div class="h-100vh pt-50px">
            <iframe src="/Jenuel Oras Ganawed.pdf" width="100%" height="100%" />
        </div>
    </NuxtLayout>
</template>
