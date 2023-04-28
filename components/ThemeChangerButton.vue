<script lang="ts" setup>
const colorMode = useColorMode();
const theme = ref("");

onMounted(() => (theme.value = colorMode.preference));

watch(
    () => colorMode.value,
    (val) => (theme.value = val)
);
</script>
<template>
    <div class="relative">
        <Transition name="theme-button">
            <button
                v-if="theme === 'dark'"
                type="button"
                @click="$colorMode.preference = 'sepia'"
                class="absolute bg-yellow-50 w-25px h-25px rounded-md text-[var(--background)]"
                role="button"
                title="Change Theme"
                id="change-theme-button"
            >
                <Icon name="bx:coffee" />
            </button>
        </Transition>
        <Transition name="theme-button">
            <button
                v-if="theme == 'sepia'"
                type="button"
                @click="$colorMode.preference = 'light'"
                class="absolute bg-white w-25px h-25px rounded-md text-dark-900"
                role="button"
                title="Change Theme"
                id="change-theme-button"
            >
                <Icon name="mdi:white-balance-sunny" />
            </button>
        </Transition>
        <Transition name="theme-button">
            <button
                v-if="theme == 'light'"
                type="button"
                @click="$colorMode.preference = 'dark'"
                class="absolute bg-[#0a192f] w-25px h-25px rounded-md text-light-50"
                role="button"
                title="Change Theme"
                id="change-theme-button"
            >
                <Icon name="mdi:moon-waning-crescent" />
            </button>
        </Transition>
    </div>
</template>
<style lang="scss">
.theme-button-enter-active,
.theme-button-leave-active {
    transition: all 0.5s ease;
}

.theme-button-enter-from {
    transform: translateY(20px);
    opacity: 0;
}
.theme-button-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}
</style>
