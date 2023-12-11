<script lang="ts" setup>
const colorMode = useColorMode();
const theme = ref("");

onMounted(() => (theme.value = colorMode.preference));

watch(
    () => colorMode.value,
    (val) => (theme.value = val)
);

function changeColorMode() {
    if (theme.value === "dark") colorMode.preference = "light";
    if (theme.value === "light") colorMode.preference = "dark";
}
</script>
<template>
    <div class="relative flex items-center justify-center lg:order-3 order-2">
        <button
            type="button"
            @click="changeColorMode()"
            class="h-25px w-25px rounded-full flex items-center justify-center transition-all bg-[var(--primary)] border-none cursor-pointer"
            role="button"
            title="Go to BroJenuel Home"
            id="change-theme-button"
        ></button>
    </div>
</template>
