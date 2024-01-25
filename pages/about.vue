<script setup lang="ts">
const route = useRoute();
const isShowContent = ref(false);
const experiences = useExperiences();
const { setMeta } = useMeta();

onMounted(() => (isShowContent.value = true));

useHead({
    ...setMeta({
        title: "Timeline - BroJenuel",
        description: "Check Jenuel Ganawed's Timeline",
        path: route.path,
        keywords: ["brojenuel", "timeline", "jenuel ganawed"],
        lang: "en",
    }),
});

defineOgImage({
    component: "DefaultOgImage",
    path: route.path,
    title: "BroJenuel Timeline",
    description: "Check Jenuel Ganawed's Timeline. Check my journey on how I got here.",
    appName: "www.BroJenuel.com",
});

definePageMeta({
    layout: "default",
});
</script>

<template>
    <div class="w-full max-w-700px mx-auto md:px-20px px-10px mt-30 pb-20">
        <h1>✋ Hey! I am Jenuel</h1>
        <div class="flex items-center gap-5 flex-wrap sm:justify-start justify-center">
            <NuxtLink
                href="https://dev.to/brojenuel"
                class="flex items-center text-[var(--color)] decoration-none text-lg gap-1 hover:text-gray-500"
                target="_blank"
                alt="Jenuel Oras Ganawed Dev"
                aria-label="Jenuel Ganawed Dev.to"
                role="link"
                title="Jenuel Oras Ganawed Dev.to"
            >
                <span class="icon--mdi icon--mdi--dev-to text-40px"></span>
                Dev.to
            </NuxtLink>
            <NuxtLink
                href="https://www.linkedin.com/in/jenuelganawed/"
                class="flex items-center text-[var(--color)] decoration-none text-lg gap-1 hover:text-[#337DAF]"
                target="_blank"
                alt="Jenuel Oras Ganawed Linkedin"
                aria-label="Jenuel Oras Ganawed Linkedin"
            >
                <span class="icon--mdi icon--mdi--linkedin text-30px text-[#337DAF]"></span>
                LinkedIn
            </NuxtLink>
            <NuxtLink
                to="https://youtube.com/@brojenuel"
                class="flex items-center text-[var(--color)] decoration-none text-lg gap-1 hover:text-[#EF2527]"
            >
                <span class="icon--mdi icon--mdi--youtube text-30px text-[#EF2527]"></span>
                Youtube
            </NuxtLink>
            <NuxtLink
                to="/contact"
                class="flex items-center text-[var(--color)] decoration-none text-lg gap-1 hover:text-[#32aa56]"
            >
                <span class="icon--solar icon--solar--mailbox-broken text-30px text-[#32aa56]"></span>
                Email Me
            </NuxtLink>
        </div>
        <p class="leading-7">
            Hey there! 🌟 I'm a software developer/engineer based in the beautiful Benguet, Philippines. The air here is wonderfully clean, and the surroundings are so green and refreshing. Just your everyday human, navigating the balance between life and tech, just like you! 🌿💻 Let's connect and share our experiences!
        </p>
        <p class="leading-7">
            I'm all about trying new things, whether it's coding a masterpiece or attempting a daring culinary
            experiment. Life's too short not to spice it up, right? 😁
        </p>
        <p class="leading-7">
            Embarking on this wild ride as a software wizard {{ new Date().getFullYear() - 2018 }} ago, I've danced
            the office shuffle and mastered the art of remote work, all while teaming up with fellow code enthusiasts to
            create and nurture some seriously cool products. I may exude a quiet confidence, but trust me, my curiosity
            is as loud as my keyboard clacks. Always on a mission to enhance my skill.
        </p>
        <NuxtLink to="/contact" class="text-3xl dark:text-yellow-200 text-orange-600 decoration-none hover:underline dark:bg-gray-400 p-2 rounded-lg dark:bg-opacity-30 bg-dark-50 bg-opacity-20">
            Collaborate with Me 🤝
        </NuxtLink>
        <HomeSkills class="mb-10" />
        <div class="flex items-center gap-2 pb-3">
            <Icon size="30" name="mdi:timeline" />
            <span class="text-size-20px font-bold"> Timeline/Job Experience </span>
        </div>
        <div class="max-w-700px mx-auto">
            <div class="timeline-div">
                <div class="w-full m-auto">
                    <template v-for="(experience, i) in experiences" :key="experience.url">
                        <div class="timeline-box">
                            <div
                                class="absolute top-[50%] transform translate-y-[-50%] bg-[var(--color)] rounded-md text-[var(--background)] p-1 flex flex-col items-center text-xs"
                                :class="i % 2 == 0 ? 'sm:right-[-20px] right-[-15px]' : 'sm:left-[-20px] left-[-15px]'"
                            >
                                {{ experience.year }}
                                <span>to</span>
                                {{ experience.to }}
                            </div>
                            <div v-if="experience.position || experience.company" class="text-lg">
                                <span v-if="experience.position" class="text-[var(--color)]">{{
                                    experience.position
                                }}</span>
                                <NuxtLink
                                    v-if="experience.company"
                                    :href="experience.url"
                                    target="_blank"
                                    class="text-blue-400 decoration-none hover:bg-blue-400 hover:bg-opacity-40"
                                >
                                    @ {{ experience.company }}
                                </NuxtLink>
                            </div>
                            <div v-if="experience.certificate" class="inline-block">
                                <NuxtLink
                                    class="decoration-none text-blue-300"
                                    :to="experience.certificate.link"
                                    target="_blank"
                                >
                                    <Icon name="teenyicons:certificate-solid" />
                                    {{ experience.certificate.label }}
                                </NuxtLink>
                            </div>
                            <div v-if="experience.workStart" class="text-xs">
                                {{ experience.workStart }} -
                                <span v-html="experience.workUntil"></span>
                            </div>
                            <div v-if="experience.des" class="text-sm mt-2" v-html="experience.des"></div>
                            <div v-if="experience.timeline && experience.timeline.length" class="pl-30px pt-20px">
                                <div v-for="(timeline, t_i) in experience.timeline" :key="t_i" class="relative">
                                    <div
                                        class="bg-[var(--color)] text-[var(--background)] inline-block text-size-12px p-1 rounded-md"
                                    >
                                        {{ timeline.date }}
                                    </div>
                                    <div class="text-size-15px pb-10px">
                                        {{ timeline.details }}
                                    </div>
                                    <div
                                        class="absolute h-10px w-10px bg-[var(--color)] rounded-full top-7px left-[-15px]"
                                    ></div>
                                    <div
                                        v-show="experience.timeline.length != t_i + 1"
                                        class="absolute h-full w-2px left-[-11px] bg-[var(--color)] top-8px"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.timeline-div {
    .timeline-box {
        border-top: 2px dashed;
        border-color: var(--color) !important;
        margin: 0;
        padding: 30px;
        counter-increment: section;
        position: relative;

        &:nth-child(even) {
            border-left: 2px dashed;
            padding-right: 0;
        }

        &:nth-child(odd) {
            border-right: 2px dashed;
            padding-left: 0;
        }

        &:first-child {
            border-top: 2px dashed;
            border-top-right-radius: 0;
            border-top-left-radius: 0;
        }

        &:last-child {
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        }
    }

    .present-work {
        color: var(--color);
    }
}
</style>
