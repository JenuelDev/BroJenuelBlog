<script lang="ts" setup>
const { setMeta } = useMeta();
const route = useRoute();

const HomeAboutRef = ref();
const aboutVisible = useElementVisibility(HomeAboutRef);

const HomeExperienceRef = ref();
const experienceVisible = useElementVisibility(HomeExperienceRef);

const HomeProjectsRef = ref();
const projectsVisible = useElementVisibility(HomeProjectsRef);

const visibleItem = computed(() => {
    if (aboutVisible.value) return "about";
    if (experienceVisible.value) return "experience";
    if (projectsVisible.value) return "projects";
});

useHead({
    ...setMeta({
        title: "Jenuel Ganawed - Software Engineer",
        description:
            "I build web apps that are engaging, accessible and scalable.",
        path: route.path,
        keywords: ["brojenuel", "Jenuel", "Ganawed", "tech", "programming"],
        lang: "en",
    }),
});

defineOgImageComponent("BroJenuelOgImage", {
    title: "Jenuel Ganawed -  Software Engineer",
    about: "I build web apps that are engaging, accessible and scalable.",
});
</script>
<template>
    <HomeMobileMenu />
    <div id="main-content" class="relative">
        <HomePointer />
        <div
            class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
        >
            <div class="lg:flex lg:justify-between lg:gap-4">
                <HomeHeader :visible="visibleItem" />
                <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
                    <HomeAbout ref="HomeAboutRef" id="about" />
                    <HomeExperience ref="HomeExperienceRef" id="experience" />
                    <HomeProjects ref="HomeProjectsRef" id="projects" />
                    <HomeFooter />
                </main>
            </div>
        </div>
    </div>
</template>
