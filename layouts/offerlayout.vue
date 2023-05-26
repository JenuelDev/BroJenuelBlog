<script setup lang="ts">
const route = useRoute();
</script>
<template>
    <div>
        <HeadNavigation />
        <SocialLinks />
        <div class="max-w-550px mx-auto px-10px pt-90px">
            <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px">
                <Icon name="mdi:chart-timeline" />
                What I can Offer
            </div>
        </div>
        <div
            class="flex justify-center items-center p-1 gap-10px rounded-lg mt-5 bg-[var(--background)] w-280px mx-auto sticky top-60px"
        >
            <NuxtLink
                href="/what-i-can-offer"
                class="flex flex-col items-center hover:bg-[var(--background-secondary)] px-2 py-3 rounded-lg"
                :class="{
                    'text-[var(--primary)] bg-[var(--background-secondary)]': route.path == '/what-i-can-offer',
                }"
            >
                <Icon name="ic:sharp-web" size="20" />
                <span>Web App</span>
            </NuxtLink>
            <NuxtLink
                href="/what-i-can-offer/mobile-app"
                class="flex flex-col items-center hover:bg-[var(--background-secondary)] px-2 py-3 rounded-lg"
                :class="{
                    'text-[var(--primary)] bg-[var(--background-secondary)]':
                        route.path == '/what-i-can-offer/mobile-app',
                }"
            >
                <Icon name="bxs:mobile" size="20" />
                <span>Mobile App</span>
            </NuxtLink>
            <NuxtLink
                href="/what-i-can-offer/websites"
                class="flex flex-col items-center hover:bg-[var(--background-secondary)] px-2 py-3 rounded-lg"
                :class="{
                    'text-[var(--primary)] bg-[var(--background-secondary)]':
                        route.path == '/what-i-can-offer/websites',
                }"
            >
                <Icon name="gg:website" size="20" />
                <span>Website</span>
            </NuxtLink>
        </div>
        <slot />
        <Footer />
    </div>
</template>
