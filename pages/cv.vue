<script setup lang="ts">
const route = useRoute();
const { setMeta } = useMeta();
const education = useEducation();
const skills = useSkills();
const experiences = useExperiences();
const contacts = [
    {
        icon: "icon--logos icon--logos--google-gmail",
        icon_svg: "logos:google-gmail",
        title: "Jenuel.Ganawed.Business@gmail.com",
    },
    {
        icon: "icon--solar icon--solar--iphone-broken",
        icon_svg: "solar:iphone-broken",
        title: "+63-950-325-5547",
    },
    {
        icon: "icon--solar icon--solar--global-broken",
        icon_svg: "solar:global-broken",
        title: "www.BroJenuel.com",
    },
    {
        icon: "icon--skill-icons icon--skill-icons--linkedin",
        icon_svg: "skill-icons:linkedin",
        title: "www.linkedin.com/in/JenuelGanawed",
    },
    {
        icon: "icon--mdi icon--mdi--github",
        icon_svg: "mdi:github",
        title: "www.github.com/BroJenuel",
    },
];

function printButtonHandler() {
    window.print();
}

useHead({
    ...setMeta({
        title: "Resume - Brojenuel",
        description: "Check Jenuel Oras Ganawed resume.",
        path: route.path,
        keywords: ["brojenuel", "Jenuel", "resume", "Jenuel Oras Ganawed", "jenuel ganawed"],
        lang: "en",
    }),
});

defineOgImage({
    component: "DefaultOgImage",
    path: route.path,
    title: "Resume - BroJenuel",
    description: "Check Jenuel Oras Ganawed resume.",
    appName: "www.BroJenuel.com",
});
</script>
<template>
    <NuxtLayout>
        <section class="pt-80px max-w-800px mx-auto mb-100px">
            <div class="no-print italic">
                <span class="icon--solar icon--solar--documents-broken" /> my cv or resume
            </div>
            <div class="flex gap-10px pb-8">
                <div>
                    <h1 class="text-size-30px font-900 text-[var(--primary)]">Jenuel Oras Ganawed</h1>
                    <div class="text-size-20px font-100 pt-2 opacity-80">Software Developer</div>
                </div>
                <div class="no-print">
                    <button class="btn" @click="printButtonHandler()">
                        <span class="icon--solar icon--solar--printer-2-broken" />
                        Print
                    </button>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-5px pb-8">
                <div v-for="(contact, i) in contacts" :key="i" class="whitespace-nowrap">
                    <Icon :name="contact.icon_svg" />
                    {{ contact.title }}
                </div>
            </div>

            <div class="pb-8">
                <h2 class="text-size-20px text-[var(--primary)] pb-2">Summary</h2>
                <div>
                    I am a software engineer based in Luzon, Philippines. My passion lies in continuous learning,
                    coding, writing, and sharing knowledge. My primary focus is on problem-solving to address clients'
                    and companies' specific needs and challenges. With a client-centric approach, I strive to deliver
                    efficient solutions that meet their requirements and contribute to their success.
                </div>
            </div>
            <div class="pb-8">
                <h2 class="text-size-20px text-[var(--primary)] pb-2">Technologies</h2>
                <div class="flex gap-2 pt-10px flex-wrap">
                    <template
                        v-for="skill in skills"
                        :key="skill.tech"
                        class="flex flex-col pb-5 transform scale-98 hover:scale-100 transition-all"
                    >
                        <NuxtLink :href="tool.link" target="_blank" v-for="tool in skill.tools" :key="tool.text">
                            <div
                                class="whitespace-nowrap w-full overflow-hidden transition-all bg-[var(--background-secondary)] p-2 rounded-md transform hover:scale-110 cursor-pointer flex items-center"
                            >
                                <Icon class="text-size-20px" :name="tool.icon_svg" />
                                <span class="ml-2 text-size-14px">{{ tool.text }}</span>
                            </div>
                        </NuxtLink>
                    </template>
                </div>
            </div>
            <div class="pb-8">
                <h2 class="text-size-20px text-[var(--primary)] pb-2">Experience</h2>
                <div class="pl-5 grid grid-cols-1 gap-3">
                    <div v-for="(experience, i) in experiences" :key="i">
                        <div>
                            <span class="font-700">{{ experience.position }}</span>
                            @ {{ experience.company }}
                        </div>
                        <div class="opacity-70">
                            {{ experience.workStart }} - <span v-html="experience.workUntil"></span>
                        </div>
                        <div v-html="experience.des"></div>
                    </div>
                </div>
            </div>
            <div>
                <h2 class="text-size-20px text-[var(--primary)] pb-2">Education</h2>
                <div class="pl-5 grid grid-cols-1 gap-3">
                    <div v-for="(edu, i) in education" :key="i">
                        <div>
                            <span class="font-700">{{ edu.school }}</span>
                        </div>
                        <div class="opacity-70">{{ edu.start_at }} - <span v-html="edu.end_at"></span></div>
                        <div v-html="edu.description"></div>
                    </div>
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>
<style scoped lang="scss">
@media print {
    @import "~/assets/style/icon/icon.scss";

    * {
        color: rgb(27, 27, 27);
        font-family: Arial, Helvetica, sans-serif;
    }

    section {
        padding: 0 !important;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        color: #1e77e2;
    }
}
</style>
