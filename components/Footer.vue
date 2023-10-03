<script setup lang="ts">
const socials = useSocialMedias();
</script>
<template>
    <div class="pt-100px pb-10 bg-[var(--primary)] text-center flex flex-col gap-9">
        <NuxtLink href="/" class="text-30px font-800">
            <span class="dark:text-[var(--background)] text-white"> Bro</span>
            <span class="dark:text-[var(--background)] text-white">Jenuel</span>
        </NuxtLink>
        <div class="md:text-xl text-lg dark:text-[var(--background)] text-white opacity-75 font-600">
            Living, learning, & leveling up one <br />
            day at a time.
        </div>
        <div>
            <ul class="flex flex-row gap-5 relative justify-center sm:p-0 p-2">
                <li
                    v-for="social in socials"
                    class="text-4xl rounded-full border-2px border-none hover:dark:border-[var(--background)] h-45px w-45px flex items-center justify-center group hover:bg-[var(--background)] transition-all dark:text-[var(--background)] text-white hover:text-[var(--primary)] border-opacity-75"
                >
                    <NuxtLink :href="social.url" target="_blank" :aria-label="social.ariaLabel" class="mt-[6px]">
                        <span :class="social.icon" />
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="text-lg text-[var(--background)] font-600 opacity-75">Hand Crafted by Me @ twentytwentythree</div>
    </div>
</template>
