<script setup lang="ts">
const showMobileMenu = ref(false);

function toggleMobileMenu() {
    showMobileMenu.value = !showMobileMenu.value;

    if (!showMobileMenu.value) document.body.classList.remove("no-scroll");
    else document.body.classList.add("no-scroll");
}
</script>
<template>
    <div
        class="fixed right-5 top-5 bg-slate-900 p-5 rounded-full shadow-md cursor-pointer block lg:hidden"
        style="z-index: 60"
        @click="toggleMobileMenu"
    >
        <Icon size="30" name="material-symbols:menu-rounded" />
    </div>
    <div
        class="mobile-menu-container"
        :class="{
            active: showMobileMenu,
        }"
        style="z-index: 99999"
    >
        <a class="p-2" href="#about" @click="toggleMobileMenu"> About </a>
        <a class="p-2" href="#experience" @click="toggleMobileMenu">
            Experience
        </a>
        <a class="p-2" href="#projects" @click="toggleMobileMenu"> Projects </a>
        <div
            class="p-2"
            @click="
                toggleMobileMenu();
                $router.push('/blog');
            "
        >
            Blog
        </div>
    </div>
</template>
<style lang="scss" scoped>
.mobile-menu-container {
    @apply fixed opacity-0 transition-all h-0 w-0 top-5 right-5;

    a,
    div {
        @apply hidden;
    }

    &.active {
        @apply fixed top-28 bg-slate-900 p-2 rounded-lg shadow-md flex flex-col justify-center items-center opacity-100 w-[300px] h-[250px];

        a,
        div {
            @apply block;
        }
    }
}
</style>
