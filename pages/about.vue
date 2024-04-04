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

defineOgImageComponent("DefaultOgImage", {
    title: "📝 Hey! I am Jenuel",
    description:
        "Hey there! I'm a software developer/engineer based in the beautiful Benguet, Philippines. The air here is wonderfully clean, and the surroundings are so green and refreshing. Just your everyday human, navigating the balance between life and tech, just like you! Let's connect and share our experiences!",
});
</script>

<template>
    <div class="w-full max-w-700px mx-auto md:px-20px px-10px mt-30 pb-20">
        <h1>✋ Hi! I am Jenuel</h1>
        <div
            class="flex items-center gap-5 flex-wrap sm:justify-start justify-center"
        >
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
                <span
                    class="icon--mdi icon--mdi--linkedin text-30px text-[#337DAF]"
                ></span>
                LinkedIn
            </NuxtLink>
            <NuxtLink
                to="https://youtube.com/@brojenuel"
                class="flex items-center text-[var(--color)] decoration-none text-lg gap-1 hover:text-[#EF2527]"
            >
                <span
                    class="icon--mdi icon--mdi--youtube text-30px text-[#EF2527]"
                ></span>
                Youtube
            </NuxtLink>
            <NuxtLink
                to="/contact"
                class="flex items-center text-[var(--color)] decoration-none text-lg gap-1 hover:text-[#32aa56]"
            >
                <span
                    class="icon--solar icon--solar--mailbox-broken text-30px text-[#32aa56]"
                ></span>
                Email Me
            </NuxtLink>
        </div>
        <p class="leading-7 indent-lg">
            <NuxtImg
                class="float-right m-5 rounded-md"
                src="https://media.licdn.com/dms/image/D5603AQGdJRcKZt4UIw/profile-displayphoto-shrink_200_200/0/1712136099798?e=1717632000&v=beta&t=oMry6hflN3SkCUDHg6huwbCR9G0-wmfOEnjI43t2ZTA"
            />
            I'm Jenuel Ganawed, hailing from the picturesque greenery of
            Benguet, Luzon, Philippines. Just like everyone else, I'm on a
            journey of balancing life and technology.
        </p>
        <p class="leading-7 indent-lg">
            I thrive on the excitement of trying new things, whether it's
            crafting elegant code or experimenting with adventurous culinary
            concoctions 😅. After all, life's too short to stick to the mundane,
            isn't it? 😁
        </p>
        <p class="leading-7 indent-lg">
            Embarking on this wild ride as a software wizard For the past
            <b class="font-bold underline">{{
                new Date().getFullYear() - 2018
            }}</b>
            years, I've been immersed in the world of software development,
            where I've honed my skills through both traditional office setups
            and the dynamic realm of remote work. Collaborating with fellow
            coding enthusiasts, I've had the opportunity to contribute to some
            truly remarkable products. While I may come across as quietly
            confident, rest assured, my curiosity roars as loudly as the clacks
            of my keyboard. I'm always on a quest to sharpen my skills and push
            the boundaries of what's possible.
        </p>
        <p class="leading-7 indent-lg">
            Also, I take pride in my attention to detail, meticulously examining
            even the smallest elements that could potentially snowball into
            significant issues. Whether it's ensuring code efficiency or
            perfecting a recipe, I believe that thoroughness in the details is
            essential for overall success.
        </p>
        <HomeSkills class="mb-20" />
        <div class="flex items-center justify-center gap-2 pb-3">
            <Icon size="30" name="mdi:timeline" />
            <span class="text-size-20px font-bold">
                Timeline/Job Experience
            </span>
        </div>
        <div class="max-w-700px mx-auto">
            <div class="timeline-div">
                <div class="w-full m-auto">
                    <template
                        v-for="(experience, i) in experiences"
                        :key="experience.url"
                    >
                        <div
                            class="timeline-box"
                            :class="{ 'text-right': i % 2 === 0 }"
                        >
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
                            <div
                                v-if="experience.position || experience.company"
                                class="text-lg font-bold mb-2"
                            >
                                <span
                                    v-if="experience.position"
                                    class="text-[var(--color)]"
                                >
                                    {{ experience.position }}
                                </span>
                                <NuxtLink
                                    v-if="experience.company"
                                    :href="experience.url"
                                    target="_blank"
                                    class="text-blue-400 decoration-none hover:bg-blue-400 hover:bg-opacity-40"
                                >
                                    @ {{ experience.company }}
                                </NuxtLink>
                            </div>
                            <div
                                v-if="experience.certificate"
                                class="inline-block mb-2"
                            >
                                <NuxtLink
                                    class="decoration-none text-blue-300 hover:underline"
                                    :to="experience.certificate.link"
                                    target="_blank"
                                >
                                    <Icon name="teenyicons:certificate-solid" />
                                    {{ experience.certificate.label }}
                                    <Icon name="ic:twotone-launch" />
                                </NuxtLink>
                            </div>
                            <div v-if="experience.workStart" class="text-sm">
                                {{ experience.workStart }} -
                                <span v-html="experience.workUntil"></span>
                            </div>
                            <div
                                v-if="experience.des"
                                class="mt-2"
                                v-html="experience.des"
                            ></div>
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
