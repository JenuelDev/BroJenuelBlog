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
    <div
        class="fixed top-0 left-0 flex justify-between px-20px items-center transition-all dark:bg-[var(--opacity-background)] z-999 duration-300 w-full h-50px dark:shadow-md shadow-lg backdrop-filter backdrop-blur-sm bg-[var(--background)]"
    >
        <div class="w-full max-w-700px mx-auto flex justify-between items-center">
            <NuxtLink href="/" class="flex items-center">
                <IconLaptop class="mr-7px" />
                <div>
                    <span>Bro</span>
                    <span class="text-[var(--primary)] font-800">Jenuel</span>
                </div>
            </NuxtLink>

            <div class="flex gap-3 pr-20px">
                <div><DropDownMenu /></div>
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
            </div>
        </div>
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

.dropdown-enter-active {
    transition: all 0.3s ease-out;
}

.dropdown-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}
</style>
