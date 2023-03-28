<script setup lang="ts">
const show = ref(false);
const dropdownRef = ref(null);
const route = useRoute();
const menus = [
    {
        path: "/",
        icon: "ic:twotone-web",
        label: "Home",
    },
    {
        path: "/#skills-container",
        icon: "fluent:brain-circuit-20-filled",
        label: "Skills",
    },
    {
        path: "/timeline",
        icon: "mdi:chart-timeline",
        label: "Time Line",
    },
    {
        path: "/#what-i-offer",
        icon: "mdi:offer",
        label: "What I Can Offer",
    },
    {
        path: "/blog",
        icon: "fluent-mdl2:blog",
        label: "Blog",
    },
    {
        path: "/my-work",
        icon: "pajamas:project",
        label: "My Work",
    },
    {
        path: "/contact",
        icon: "mdi:gmail",
        label: "Contact Me",
    },
];

onClickOutside(dropdownRef, () => (show.value = show.value == true ? false : false));
</script>
<template>
    <div ref="dropdownRef" class="relative inline-block text-left">
        <button @click="show = !show" type="button" class="btn bg-[var(--background-secondary)] px-5px h-25px rounded-md" role="button" title="Menu Button" id="menu-button">
            <Icon name="mingcute:menu-fill" />
            Menu
        </button>
        <Transition name="dropdown">
            <div
                v-show="show"
                class="dropdown-menu absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[var(--background)] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-99"
            >
                <div class="py-1" role="none">
                    <NuxtLink
                        v-for="menu in menus"
                        :key="menu.path"
                        @click="show = false"
                        :href="menu.path"
                        class="block px-4 py-2 text-sm hover:bg-[var(--background-secondary)] flex items-center gap-6px"
                        :class="{ '!text-[var(--primary)]': route.path == menu.path }"
                    >
                        <Icon class="text-size-20px" :name="menu.icon" />
                        {{ menu.label }}
                    </NuxtLink>
                </div>
            </div>
        </Transition>
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

.dropdown-menu {
    a {
        position: relative;
        color: var(--color);

        &:before {
            content: "";
            height: 2px;
            position: absolute;
            bottom: 0;
            width: 0;
            background-color: var(--primary);
            transition: all 0.3s;
        }

        &:hover {
            color: var(--primary);

            &::before {
                width: 80%;
            }
        }
    }
}
</style>
