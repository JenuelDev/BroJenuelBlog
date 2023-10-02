<script setup lang="ts">
const skills = useSkills();
</script>
<template>
    <section id="skills-container" class="my-work max-w-1200px mx-auto pb-100px">
        <div class="mx-auto sm:px-80px px-10px pt-30px">
            <div class="grid lg:grid-cols-3 grid-cols-1 text-center">
                <div
                    v-for="(skill, index) in skills"
                    :key="skill.tech"
                    class="flex flex-col p-5 border border-2px border-dashed border-[var(--primary)]"
                    :class="{
                        'rounded-tl-lg lg:rounded-bl-lg lg:rounded-tr-none rounded-tr-lg lg:-mr-1px lg:mb-0 -mb-1px':
                            index == 0,
                        'rounded-br-lg lg:rounded-tr-lg lg:rounded-bl-none rounded-bl-lg lg:-ml-1px lg:mt-0 -mt-1px':
                            index == 2,
                    }"
                >
                    <div>
                        <div><span class="text-size-50px" :class="skill.icon" /></div>
                        <div class="flex items-center gap-2 pb-3 justify-center">
                            <div class="lg:text-size-24px text-size-20px font-bold">{{ skill.tech }}</div>
                        </div>
                        <div class="tracking-wide leading-relaxed font-RobotoLight" v-if="skill.description">
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
        </div>
    </section>
</template>
