<script setup lang="ts">
const skills = useSkills();
</script>
<template>
    <div id="skills-container" class="my-work pt-50px">
        <div>
            <div class="w-full max-w-600px lg:max-w-700px mx-auto mt-50px px-20px">
                <div class="font-800 text-size-20px text-[var(--primary)]">Technical Skills</div>
                <div class="pt-5">
                    <div class="tracking-wide">
                        I am continuously learning to keep up with the latest technologies and be able to pick the best
                        tech for the job.
                    </div>
                </div>
            </div>
            <div class="max-w-600px lg:max-w-650px mx-auto px-10px pt-30px">
                <div class="grid sm:grid-cols-1 grid-cols-1 gap-3">
                    <div v-for="skill in skills" :key="skill.tech" class="flex flex-col pb-5">
                        <div>
                            <div class="flex items-center gap-3 pb-3 text-lg">
                                <span class="text-size-30px" :class="skill.icon" />
                                <div class="font-RobotoBold">{{ skill.tech }}</div>
                            </div>
                            <div
                                class="tracking-wide leading-relaxed font-RobotoLight text-sm"
                                v-if="skill.description"
                            >
                                {{ skill.description }}
                            </div>
                        </div>
                        <div class="flex gap-2 pt-10px flex-wrap">
                            <NuxtLink :href="tool.link" target="_blank" v-for="tool in skill.tools" :key="tool.text">
                                <div
                                    class="whitespace-nowrap w-full overflow-hidden transition-all duration-75 bg-[var(--background-secondary)] p-2 rounded-md transform hover:scale-110 cursor-pointer flex items-center"
                                >
                                    <span class="text-size-20px" :class="tool.icon" />
                                    <span class="ml-2 text-size-14px">{{ tool.text }}</span>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
