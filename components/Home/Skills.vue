<script setup lang="ts">
const skills = useSkills();
</script>
<template>
    <section id="skills-container" class="my-work max-w-1100px mx-auto px-10px pt-30px">
        <div class="grid gap-5 lg:grid-cols-3 grid-cols-1 text-center">
            <div
                v-for="(skill, index) in skills"
                :key="skill.tech"
                class="flex flex-col p-5 shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-opacity-30 rounded-lg"
            >
                <div>
                    <div><span class="text-size-50px" :class="skill.icon" /></div>
                    <div class="flex items-center gap-2 pb-3 justify-center">
                        <div class="lg:text-size-24px text-size-20px font-bold">{{ skill.tech }}</div>
                    </div>
                    <div class="tracking-wide leading-relaxed" v-if="skill.description">
                        {{ skill.description }}
                    </div>
                </div>
                <div class="flex gap-2 pt-10px flex-wrap justify-center">
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
