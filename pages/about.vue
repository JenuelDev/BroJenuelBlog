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
</script>

<template>
    <NuxtLayout>
        <div class="w-full max-w-700px mx-auto md:px-20px px-10px mt-30 pb-20">
            <h1>✋ Hey! I am Jenuel</h1>
            <p class="leading-7">
                Hey there! I'm soaking up the good vibes in Benguet, Philippines, where the air is as fresh as my
                playlist, and the surroundings are so green they make the Hulk jealous. Just your average human here,
                just like you, juggling life and tech like a digital acrobat. I may not have the voice of an angel, but
                I strum my guitar with the enthusiasm of a rockstar 🎸 – much to the dismay of my neighbors.
            </p>
            <p class="leading-7">
                I'm all about trying new things, whether it's coding a masterpiece or attempting a daring culinary
                experiment. Life's too short not to spice it up, right? 😁
            </p>
            <p class="leading-7">
                Embarking on this wild ride as a software wizard five {{ new Date().getFullYear() - 2018 }} ago, I've
                danced the office shuffle and mastered the art of remote work, all while teaming up with fellow code
                enthusiasts to create and nurture some seriously cool products. I may exude a quiet confidence, but
                trust me, my curiosity is as loud as my keyboard clacks. Always on a mission to enhance my coding mojo,
                I'm like a perpetual student of the digital realm – quietly tinkering and endlessly perfecting my craft.
            </p>
            <HomeSkills />
            <div class="pt-20">
                <h1 class="text-center"><Icon name="mdi:chart-timeline" /> Timeline/Job Experience</h1>
                <div class="max-w-500px mx-auto">
                    <div class="timeline-div p-10px">
                        <div class="w-full m-auto">
                            <template v-for="(experience, i) in experiences" :key="experience.url">
                                <div class="timeline-box">
                                    <div
                                        class="absolute top-[50%] transform translate-y-[-50%] bg-[var(--color)] rounded-md text-[var(--background)] p-1 flex flex-col items-center text-xs"
                                        :class="
                                            i % 2 == 0
                                                ? 'sm:right-[-20px] right-[-15px]'
                                                : 'sm:left-[-20px] left-[-15px]'
                                        "
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
                                        <NuxtLink class="decoration-none text-blue-300" :to="experience.certificate.link" target="_blank">
                                            <Icon name="teenyicons:certificate-solid" />
                                            {{ experience.certificate.label }}
                                        </NuxtLink>
                                    </div>
                                    <div v-if="experience.workStart" class="text-xs">
                                        {{ experience.workStart }} -
                                        <span v-html="experience.workUntil"></span>
                                    </div>
                                    <div v-if="experience.des" class="text-sm mt-2" v-html="experience.des"></div>
                                    <div
                                        v-if="experience.timeline && experience.timeline.length"
                                        class="pl-30px pt-20px"
                                    >
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
        </div>
    </NuxtLayout>
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
            border-top-left-radius: 30px;
            border-bottom-left-radius: 30px;
            margin-right: 30px;
            padding-right: 0;
        }

        &:nth-child(odd) {
            border-right: 2px dashed;
            border-top-right-radius: 30px;
            border-bottom-right-radius: 30px;
            margin-left: 30px;
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
