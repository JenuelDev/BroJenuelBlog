<script setup lang="ts">
const showMenu = ref(false);
const dropdownRef = ref(null);
const route = useRoute();

const props = defineProps(["menuOptions", "label"]);
const menus: Array<{ label: string; path: string; icon: string }> = props.menuOptions;
onClickOutside(dropdownRef, () => (showMenu.value = showMenu.value == true ? false : false));
</script>
<template>
    <div ref="dropdownRef" class="relative inline-block text-left">
        <div
            type="button"
            class="flex items-center gap-5px cursor-pointer hover:underline select-none"
            @click="showMenu = !showMenu"
            :class="{ 'text-[var(--primary)]': showMenu }"
        >
            <span>{{ label ?? "Label" }}</span>
            <Icon class="transition-all" :class="{ 'transform rotate-90': showMenu }" name="ic:outline-play-arrow" />
        </div>

        <Transition name="drop-menu">
            <div
                v-show="showMenu"
                class="dropdown-menu absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[var(--background)] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-99 select-none"
            >
                <div class="py-1" role="none">
                    <a
                        v-for="menu in menus"
                        :key="menu.path"
                        @click="showMenu = false"
                        :href="menu.path"
                        class="block px-4 py-2 text-sm hover:bg-[var(--background-secondary)] flex items-center gap-6px"
                        :class="{ '!text-[var(--primary)]': route.path == menu.path }"
                    >
                        <Icon class="text-size-20px" :name="menu.icon" />
                        {{ menu.label }}
                    </a>
                </div>
            </div>
        </Transition>
    </div>
</template>
<style lang="scss">
.drop-menu-enter-active {
    transition: all 0.2s ease-out;
}

.drop-menu-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.drop-menu-enter-from,
.drop-menu-leave-to {
    transform: translate(10px, -10px);
    opacity: 0;
}
</style>
