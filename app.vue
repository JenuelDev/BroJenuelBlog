<script lang="ts" setup>
onMounted(() => {
    var style = "color: tomato; background:#eee; -webkit-text-stroke: 1px black; font-size:30px;";
    console.log("%cHi!, I am Happy 😆 to have you visit my home in the internet.", style);
});
</script>
<template>
    <NuxtLoadingIndicator />
    <NuxtPage />
</template>
<style lang="scss">
.btn {
    @apply flex items-center justify-center gap-1 rounded-md sm:px-10px sm:py-5px px-30px py-10px  whitespace-nowrap cursor-pointer  duration-150 border border-[var(--gray-lighter)];

    &.left-up {
        @apply transform translate-y-1 transition-transform;
    }

    &.btn-lg {
        @apply sm:px-20px sm:py-10px px-40px py-20px;
    }

    &.btn-filled {
        @apply border border-[var(--primary)] bg-[var(--primary)] dark:text-dark-900 text-white;
    }

    &:hover {
        @apply translate-y-0 bg-[var(--primary)] dark:text-[var(--background)] text-white border-[var(--primary)];

        &.btn-filled {
            @apply border-[var(--primary-darker)] bg-[var(--primary-darker)];
        }
    }
}
</style>
