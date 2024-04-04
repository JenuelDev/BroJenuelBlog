<script setup lang="ts">
const projects: Array<{
    logo?: string;
    description: string;
    url: string;
    name: string;
    github?: string;
    shop?: string;
    img?: string;
}> = [
    {
        name: "Believers Sword",
        description:
            "A Bible Reading App for Believers who likes to study the Bible.",
        url: "https://www.believersword.com/",
        img: "https://i.imgur.com/p1JAvW2.png",
    },
    {
        name: "Fams Tree",
        description:
            "Create Family tree for preserving heritage, and connecting family.",
        url: "https://fam-tree.brojenuel.com/",
        img: "https://i.imgur.com/M5lBO6E.png",
    },
    {
        name: "Facebook Clone",
        description:
            "Facebook clone template for your next social media project.",
        url: "https://facebook-clone-nu-ecru.vercel.app/",
        shop: "https://www.buymeacoffee.com/brojenuel/e/165281",
        img: "https://i.imgur.com/Yx7DRz0.png",
    },
    {
        name: "Laravel MongoDB Docs",
        description:
            "This package adds functionalities to the Eloquent model and Query builder for MongoDB, using the original Laravel API.",
        url: "https://laravel-mongodb.vercel.app",
        img: "/img/work/laravel mongodb.png",
    },
    {
        name: "Portfolio Website",
        description:
            "A Portfolio website for Kate Awisan as a Data Entry Freelance, Customer Service Associate, Social Media Assistant, And Data Entry Role.",
        url: "https://kateawisan.netlify.app",
        img: "/img/work/kate portfolio.png",
    },
    {
        name: "GIF Search Engine",
        description: "Search The GIF in the internet using GIF search.",
        url: "https://gif-find.netlify.app",
        img: "/img/work/gif search.png",
    },
];

function clickLink(link: string) {
    window.open(link, "_blank");
}
</script>
<template>
    <div
        id="personal-projects-area"
        class="w-full max-w-700px mx-auto pt-5 pb-20"
    >
        <div class="py-3">
            <span class="lg:text-2xl font-bold"> Personal Projects </span>
        </div>
        <div class="pb-5">
            <p class="leading-6 m-0">
                <span class="opacity-80">
                    I'm a bit of a digital product junky. I've created a bunch
                    of web and mobile apps in different industries and
                    verticals. Eventually, I decided that it would be a fun
                    challenge to try designing and building my own.
                </span>
                <NuxtLink
                    to="/my-work"
                    class="inline-flex items-center rounded border border-neutral-200 bg-neutral-200 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 px-2"
                >
                    Show More <Icon name="material-symbols:arrow-right-alt" />
                </NuxtLink>
            </p>
        </div>
        <div class="grid md:grid-cols-3 grid-cols-2 gap-3">
            <div
                v-for="project in projects"
                :href="project.url"
                target="_blank"
                :key="project.url"
                :title="'Visit ' + project.name"
                class="rounded flex flex-col gap-5 justify-center relative overflow-hidden group hover:cursor-pointer"
                @click="clickLink(project.url)"
            >
                <NuxtImg
                    class="transform scale-100 group-hover:scale-105 transition-all w-full h-full"
                    :src="project.img"
                    width="300"
                    height="300"
                    format="webp"
                    loading="lazy"
                    quality="50"
                    :alt="`BroJenuel - ${project.name}`"
                />
                <div
                    class="absolute -bottom-300px group-hover:bottom-0 transition-all m-3 p-1 rounded-md overflow-hidden text-[var(--light)] z-5"
                >
                    <div class="flex items-center gap-2">
                        <div class="text-sm font-bold m-0">
                            {{ project.name }}
                        </div>
                        <div class="flex items-center">
                            <NuxtLink
                                v-if="project.shop"
                                :href="project.url"
                                target="_blank"
                                class="bg-gray-50 text-gray-900 bg-opacity-80 hover:bg-opacity-100 rounded-md flex items-center p-1"
                                :aria-label="`${project.name} - shop`"
                                title="Get it On Shop"
                            >
                                <span
                                    class="icon--solar icon--solar--shop-broken text-2xl"
                                ></span>
                            </NuxtLink>
                            <NuxtLink
                                v-if="project.github"
                                :href="project.github"
                                target="_blank"
                                class="bg-gray-50 text-gray-900 bg-opacity-80 hover:bg-opacity-100 rounded-md flex items-center p-1"
                                :aria-label="`${project.name} - shop`"
                                title="See Source Code"
                            >
                                <span
                                    class="icon--solar icon--solar--shop-broken text-2xl"
                                ></span>
                            </NuxtLink>
                        </div>
                    </div>
                    <p class="m-0 text-sm opacity-80">
                        {{ project.description }}
                    </p>
                </div>
                <div
                    class="w-full h-full absolute opacity-0 group-hover:opacity-100 transition-all duration-400 z-4 bg-black bg-opacity-80"
                ></div>
            </div>
        </div>
    </div>
</template>
