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
                alt="Jenuel Ganawed"
                width="200"
                height="200"
                format="webp"
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
        <div>
            <div class="flex items-center gap-2">
                <h1 class="font-bold">Work</h1>
            </div>
            <p class="leading-7 opacity-80">
                Throughout my career as a software developer, I have had the
                privilege of collaborating with various esteemed companies, each
                experience contributing significantly to my professional growth.
                I am sincerely grateful for the opportunities these companies
                have afforded me, as they have played a pivotal role in shaping
                my career trajectory.
            </p>
        </div>

        <div class="max-w-700px mx-auto">
            <div>
                <template
                    v-for="(experience, i) in experiences"
                    :key="experience.url"
                >
                    <hr
                        class="my-6 border-gray-50 border-opacity-40 !dark:border-opacity-10"
                    />
                    <div>
                        <h3>
                            <NuxtLink
                                :href="experience.url"
                                class="mr-2 text-[var(--color)]"
                            >
                                {{ experience.company }}
                            </NuxtLink>
                            <span
                                class="text-sm font-thin opacity-70 dark:opacity-50"
                            >
                                {{ experience.workStart }} -
                                <span v-html="experience.workUntil"></span>
                            </span>
                        </h3>
                        <p class="-mt-3 opacity-70 dark:opacity-50">
                            {{ experience.position }}
                        </p>
                        <div
                            v-if="experience.certificate"
                            class="inline-block mb-2"
                        >
                            <NuxtLink
                                class="inline-flex items-center rounded border border-neutral-200 bg-neutral-100 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                                :to="experience.certificate.link"
                                target="_blank"
                            >
                                <Icon
                                    name="teenyicons:certificate-solid"
                                    class="mr-2"
                                />
                                {{ experience.certificate.label }}
                                <Icon name="ic:twotone-launch" />
                            </NuxtLink>
                        </div>

                        <div
                            v-if="experience.des"
                            class="leading-7 opacity-80"
                            v-html="experience.des"
                        ></div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
