<script setup lang="ts">
const socials = useSocialMedias();
</script>
<template>
    <div class="no-print pt-10 pb-20 !light:bg-gray-900 bg-[var(--primary)] text-[var(--light)]">
        <div class="w-full max-w-1100px mx-auto grid sm:grid-cols-4 grid-cols-1 mb-15 px-5 gap-10">
            <div class="sm:col-span-3 col-span-2">
                <NuxtLink href="/" class="text-3xl mb-5">
                    <span class="dark:text-[var(--background)]"> Bro</span>
                    <span class="dark:text-[var(--background)] font-800">Jenuel</span>
                </NuxtLink>
                <div class="py-5">
                    Hi! 👋 Im Jenuel. Since the beginning of my journey as a software developer 6 years ago, I've done
                    office and remote work for companies, and collaborated with teams of developers to build and
                    maintain awesome products. I'm quietly confident, naturally curious, and perpetually working on
                    improving my craft.
                </div>
                <div>
                    <ul class="flex flex-row gap-5 relative sm:p-0 p-2">
                        <li
                            v-for="social in socials"
                            class="text-4xl rounded-full border-2px border-none hover:dark:border-[var(--background)] h-45px w-45px flex items-center justify-center group hover:bg-[var(--background)] transition-all dark:text-[var(--background)] text-white hover:text-[var(--primary)] border-opacity-75"
                        >
                            <NuxtLink
                                :href="social.url"
                                target="_blank"
                                :aria-label="social.ariaLabel"
                                class="mt-[6px]"
                            >
                                <span :class="social.icon" />
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div class="md:text-xl text-lg dark:text-[var(--background)] opacity-75 font-600">
                    Living, learning, & leveling up one day at a time.
                </div>
                <ul class="my-2 flex gap-1">
                    <li>
                        <a href="https://brojenuel.com/sitemap.xml" class="hover:underline">Site Map</a>
                    </li>
                    <li class="opacity-50">|</li>
                    <li>
                        <a href="https://brojenuel.com/rss.xml" class="hover:underline">RSS</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="text-center text-[var(--background)] opacity-75">
            Hand Crafted by Me @ {{ new Date().getFullYear() }}
        </div>
    </div>
</template>
