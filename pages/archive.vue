<script setup lang="ts">
const projects = useProjects();
</script>
<template>
    <div id="main-content" class="relative">
        <HomePointer />
        <section
            class="w-full max-w-lg mx-auto py-16"
            aria-label="Selected projects"
        >
            <NuxtLink to="/" class="hover:text-teal-300">
                <Icon name="ic:baseline-arrow-back" class="w-6 h-6" />
                BroJenuel
            </NuxtLink>
            <div class="mt-16">
                <ul class="group/list">
                    <li v-for="project in projects" class="mb-12">
                        <div
                            class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                        >
                            <div
                                class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                            ></div>
                            <div class="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a
                                        class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                        :href="project.url"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        :aria-label="project.ariaLabel"
                                    >
                                        <span
                                            class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                                        >
                                        </span>
                                        <span>
                                            {{ project.name }}
                                            <span class="inline-block">
                                                <Icon
                                                    class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                    name="ic:baseline-arrow-outward"
                                                />
                                            </span>
                                        </span>
                                    </a>
                                </h3>
                                <p class="mt-2 text-sm leading-normal">
                                    Video course that teaches how to build a web
                                    app with the Spotify Web API. Topics covered
                                    include the principles of REST APIs, user
                                    auth flows, Node, Express, React, Styled
                                    Components, and more.
                                </p>
                                <ul
                                    class="mt-2 flex flex-wrap"
                                    aria-label="Technologies used:"
                                >
                                    <li
                                        v-for="tech in project.tech"
                                        class="mr-1.5 mt-2"
                                    >
                                        <div
                                            class="flex items-center rounded-full bg-slate-800 px-3 py-1 text-xs font-medium leading-5"
                                        >
                                            {{ tech }}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <NuxtImg
                                alt="Halcyon Theme homepage hero with screenshot of VS Code editor"
                                loading="lazy"
                                width="200"
                                height="180"
                                class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                style="color: transparent"
                                :src="project.img"
                                format="webp"
                                quality="50"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>
