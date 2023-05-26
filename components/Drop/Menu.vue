<script setup lang="ts">
type MenuTypeItem = { label: string; key: string; icon: string };
type MenuTYPE = Array<MenuTypeItem>;

const showMenu = ref(false);
const dropdownRef = ref(null);
const emit = defineEmits(["change", "update:modelValue"]);
const props = defineProps(["menuOptions", "label", "modelValue"]);
const valueKey = ref<string | null>(null);
const menus: MenuTYPE = props.menuOptions;
const LABEL = computed(() => {
    const findIndex = menus.findIndex((menu) => menu.key == valueKey.value);
    if (findIndex > -1) return menus[findIndex].label;
    return null;
});

onMounted(() => {
    if (props.modelValue) valueKey.value = props.modelValue;
});

function selectKey(menu: MenuTypeItem) {
    const url = window.location.href;
    const r = new URL(url);

    showMenu.value = false;
    if (valueKey.value != menu.key) {
        r.searchParams.delete("cat");
        r.searchParams.append("cat", menu.key);
        valueKey.value = menu.key;
    } else {
        r.searchParams.delete("cat");
        valueKey.value = null;
    }

    const newUrl = r.href;
    console.log(history.state);
    window.history.pushState(
        {
            current: `/blog?cat=${menu.key}`,
        },
        "",
        newUrl
    );
    emit("update:modelValue", valueKey.value);
    // window.location.href = `/blog?cat=${valueKey.value}`;
}
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
            <span>{{ valueKey ? LABEL : label ?? "Label" }}</span>
            <Icon class="transition-all" :class="{ 'transform rotate-90': showMenu }" name="ic:outline-play-arrow" />
        </div>

        <Transition name="drop-menu">
            <div
                v-show="showMenu"
                class="dropdown-menu absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[var(--background)] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-99 select-none"
            >
                <div class="py-1" role="none">
                    <div
                        v-for="menu in menus"
                        :key="menu.key"
                        @click="selectKey(menu)"
                        class="block px-4 py-2 text-sm hover:bg-[var(--background-secondary)] flex items-center justify-between cursor-pointer"
                        :class="{ '!text-[var(--primary)]': valueKey == menu.key }"
                    >
                        <span class="flex items-center gap-6px">
                            <Icon class="text-size-20px" :name="menu.icon" /> {{ menu.label }}
                        </span>
                        <Icon v-if="valueKey == menu.key" name="material-symbols:cancel" />
                    </div>
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
