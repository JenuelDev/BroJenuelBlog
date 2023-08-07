<script lang="ts" setup>
const WORKS = useGetOngoingWorks();
function aboutPersonalProject() {
    alert("Personal Projects are Projects I create on my free time.");
}
</script>
<template>
    <div class="w-full max-w-600px lg:max-w-700px mx-auto mt-50px px-20px">
        <h2 class="mb-3 text-[var(--primary)] flex justify-between">
            Ongoing Personal Project
            <Icon @click="aboutPersonalProject" name="zondicons:information-solid" class="cursor-pointer" />
        </h2>
    </div>
    <div class="flex flex-col gap-20 lg:max-w-800px max-w-600px mx-auto px-10px">
        <WorkItem :works="WORKS" />
    </div>
</template>
