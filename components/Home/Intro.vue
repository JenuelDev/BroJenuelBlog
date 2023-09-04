<script lang="ts" setup>
import { useMainStore } from "~/store/mainStore";

const mainStore = useMainStore();
const socialRef = ref(null);
const isTargetVisible = useElementVisibility(socialRef);
const showContent = ref(false);

watch(
    () => isTargetVisible.value,
    (val) => (mainStore.isIntroSocialLinkShowing = val)
);

onMounted(() => {
    showContent.value = true;
});
</script>
<template>
    <section
        v-show="showContent"
        class="flex items-center justify-center px-20px pt-20px relative sm:mt-100px mt-50px mb-100px"
    >
        <div class="relative flex flex-col items-center gap-20px relative w-full max-w-750px mx-auto">
            <div class="flex sm:gap-8 gap-5 sm:flex-row flex-col items-center z-99 mb-3">
                <div
                    class="rounded-3xl hover:rounded-2xl overflow-hidden opacity-70 relative hover:opacity-100 transition-all duration-300 border-5 border-opacity-0 border-light-50 hover:border-[var(--primary)] md:h-250px md:w-250px sm:order-2 order-1 w-300px h-300px"
                >
                    <nuxt-img
                        alt="Bro Jenuel Profile"
                        class="absolute left-0 top-0 transform rotate-0 hover:rotate-25 transition-all duration-300 scale-100 hover:scale-150 hover:top-20px hover:left-[-20px] w-full"
                        format="webp"
                        src="https://i.imgur.com/3iN1kQym.jpg"
                    />
                </div>
                <div class="sm:text-right text-center sm:order-1 order-2 sm:w-[50%]">
                    <div class="lg:text-size-33px md:text-size-36px text-size-36px font-300">
                        hi! <span class="animate-wave lg:text-size-54px md:text-size-46px text-size-60px">👋</span> I'm
                        a
                    </div>
                    <div
                        class="lg:text-size-40px md:text-size-29px text-size-55px font-600 mt-10px text-[var(--primary)]"
                    >
                        Full-Stack Developer
                    </div>
                    <div class="lg:text-size-33px md:text-size-25px text-size-33px font-300 tracking-tight py-2">
                        i create apps and websites
                    </div>
                    <div class="opacity-80 py-3">
                        My name is Jenuel Oras Ganawed and I am full-stack Developer from Philippines. I'm passionate
                        about coding, writing, and sharing what I know.
                        <NuxtLink
                            class="text-[var(--primary)] hover:underline whitespace-nowrap"
                            href="/cv"
                            title="Read More"
                        >
                            More...
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="w-full z-99 flex justify-center">
                <div ref="socialRef" class="rounded-lg p-10px flex md:gap-20px gap-30px justify-center flex-wrap">
                    <template v-for="social in mainStore.mySocial" :key="social.title">
                        <a
                            v-if="!social.isNuxtLink"
                            :aria-label="social.ariaLabel"
                            :href="social.url"
                            :title="social.title"
                            class="whitespace-nowrap hover:text-[var(--primary)] flex items-center"
                            target="_blank"
                        >
                            <Icon :name="social.icon" class="text-size-38px" />
                        </a>
                        <NuxtLink
                            v-else
                            :href="social.url"
                            :title="social.title"
                            class="whitespace-nowrap hover:text-[var(--primary)] flex items-center"
                        >
                            <Icon :name="social.icon" class="text-size-38px" />
                        </NuxtLink>
                    </template>
                </div>
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
