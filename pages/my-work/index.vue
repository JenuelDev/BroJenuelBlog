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

defineOgImageComponent("DefaultOgImage", {
    title: "My Works",
    description:
        "Showing are personal projects that I made during my spare/free time. I don't add projects from my Jobs, only if allowed.",
});
</script>
<template>
    <Transition>
        <div v-show="isShowContent" class="sm:mt-90px mt-60px sm:p-0 p-5 !pb-20">
            <div>
                <div class="max-w-700px mx-auto md:px-20px px-10px">
                    <div class="font-800 text-size-20px flex items-center gap-7px">
                        <Icon name="pajamas:project" />
                        Projects
                    </div>
                    <div class="pt-5 mb-5">
                        <div class="indent-md">
                            Showing are personal projects that I made during my spare/free time. I don't add projects
                            from my Jobs, only if allowed.
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-20 max-w-700px mx-auto px-10px mt-50px">
                    <WorkItem :works="WORKS" />
                </div>
            </div>
        </div>
    </Transition>
</template>
