<script setup lang="ts">
const experiences = useExperiences();
</script>
<template>
    <div class="px-15px py-150px">
        <div class="lg:text-size-32px md:text-size-24px text-size-20px font-bold mb-5 max-w-600px mx-auto text-center">
            I'm proud to have worked and collaborated with this companies:
        </div>
        <div class="w-full max-w-1000px mx-auto px-10px">
            <div class="p-10px">
                <div class="w-full m-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                    <template v-for="(experience, i) in experiences" :key="experience.url">
                        <div class="text-center">
                            <div v-if="experience.position || experience.company" class="text-2xl">
                                <span v-if="experience.position" class="text-[var(--primary)] font-bold">{{
                                    experience.position
                                }}</span>
                                <span class="whitespace-nowrap">
                                    @
                                    <NuxtLink
                                        v-if="experience.company"
                                        :href="experience.url"
                                        target="_blank"
                                        class="hover:text-[var(--primary)] border-b-2px border-dashed hover:border-[var(--primary)] hover:text-[var(--primary)] white"
                                    >
                                        {{ experience.company }}
                                    </NuxtLink>
                                </span>
                            </div>
                            <div>
                                <NuxtLink
                                    v-if="experience.certificate"
                                    class="text-xs border-b border-dashed hover:border-[var(--primary)] hover:text-[var(--primary)] mr-5px"
                                    :to="experience.certificate.link"
                                    target="_blank"
                                >
                                    <Icon name="teenyicons:certificate-solid" />
                                    {{ experience.certificate.label }}
                                </NuxtLink>
                                <div v-if="experience.workStart" class="text-xs">
                                    {{ experience.workStart }} -
                                    <span v-html="experience.workUntil"></span>
                                </div>
                            </div>
                            <!-- <div v-if="experience.des" class="text-md mt-2" v-html="experience.des"></div> -->
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.timeline-div {
    .timeline-box {
        border-color: var(--primary) !important;
        margin: 0;
        padding: 30px;
        counter-increment: section;
        position: relative;
        text-align: center;

        &:last-child {
            border-bottom: 2px dashed;
        }

        &:nth-child(even) {
            border-top: 2px dashed;
            border-left: 2px dashed;
        }

        &:nth-child(odd) {
            border-top: 2px dashed;
            border-right: 2px dashed;
        }
    }

    .present-work {
        color: var(--primary);
    }
}
</style>
