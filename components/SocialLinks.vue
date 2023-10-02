<script setup lang="ts">
import { useMainStore } from "~~/store/mainStore";
const mainStore = useMainStore();
</script>
<template>
    <div
        class="fixed lg:left-10 left-2 transition-all duration-300 left-0 sm:w-auto w-full sm:bg-opacity-0 z-999 filter backdrop-filter backdrop-blur-md sm:bottom-[100px] opacity-100 no-print bottom-0"
    >
        <ul class="flex sm:flex-col flex-row gap-3 relative justify-center sm:p-0 p-2">
            <li
                v-for="social in mainStore.mySocial"
                class="sm:transform sm:translate-y-1 sm:hover:translate-y-0 sm:transition-all sm:cursor-pointer sm:hover:text-[var(--primary)] relative group"
            >
                <NuxtLink
                    v-if="social.isNuxtLink"
                    :href="social.url"
                    aria-label="Go to Contact Page"
                    class="text-size-30px"
                >
                    <span :class="social.icon" />
                </NuxtLink>
                <NuxtLink
                    v-else
                    :href="social.url"
                    target="_blank"
                    :aria-label="social.ariaLabel"
                    class="text-size-30px"
                >
                    <span :class="social.icon" />
                </NuxtLink>
                <span
                    class="absolute top-[2px] group-hover:opacity-100 opacity-0 transition-all w-0 group-hover:w-20 overflow-hidden"
                >
                    {{ social.title }}
                </span>
            </li>

            <li
                class="absolute sm:block hidden h-70px w-1px dark:bg-light-50 bg-[var(--color)] bottom-[-100px] left-[calc(50%-2px)]"
            ></li>
        </ul>
    </div>
    <div
        class="fixed lg:right-10 right-2 transition-all duration-300 right-0 bottom-0 sm:w-auto w-full z-99 filter backdrop-filter backdrop-blur-md sm:bottom-[100px] no-print"
    >
        <NuxtLink href="/contact">
            <div
                class="write-vertical-left tracking-2px text-size-15px font-100 sm:transform sm:translate-y-2 sm:hover:translate-y-0 sm:transition-all sm:cursor-pointer sm:hover:text-[var(--primary)] sm:block hidden"
            >
                jenuelganawed936@gmail.com
            </div>
            <div
                class="absolute sm:block hidden h-70px w-1px dark:bg-light-50 bg-[var(--color)] bottom-[-100px] left-[calc(50%-2px)]"
            ></div>
        </NuxtLink>
    </div>
</template>
