<template>
    <div
        class="fixed top-0 left-0 flex justify-between md:px-20px px-10px items-center transition-all dark:bg-[var(--opacity-background)] z-999 duration-300 w-full h-50px dark:shadow-md shadow-lg backdrop-filter backdrop-blur-sm bg-[var(--background)] no-print"
    >
        <div class="w-full mx-auto flex justify-between items-center">
            <NuxtLink href="/" class="flex items-center">
                <IconLaptop class="mr-7px" />
                <div>
                    <span>Bro</span>
                    <span class="text-[var(--primary)] font-800">Jenuel</span>
                </div>
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
