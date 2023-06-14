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
    <div class="relative flex items-center justify-center lg:order-2 order-1">
        <button
            type="button"
            @click="changeColorMode()"
            class="lg:w-25px lg:h-25px w-35px h-35px rounded-md flex items-center justify-center transition-all duration-500"
            :class="{
                'bg-yellow-50 text-[var(--background)]': theme == 'dark',
                'bg-[#0a192f] text-light-50': theme == 'light',
                'bg-white text-dark-900': theme == 'sepia',
            }"
            role="button"
            title="Go to BroJenuel Home"
            id="change-theme-button"
        >
            <Icon v-show="theme == 'dark'" name="bx:coffee" />
            <Icon v-show="theme == 'sepia'" name="mdi:white-balance-sunny" />
            <Icon v-show="theme == 'light'" name="mdi:moon-waning-crescent" />
        </button>
    </div>
</template>
