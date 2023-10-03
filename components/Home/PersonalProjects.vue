<script setup lang="ts">
const projects: Array<{
    logo: string;
    description: string;
    url: string;
    name: string;
    github?: string;
    shop?: string;
}> = [
    {
        logo: "https://www.believersword.com/_nuxt/believers-sword.7fcefc1c.svg",
        name: "Believers Sword",
        description: "A Bible Reading App for Believers who likes to study the Bible.",
        url: "https://www.believersword.com/",
    },
    {
        logo: "https://fam-tree.brojenuel.com/assets/Logo-d128d310.svg",
        name: "Fams Tree",
        description: "Create Family tree for preserving heritage, and connecting family.",
        url: "https://fam-tree.brojenuel.com/",
    },
    {
        logo: "https://camo.githubusercontent.com/18c3fe50597afdc7a3eeafc92ee4ddffa88ff679be10a977f171a13736e183b2/68747470733a2f2f66616365626f6f6b6272616e642e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031392f30342f665f6c6f676f5f5247422d4865782d426c75655f3531322e706e67",
        name: "Facebook Clone",
        description: "Facebook clone template for your next social media project.",
        url: "https://facebook-clone-nu-ecru.vercel.app/",
        shop: "https://www.buymeacoffee.com/brojenuel/e/165281",
    },
];
</script>
<template>
    <div class="w-full max-w-1200px mx-auto mt-100px px-10px">
        <div class="w-full max-w-600px lg:max-w-700px mx-auto mt-50px px-20px mb-20px text-center">
            <div class="md:text-size-32px text-size-24px font-bold mb-5">Personal Projects</div>
            <div class="mt-2 text-lg">
                I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in
                different industries and verticals. Eventually, I decided that it would be a fun challenge to try
                designing and building my own.
            </div>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            <div
                v-for="project in projects"
                :key="project.url"
                class="shadow-lg px-60px py-35px border rounded-lg border-2px border-[var(--primary)] border-dashed flex flex-col gap-5 text-center justify-between"
            >
                <div class="flex items-center justify-center gap-2">
                    <NuxtImg :src="project.logo" height="30" width="30" :alt="project.name + ' Logo'" loading="lazy" />
                    <span class="text-2xl">{{ project.name }}</span>
                </div>
                <p>{{ project.description }}</p>
                <div class="flex items-center justify-center">
                    <div>
                        <NuxtLink
                            :href="project.url"
                            target="_blank"
                            class="py-1 px-2 flex items-center gap-2 text-xs bg-[var(--primary-light)] rounded-sm dark:text-[var(--background)] max-w-120px whitespace-nowrap"
                            title="Visit Link"
                        >
                            <span class="icon--solar icon--solar--square-top-down-linear text-lg"></span>
                            <span class="truncate">
                                {{ project.url.replace("https://", "").replace("www.", "").replace("/", "") }}
                            </span>
                        </NuxtLink>
                    </div>
                    <div v-if="project.shop">
                        <NuxtLink
                            :href="project.url"
                            target="_blank"
                            class="py-1 px-2 flex items-center gap-2 text-xs rounded-sm hover:text-[var(--primary)]"
                            :aria-label="`${project.name} - shop`"
                            title="Get it On Shop"
                        >
                            <span class="icon--solar icon--solar--shop-broken text-2xl"></span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-30px pb-100px">
            <NuxtLink
                to="/blog"
                class="border px-3 py-5px rounded-full font-bold flex items-center gap-2 hover:text-[var(--primary)] hover:border-[var(--primary)] hover:underline dark:border-white border-gray-900"
            >
                <span class="icon--solar icon--solar--programming-broken text-25px"></span>
                Check More Projects
            </NuxtLink>
        </div>
    </div>
</template>
