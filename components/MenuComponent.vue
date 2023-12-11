<script setup lang="ts">
const show = ref(false);
const dropdownRef = ref(null);
const route = useRoute();

const menus = [
    {
        path: "/",
        icon: "icon--solar icon--solar--home-smile-angle-broken",
        label: "Home",
        name: "home",
    },
    {
        path: "/#personal-projects-area",
        icon: "icon--solar icon--solar--sledgehammer-broken",
        label: "Projects",
        name: "projects",
    },
    {
        path: "/blog",
        icon: "icon--solar icon--solar--documents-broken",
        label: "Blog",
        name: "blog",
    },
    {
        path: "/contact",
        icon: "icon--solar icon--solar--mailbox-broken text-25px",
        label: "Contact Me",
        name: "contact",
    },
];

onClickOutside(dropdownRef, () => (show.value = show.value == true ? false : false));
</script>
<template>
    <div class="dropdown-menu lg:flex gap-1 hidden order-1 no-print">
        <NuxtLink
            v-for="menu in menus"
            :key="menu.path"
            @click="show = false"
            :href="menu.path"
            :target="menu.name?.toString().includes('shop') ? '_blank' : '_self'"
            class="block px-2 py-1 flex items-center gap-6px dark:hover:bg-dark-50 hover:bg-gray-300 dark:hover:bg-opacity-30 hover:bg-opacity-30 rounded-full decoration-none"
            :class="{
                'dark:bg-dark-50 bg-gray-300 dark:bg-opacity-50 bg-opacity-50': route.path == menu.path || route.name?.toString().includes(menu.name),
            }"
        >
            {{ menu.label }}
        </NuxtLink>
    </div>
    <div ref="dropdownRef" class="relative inline-block text-left lg:hidden order-3 no-print">
        <div
            @click="show = !show"
            type="button"
            class="h-40px !px-3 rounded-md text-size-35px select-none"
            role="button"
            title="Menu Button"
            id="menu-button"
        >
            <span class="icon--solar icon--solar--list-linear" />
        </div>
        <div class="dropdown-menu-mobile" :class="{ 'active-menu': show }">
            <div class="py-1 h-full z-999 relative bg-[var(--background)] pt-30px px-5" role="none">
                <div class="absolute right-3 top-3" @click="show = false">
                    <span class="icon--mdi icon--mdi--close text-size-30px" />
                </div>
                <NuxtLink
                    v-for="menu in menus"
                    :key="menu.path"
                    @click="show = false"
                    :href="menu.path"
                    class="block px-4 lg:py-2 py-2 hover:bg-[var(--background-secondary)] flex items-center justify-center gap-6px mb-5"
                    :class="{ '!text-[var(--primary)] is-active': route.path == menu.path }"
                    :target="menu.name?.toString().includes('shop') ? '_blank' : '_self'"
                >
                    <span class="text-size-20px" :class="menu.icon" />
                    {{ menu.label }}
                </NuxtLink>
            </div>
            <div class="dropdown-menu-mobile-bd" @click="show = false"></div>
        </div>
    </div>
</template>
<style lang="scss">
.dropdown-menu,
.dropdown-menu-mobile {
    a {
        position: relative;
        color: var(--color);
        text-align: center;

        // &:before {
        //     content: "";
        //     height: 1px;
        //     position: absolute;
        //     bottom: 0;
        //     width: 0;
        //     left: 50%;
        //     background-color: var(--color);
        //     transition: all 0.3s;
        // }

        &:hover {
            &::before {
                width: 40px;
                left: calc(50% - 20px);
            }
        }
    }

    // .is-active {
    //     &:before {
    //         width: 30px;
    //         left: calc(50% - 15px);
    //     }
    // }
}
.dropdown-menu-mobile {
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 430px;
    height: 100vh;
    margin-right: -470px;
    transition: 0.2s;

    .dropdown-menu-mobile-bd {
        content: "";
        z-index: 88;
        position: fixed;
        left: 0;
        top: 0;
        width: 0;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.555);
    }

    &.active-menu {
        margin-right: 0;

        .dropdown-menu-mobile-bd {
            width: 100vw;
        }
    }
}
</style>
