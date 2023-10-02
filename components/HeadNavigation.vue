<script setup lang="ts">
const isTop = ref(false);
onMounted(() => {
    window.addEventListener("scroll", () => {
        isTop.value = window.scrollY < 50;
    });
});
</script>
<template>
    <div
        class="fixed top-0 left-0 flex justify-between md:px-20px px-10px items-center transition-all z-999 duration-300 w-full h-50px backdrop-filter backdrop-blur-sm no-print"
        :class="{ 'shadow-lg bg-[var(--opacity-background)] ': !isTop }"
    >
        <div class="w-full max-w-1200px mx-auto flex justify-between items-center">
            <NuxtLink href="/" class="flex items-center text-30px font-800">
                <span> Bro</span>
                <span class="text-[var(--primary)]">Jenuel</span>
            </NuxtLink>

            <div class="flex gap-3 items-center">
                <MenuComponent />
                <ThemeChangerButton />
            </div>
        </div>
    </div>
</template>
<style lang="scss">
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
