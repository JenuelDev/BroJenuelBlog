<script lang="ts" setup>
const WORKS = useGetOngoingWorks();
function aboutPersonalProject() {
    alert("Personal Projects are Projects I create on my free time.");
}
</script>
<template>
    <div class="w-full max-w-600px lg:max-w-700px mx-auto mt-50px px-20px">
        <h2 class="mb-3 text-[var(--primary)] flex justify-between">
            Ongoing Project
            <Icon @click="aboutPersonalProject" name="zondicons:information-solid" class="cursor-pointer" />
        </h2>
    </div>
    <div class="flex flex-col gap-20 lg:max-w-800px max-w-600px mx-auto px-10px">
        <div
            v-for="(work, i) in WORKS"
            :key="i"
            class="relative group flex gap-15px sm:flex-row flex-col sm:opacity-80 hover:opacity-100 sm:transform sm:scale-98 sm:hover:scale-100 transition-all"
        >
            <div
                class="border-1 border-[var(--gray-lightest)] flex justify-center items-center overflow-hidden rounded-lg relative sm:w-[55%] w-full"
                :class="{ 'sm:order-2': i % 2 != 0 }"
            >
                <img
                    :src="work.thumbnail.includes('http') ? work.thumbnail : `/img/work/${work.thumbnail}`"
                    class="w-full transform scale-110 group-hover:scale-transform-130 transition-all"
                    :alt="work.description"
                    width="500"
                />
            </div>
            <div class="group sm:w-[45%] w-full" :class="{ 'sm:text-right': i % 2 != 0 }">
                <div>{{ work.overline }}</div>
                <div class="flex gap-10px items-center" :class="{ 'sm:justify-end': i % 2 != 0 }">
                    <div v-if="work.logo" class="w-30px h-30px overflow-hidden rounded-md bg-white">
                        <img class="w-30px" :src="work.logo" :alt="work.title" />
                    </div>
                    <div class="font-700 group-hover:text-[var(--primary)] text-size-25px">
                        {{ work.title }}
                    </div>
                </div>
                <div>
                    <ul class="flex gap-1 flex-wrap py-10px text-size-13px" :class="{ 'sm:justify-end': i % 2 != 0 }">
                        <li v-for="tags in work.techs" :key="tags" :class="`tag-${tags}`" class="tag">#{{ tags }}</li>
                    </ul>
                    <div class="mb-2">{{ work.description }}</div>
                    <div class="flex gap-2 flex-wrap" :class="{ 'sm:justify-end': i % 2 != 0 }">
                        <a
                            v-if="work.article_link"
                            :href="work.article_link"
                            title="Check Article"
                            class="btn"
                            :class="{ 'order-1': i % 2 == 0 }"
                        >
                            <Icon name="mdi:launch" />
                            Article
                        </a>
                        <a
                            :href="work.external_link"
                            target="_blank"
                            title="Open App"
                            class="btn"
                            :class="{ 'order-1': i % 2 == 0 }"
                        >
                            <Icon name="mdi:launch" />
                            Open App
                        </a>
                        <a
                            v-if="work.github_link"
                            :href="work.github_link"
                            target="_blank"
                            title="Open Github"
                            class="btn"
                            :class="{ 'order-1': i % 2 == 0 }"
                        >
                            <Icon name="mdi:github" />
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
