<script setup lang="ts">
const isTop = ref(true);
const showScrollTopButton = ref(false);

function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
    window.addEventListener("scroll", () => {
        isTop.value = window.scrollY < 50;
        showScrollTopButton.value = window.scrollY > 200;
    });
});
</script>
<template>
    <div
        v-if="showScrollTopButton"
        class="no-print fixed sm:right-10 right-3 sm:bottom-10 bottom-3 rounded-md bg-[var(--background)] text-[var(--primary)] cursor-pointer z-9999 border border-2px border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)] transition-all flex items-center justify-center"
        @click="scrollTop()"
    >
        <span class="icon--solar icon--solar--double-alt-arrow-up-bold text-5xl"></span>
    </div>
    <div
        class="fixed top-0 left-0 flex justify-between md:px-20px px-10px items-center transition-all z-999 duration-300 w-full md:h-80px h-70px backdrop-filter backdrop-blur-sm no-print"
        :class="{ 'shadow-lg bg-[var(--opacity-background)] !h-50px': !isTop }"
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
