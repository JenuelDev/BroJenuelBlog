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

defineOgImageStatic({
    component: "DefaultOgImage",
    path: route.path,
    title: "BroJenuel Timeline",
    description: "Check Jenuel Ganawed's Timeline. Check my journey on how I got here.",
    appName: "www.BroJenuel.com",
});
</script>
<template>
    <NuxtLayout>
        <Transition>
            <div v-show="isShowContent" class="pt-90px min-h-90vh">
                <div class="max-w-550px mx-auto px-10px">
                    <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px">
                        <Icon name="mdi:chart-timeline" />
                        Timeline/Experience
                    </div>
                    <div class="pt-5">
                        <div class="indent-md">
                            This are companies/organization that I have worked for. I have learned and enjoyed working
                            on this companies.
                        </div>
                    </div>
                </div>
                <div class="w-full max-w-600px lg:max-w-650px mx-auto px-10px">
                    <div class="timeline-div p-10px">
                        <div class="w-full m-auto">
                            <template v-for="(experience, i) in experiences" :key="experience.url">
                                <div v-if="experience.isCard" class="timeline-box">
                                    <div
                                        class="absolute top-[50%] transform translate-y-[-50%] bg-[var(--primary)] rounded-md text-[var(--background)] p-1 flex flex-col items-center text-size-12px"
                                        :class="
                                            i % 2 == 0
                                                ? 'sm:right-[-20px] right-[-15px]'
                                                : 'sm:left-[-25px] left-[-15px]'
                                        "
                                    >
                                        <span v-html="experience.year"></span>
                                        <span v-if="experience.to">to</span>
                                        {{ experience.to ?? "" }}
                                    </div>
                                    <div
                                        class="m-1 bg-[var(--background-secondary)] rounded-lg p-3 flex flex-col gap-2 items-center"
                                    >
                                        <div class="font-500 text-size-20px text-center">{{ experience.title }}</div>
                                        <div v-if="experience.certificate">
                                            <NuxtLink class="btn" :to="experience.certificate.link" target="_blank">
                                                <Icon name="teenyicons:certificate-solid" />
                                                {{ experience.certificate.label }}
                                            </NuxtLink>
                                        </div>
                                        <div class="text-center">{{ experience.des }}</div>
                                    </div>
                                </div>
                                <div v-else class="timeline-box">
                                    <div
                                        class="absolute top-[50%] transform translate-y-[-50%] bg-[var(--primary)] rounded-md text-[var(--background)] p-1 flex flex-col items-center text-size-12px"
                                        :class="
                                            i % 2 == 0
                                                ? 'sm:right-[-20px] right-[-15px]'
                                                : 'sm:left-[-25px] left-[-15px]'
                                        "
                                    >
                                        {{ experience.year }}
                                        <span>to</span>
                                        {{ experience.to }}
                                    </div>
                                    <div v-if="experience.position || experience.company" class="text-size-18px pb-2">
                                        <span v-if="experience.position" class="text-[var(--primary)] italic">{{
                                            experience.position
                                        }}</span>
                                        <a
                                            v-if="experience.company"
                                            :href="experience.url"
                                            target="_blank"
                                            class="hover:text-[var(--primary)]"
                                        >
                                            @ {{ experience.company }}</a
                                        >
                                    </div>
                                    <div v-if="experience.certificate" class="inline-block">
                                        <NuxtLink class="btn" :to="experience.certificate.link" target="_blank">
                                            <Icon name="teenyicons:certificate-solid" />
                                            {{ experience.certificate.label }}
                                        </NuxtLink>
                                    </div>
                                    <div v-if="experience.workStart">
                                        {{ experience.workStart }} -
                                        <span v-html="experience.workUntil"></span>
                                    </div>
                                    <div
                                        v-if="experience.des"
                                        class="text-sm leading-5 mt-2"
                                        v-html="experience.des"
                                    ></div>
                                    <div
                                        v-if="experience.timeline && experience.timeline.length"
                                        class="pl-30px pt-20px"
                                    >
                                        <div v-for="(timeline, t_i) in experience.timeline" :key="t_i" class="relative">
                                            <div
                                                class="bg-[var(--primary)] text-[var(--background)] inline-block text-size-12px p-1 rounded-md"
                                            >
                                                {{ timeline.date }}
                                            </div>
                                            <div class="text-size-15px pb-10px">
                                                {{ timeline.details }}
                                            </div>
                                            <div
                                                class="absolute h-10px w-10px bg-[var(--primary)] rounded-full top-7px left-[-15px]"
                                            ></div>
                                            <div
                                                v-show="experience.timeline.length != t_i + 1"
                                                class="absolute h-full w-2px left-[-11px] bg-[var(--primary)] top-8px"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </NuxtLayout>
</template>
<style lang="scss">
.timeline-div {
    .timeline-box {
        border-top: 2px dashed;
        border-color: var(--primary) !important;
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
            border-top: 0;
            border-top-right-radius: 0;
            border-top-left-radius: 0;
        }

        &:last-child {
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        }
    }

    .present-work {
        color: var(--primary);
    }
}
</style>
