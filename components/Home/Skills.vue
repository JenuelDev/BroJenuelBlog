<script setup lang="ts">
const skills = useSkills();
</script>
<template>
    <section id="skills-container" class="my-work max-w-1100px mx-auto">
        <div class="grid grid-cols-1 gap-5">
            <div
                v-for="skill in skills"
                :key="skill.tech"
                class="flex flex-col transition-all dark:border-opacity-30 rounded-lg"
            >
                <div>
                    <div
                        class="tracking-wide leading-relaxed opacity-80"
                        v-if="skill.description"
                    >
                        {{ skill.description }}
                    </div>
                </div>
                <div class="flex gap-3 pt-10px flex-wrap">
                    <NuxtLink
                        :href="tool.link"
                        target="_blank"
                        v-for="tool in skill.tools"
                        :key="tool.text"
                        class="decoration-none"
                    >
                        <div
                            class="whitespace-nowrap w-full overflow-hidden transition-all duration-75 bg-[var(--background-secondary)] px-3 py-2 rounded-md transform hover:scale-105 cursor-pointer flex items-center text-[var(--color)]"
                        >
                            <span :class="tool.icon" />
                            <span class="ml-2 text-sm">{{ tool.text }}</span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>
