<script setup lang="ts">
import { useMainStore } from "~/store/mainStore";
const mainStore = useMainStore();
const socialRef = ref(null);
const isTargetVisible = useElementVisibility(socialRef);

watch(
    () => isTargetVisible.value,
    (val) => (mainStore.isIntroSocialLinkShowing = val)
);
</script>
<template>
    <section class="flex items-center justify-center px-20px pt-20px relative mt-100px">
        <div class="relative flex flex-col items-center gap-20px relative">
            <div class="flex gap-5 sm:flex-row flex-col items-center z-99">
                <div
                    class="rounded-3xl hover:rounded-2xl overflow-hidden opacity-70 relative hover:opacity-100 transition-all duration-300 border-5 border-opacity-0 border-light-50 hover:border-[var(--primary)] h-170px w-165px sm:order-2 order-1"
                >
                    <img
                        src="https://i.imgur.com/3iN1kQym.jpg"
                        class="absolute left-0 top-0 transform rotate-0 hover:rotate-25 transition-all duration-300 scale-100 hover:scale-150 hover:top-20px hover:left-[-20px]"
                        alt="Bro Jenuel Profile"
                    />
                </div>
                <div class="sm:text-right text-center sm:order-1 order-2">
                    <div class="lg:text-size-33px md:text-size-36px text-size-26px font-300 tracking-tight">
                        hi! <span class="animate-wave lg:text-size-54px md:text-size-46px text-size-30px">👋</span>
                    </div>
                    <div class="lg:text-size-40px md:text-size-29px text-size-25px font-600 tracking-tight mt-10px text-[var(--primary)]">I'm <span> Jenuel</span></div>
                    <div class="lg:text-size-33px md:text-size-25px text-size-20px font-300 tracking-tight md:w-250px w-150px">i create apps and websites</div>
                </div>
            </div>

            <div class="bg-[var(--background-secondary)] w-full p-10px rounded-lg z-99">
                <div ref="socialRef" class="flex gap-10px justify-center flex-wrap">
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
                        <NuxtLink v-else :href="social.url" class="whitespace-nowrap hover:text-[var(--primary)] flex items-center">
                            <Icon class="text-size-28px" :name="social.icon" />
                            <span class="ml-7px">{{ social.title }}</span>
                        </NuxtLink>
                    </template>
                </div>
            </div>
            <div class="flex justify-center gap-3 sm:flex-row flex-col sm:w-auto w-full">
                <NuxtLink href="/TimeLine" class="btn btn-lg btn-filled sm:w-auto w-full group" title="My Time Line">
                    <Icon name="mdi:chart-timeline" class="group-hover:animate-head-shake" />
                    Experience
                </NuxtLink>
                <NuxtLink href="/my-work" class="btn btn-lg btn-filled sm:w-auto w-full group" title="My Work">
                    <Icon name="pajamas:project" class="group-hover:animate-head-shake" />
                    My Work
                </NuxtLink>
                <NuxtLink href="/blog" class="btn btn-lg btn-filled sm:w-auto w-full group" title="My Blog">
                    <Icon name="fluent-mdl2:blog" class="group-hover:animate-head-shake" />
                    Blog
                </NuxtLink>
                <NuxtLink href="/resume" class="btn btn-lg btn-filled sm:w-auto w-full group" title="My Resume">
                    <Icon name="teenyicons:pdf-outline" class="group-hover:animate-head-shake" />
                    My CV
                </NuxtLink>
            </div>
            <SvgDotSquare class="absolute md:right-0 md:visible invisible z-20 fill-[var(--primary)] opacity-50 w-70px" />
            <SvgArrow class="absolute md:visible invisible left-[-50px] bottom-[80px] transform rotate-[-180deg] fill-[var(--primary)] opacity-50 w-70px" />
        </div>
    </section>
</template>
