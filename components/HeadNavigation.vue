<script setup lang="ts">
const isTop = ref(true);
const showScrollTopButton = ref(false);
const props = defineProps({
    subtitle: {
        type: String,
        default: "",
    },
});

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
    <div class="fixed top-0 left-0 flex justify-between items-center z-999 w-full no-print">
        <div
            class="w-full max-w-1200px mx-auto flex justify-between items-center backdrop-filter backdrop-blur-md md:h-80px h-70px transition-all duration-300 px-10px"
            :class="{ 'shadow-lg rounded-lg !h-50px': !isTop }"
        >
            <NuxtLink href="/" class="flex items-center text-xl font-400">
                <span> Bro</span>
                <span class="text-[var(--primary)]">Jenuel</span>
                <span>{{ subtitle }}</span>
            </NuxtLink>

            <div class="flex gap-2 items-center">
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
