<script lang="ts" setup>
defineProps({
    visible: String,
});

const JumpLinks = [
    {
        key: "about",
        name: "About",
        link: "#about",
        isRoute: false,
    },
    {
        key: "experience",
        name: "Experience",
        link: "#experience",
        isRoute: false,
    },
    {
        key: "projects",
        name: "Projects",
        link: "#projects",
        isRoute: false,
    },
    {
        key: "blog",
        name: "Blog",
        link: "/blog",
        isRoute: true,
    },
];
</script>
<template>
    <header
        class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
    >
        <div>
            <h1
                class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"
            >
                <a href="/">Jenuel Ganawed</a>
            </h1>
            <h2
                class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl"
            >
                Software Developer
            </h2>
            <p class="mt-4 max-w-xs leading-normal">
                I build web apps that are engaging, accessible and scalable.
            </p>
            <nav class="nav hidden lg:block" aria-label="In-page jump links">
                <ul class="mt-16 w-max">
                    <li v-for="JumLink in JumpLinks">
                        <a
                            v-if="!JumLink.isRoute"
                            class="jum-link-item group flex items-center py-3"
                            :class="{ active: visible === JumLink.key }"
                            :href="`${JumLink.link}`"
                        >
                            <span
                                class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none active:bg-slate-200"
                            >
                            </span>
                            <span
                                class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                            >
                                {{ JumLink.name }}
                            </span>
                        </a>
                        <NuxtLink
                            v-else
                            class="jum-link-item group flex items-center py-3"
                            :class="{ active: visible === JumLink.key }"
                            :href="`${JumLink.key}`"
                        >
                            <span
                                class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none active:bg-slate-200"
                            >
                            </span>
                            <span
                                class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                            >
                                {{ JumLink.name }}
                            </span>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
        <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
            <li class="mr-5 text-xs shrink-0">
                <a
                    class="block hover:text-slate-200"
                    href="https://github.com/bchiang7"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub (opens in a new tab)"
                    title="GitHub"
                >
                    <span class="sr-only">GitHub</span>
                    <Icon name="mdi:github" size="28" />
                </a>
            </li>
            <li class="mr-5 text-xs shrink-0">
                <a
                    class="block hover:text-slate-200"
                    href="https://www.linkedin.com/in/jenuelganawed/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn (opens in a new tab)"
                    title="LinkedIn"
                >
                    <span class="sr-only">LinkedIn</span>
                    <Icon name="mdi:linkedin" size="28" />
                </a>
            </li>
            <li class="mr-5 text-xs shrink-0">
                <a
                    class="block hover:text-slate-200"
                    href="https://instagram.com/brojenuel"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Instagram (opens in a new tab)"
                    title="Instagram"
                    ><span class="sr-only">Instagram</span>
                    <Icon name="mdi:instagram" size="28" />
                </a>
            </li>
            <li class="mr-5 text-xs shrink-0">
                <a
                    class="block hover:text-slate-200"
                    href="https://twitter.com/brojenuel"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Twitter (opens in a new tab)"
                    title="Twitter"
                >
                    <span class="sr-only">Twitter</span>
                    <Icon name="mdi:twitter" size="28" />
                </a>
            </li>
            <li class="mr-5 text-xs shrink-0">
                <a
                    class="block hover:text-slate-200"
                    href="https://dev.to/brojenuel"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Twitter (opens in a new tab)"
                    title="Twitter"
                >
                    <span class="sr-only">DevTo</span>
                    <Icon name="mdi:dev-to" size="30" />
                </a>
            </li>
        </ul>
    </header>
</template>
