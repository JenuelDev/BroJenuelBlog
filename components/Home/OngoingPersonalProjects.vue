<script lang="ts" setup>
const WORKS = useGetOngoingWorks();
function aboutPersonalProject() {
    alert("Personal Projects are Projects I create on my free time.");
}
</script>
<template>
    <div class="w-full max-w-600px lg:max-w-700px mx-auto pt-50px px-20px mb-20px flex items-center gap-5 text-[var(--primary)]">
        <div class="font-800 text-size-20px ">Ongoing Personal Projects</div>
        <NuxtLink href="/my-work">
            <Icon name="fa6-solid:arrow-right-long" class="cursor-pointer text-size-27px  animate-shake" />
        </NuxtLink>
    </div>
    <div class="flex flex-col gap-20 lg:max-w-800px max-w-600px mx-auto px-10px">
        <WorkItem :works="WORKS" />
    </div>
</template>
