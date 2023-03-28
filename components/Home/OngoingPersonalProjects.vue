<script lang="ts" setup>
const works = useWorks(1);
function aboutPersonalProject() {
    alert("Personal Projects are Projects I create on my free time.");
}
</script>
<template>
    <div class="w-full max-w-600px lg:max-w-700px mx-auto mt-50px px-20px py-40px">
        <h2 class="mb-3 text-[var(--primary)]">
            Ongoing Personal Projects
            <Icon @click="aboutPersonalProject" name="zondicons:information-solid" class="cursor-pointer" />
        </h2>
        <div class="grid grid-cols-1 gap-3 px-20px">
            <NuxtLink
                v-for="(work, i) in works"
                :key="i"
                :href="work.url"
                class="rounded-md cursor-pointer group"
                :target="work.url_new_tab ? '_blank' : '_self'"
            >
                <div class="pt-15px flex gap-10px items-center">
                    <div class="w-30px h-30px overflow-hidden rounded-md bg-white">
                        <img class="w-30px" :src="work.logo" :alt="work.title" width="50" height="50" />
                    </div>
                    <div class="font-700 group-hover:text-[var(--primary)] text-size-25px group-hover:underline">
                        {{ work.title }}
                    </div>
                </div>
                <div>
                    <ul class="flex gap-1 flex-wrap py-10px">
                        <li v-for="tags in work.techs" :key="tags" :class="`tag-${tags}`" class="tag">#{{ tags }}</li>
                    </ul>
                    <div>{{ work.description }}</div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
