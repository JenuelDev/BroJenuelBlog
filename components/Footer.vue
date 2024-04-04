<script setup lang="ts">
const socials = useSocialMedias();
</script>
<template>
    <div
        class="w-full max-w-700px mx-auto flex justify-between items-center mb-15 px-5 gap-10"
    >
        <NuxtLink
            href="/"
            class="flex items-center font-400 text-[var(--color)] decoration-none"
        >
            <span>@ Bro</span>
            <span class="font-bold">Jenuel</span>
        </NuxtLink>
        <div class="flex items-center gap-2 text-2xl">
            <NuxtLink
                v-for="social in socials"
                :href="social.url"
                target="_blank"
                :aria-label="social.ariaLabel"
                class="text-[var(--color)] hover:bg-dark-700 hover:text-gray-50 h-25px w-25px rounded-md transition-all dark:hover:bg-gray-50 dark:hover:text-dark-700"
            >
                <span :class="social.icon" />
            </NuxtLink>
        </div>
    </div>
</template>
