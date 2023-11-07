<script setup lang="ts">
const skills = useSkills();
</script>
<template>
    <section id="skills-container" class="my-work max-w-1100px mx-auto px-10px pt-15">
        <div class="grid gap-10 lg:grid-cols-3 grid-cols-1">
            <div
                v-for="(skill, index) in skills"
                :key="skill.tech"
                class="flex flex-col transition-all dark:border-opacity-30 rounded-lg"
            >
                <div>
                    <div class="flex items-center gap-2 pb-3">
                        <span class="text-size-40px" :class="skill.icon"></span>
                        <span class="lg:text-size-24px text-size-20px font-bold">
                            {{ skill.tech }}
                        </span>
                    </div>
                    <div class="tracking-wide leading-relaxed" v-if="skill.description">
                        {{ skill.description }}
                    </div>
                </div>
                <div class="flex gap-2 pt-10px flex-wrap">
                    <NuxtLink :href="tool.link" target="_blank" v-for="tool in skill.tools" :key="tool.text">
                        <div
                            class="whitespace-nowrap w-full overflow-hidden transition-all duration-75 bg-[var(--background-secondary)] p-1 rounded-md transform hover:scale-110 cursor-pointer flex items-center"
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
