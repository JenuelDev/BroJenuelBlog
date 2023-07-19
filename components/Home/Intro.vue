<script setup lang="ts">
import { useMainStore } from "~/store/mainStore";
const mainStore = useMainStore();
const socialRef = ref(null);
const isTargetVisible = useElementVisibility(socialRef);
const ShortcutButtons = [
    {
        path: "/TimeLine",
        label: "Experience",
        icon: "mdi:chart-timeline",
    },
    {
        path: "/my-work",
        label: "My Work",
        icon: "pajamas:project",
    },
    {
        path: "/blog",
        label: "Blog",
        icon: "fluent-mdl2:blog",
    },
    {
        path: "/resume",
        label: "My Resume",
        icon: "teenyicons:pdf-outline",
    },
    {
        path: "/what-i-can-offer",
        label: "What I can Offer",
        icon: "mdi:offer",
    },
];

watch(
    () => isTargetVisible.value,
    (val) => (mainStore.isIntroSocialLinkShowing = val)
);
</script>
<template>
    <section class="flex items-center justify-center px-20px pt-20px relative mt-100px">
        <div class="relative flex flex-col items-center gap-20px relative w-full max-w-750px mx-auto">
            <div class="flex gap-5 sm:flex-row flex-col items-center z-99 mb-3">
                <div
                    class="rounded-3xl hover:rounded-2xl overflow-hidden opacity-70 relative hover:opacity-100 transition-all duration-300 border-5 border-opacity-0 border-light-50 hover:border-[var(--primary)] md:h-170px md:w-165px sm:order-2 order-1 w-300px h-300px"
                >
                    <img
                        src="https://i.imgur.com/3iN1kQym.jpg"
                        class="absolute left-0 top-0 transform rotate-0 hover:rotate-25 transition-all duration-300 scale-100 hover:scale-150 hover:top-20px hover:left-[-20px] w-full"
                        alt="Bro Jenuel Profile"
                    />
                </div>
                <div class="sm:text-right text-center sm:order-1 order-2">
                    <div class="lg:text-size-33px md:text-size-36px text-size-36px font-300 tracking-tight">
                        hi! <span class="animate-wave lg:text-size-54px md:text-size-46px text-size-60px">👋</span>
                    </div>
                    <div
                        class="lg:text-size-40px md:text-size-29px text-size-55px font-600 tracking-tight mt-10px text-[var(--primary)]"
                    >
                        I'm <span> Jenuel</span>
                    </div>
                    <div
                        class="lg:text-size-33px md:text-size-25px text-size-33px font-300 tracking-tight md:w-250px w-full"
                    >
                        i create apps and websites
                    </div>
                </div>
            </div>

            <div class="w-full z-99 flex justify-center">
                <div
                    ref="socialRef"
                    class="rounded-lg p-10px bg-[var(--background-secondary)] flex md:gap-10px gap-30px justify-center flex-wrap"
                >
                    <template v-for="social in mainStore.mySocial" :key="social.title">
                        <a
                            v-if="!social.isNuxtLink"
                            target="_blank"
                            :href="social.url"
                            class="whitespace-nowrap hover:text-[var(--primary)] flex items-center"
                            :aria-label="social.ariaLabel"
                        >
                            <Icon class="text-size-28px" :name="social.icon" />
                            <span class="ml-7px">{{ social.title }}</span>
                        </a>
                        <NuxtLink
                            v-else
                            :href="social.url"
                            class="whitespace-nowrap hover:text-[var(--primary)] flex items-center"
                        >
                            <Icon class="text-size-28px" :name="social.icon" />
                            <span class="ml-7px">{{ social.title }}</span>
                        </NuxtLink>
                    </template>
                </div>
            </div>
            <div class="flex flex-wrap justify-center gap-3 sm:flex-row flex-col sm:w-auto w-full">
                <NuxtLink
                    v-for="shortCutButton in ShortcutButtons"
                    :key="shortCutButton.path"
                    :href="shortCutButton.path"
                    class="btn btn-filled sm:w-auto w-full group md:text-size-18px text-size-20px"
                    title="My Time Line"
                >
                    <Icon :name="shortCutButton.icon" class="group-hover:animate-head-shake" />
                    {{ shortCutButton.label }}
                </NuxtLink>
            </div>
            <SvgDotSquare
                class="absolute md:right-0 md:visible invisible z-20 fill-[var(--primary)] opacity-50 w-70px"
            />
            <SvgArrow
                class="absolute md:visible invisible left-[-50px] bottom-[80px] transform rotate-[-180deg] fill-[var(--primary)] opacity-50 w-70px"
            />
        </div>
    </section>
</template>
