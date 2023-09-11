<script lang="ts" setup>
const colorMode = useColorMode();
const theme = ref("");

onMounted(() => (theme.value = colorMode.preference));

watch(
    () => colorMode.value,
    (val) => (theme.value = val)
);

function changeColorMode() {
    if (theme.value === "dark") colorMode.preference = "sepia";
    if (theme.value === "sepia") colorMode.preference = "light";
    if (theme.value === "light") colorMode.preference = "dark";
}
</script>
<template>
    <div class="relative flex items-center justify-center lg:order-3 order-2">
        <button
            type="button"
            @click="changeColorMode()"
            class="w-35px h-35px rounded-md flex items-center justify-center transition-all duration-500"
            :class="{
                'bg-yellow-50 text-[var(--background)]': theme == 'dark',
                'bg-[#0a192f] text-light-50': theme == 'light',
                'bg-white text-dark-900': theme == 'sepia',
            }"
            role="button"
            title="Go to BroJenuel Home"
            id="change-theme-button"
        >
            <span v-show="theme == 'dark'" class="icon--mdi icon--mdi--coffee" />
            <span v-show="theme == 'sepia'" class="icon--mdi icon--mdi--white-balance-sunny" />
            <span v-show="theme == 'light'" class="icon--mdi icon--mdi--moon-waning-crescent" />
        </button>
    </div>
</template>
