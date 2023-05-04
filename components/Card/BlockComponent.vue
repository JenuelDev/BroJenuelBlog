<script setup lang="ts">
const props = defineProps(["title", "subtitle"]);
</script>
<template>
    <div
        class="flex flex-col justify-center items-center bg-[var(--primary)] text-[var(--background)] py-5 px-3 rounded-lg gap-5"
    >
        <div class="text-size-30px font-600">{{ props.title }}</div>
        <div class="text-size-20px font-100">{{ props.subtitle }}</div>
    </div>
</template>
