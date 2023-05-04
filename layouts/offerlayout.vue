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
            class="flex justify-center items-center max-w-600px lg:max-w-700px mx-auto px-5 py-3 bg-[var(--background-secondary)] gap-30px rounded-lg mt-5 sticky top-60px backdrop-filter backdrop-blur-md"
        >
            <NuxtLink
                href="/what-i-can-offer"
                class="flex flex-col items-center"
                :class="{ 'text-[var(--primary)]': route.path == '/what-i-can-offer' }"
            >
                <Icon name="ic:sharp-web" size="20" />
                <span>Web App</span>
            </NuxtLink>
            <NuxtLink
                href="/what-i-can-offer/mobile-app"
                class="flex flex-col items-center"
                :class="{ 'text-[var(--primary)]': route.path == '/what-i-can-offer/mobile-app' }"
            >
                <Icon name="bxs:mobile" size="20" />
                <span>Mobile App</span>
            </NuxtLink>
            <NuxtLink
                href="/what-i-can-offer/websites"
                class="flex flex-col items-center"
                :class="{ 'text-[var(--primary)]': route.path == '/what-i-can-offer/websites' }"
            >
                <Icon name="gg:website" size="20" />
                <span>Website</span>
            </NuxtLink>
        </div>
        <slot />
        <Footer />
    </div>
</template>
