<script lang="ts" setup>
const WORKS = useGetShowInHome();
</script>
<template>
    <div class="w-full max-w-600px lg:max-w-700px mx-auto pt-50px px-20px">
        <div class="font-bold text-lg text-[var(--primary)]">Projects</div>
        <div class="mt-2">
            A crucial part of learning involves taking on personal projects. Here are some of my works. I dedicated some
            of my free time in creating these projects.
        </div>
    </div>
    <div class="flex flex-col gap-20 lg:max-w-800px max-w-600px mx-auto px-10px mt-10">
        <WorkItem :works="WORKS" />
    </div>
    <div class="flex justify-center mt-30px">
        <NuxtLink class="btn btn-filled w-auto" href="/blog" alt="Read More Blogs">Check More Projects</NuxtLink>
    </div>
</template>
