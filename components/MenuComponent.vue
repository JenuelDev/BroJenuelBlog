<script setup lang="ts">
const show = ref(false);
const dropdownRef = ref(null);
const route = useRoute();

const menus = [
    {
        path: "/",
        icon: "teenyicons:home-solid",
        label: "Home",
        name: "home",
    },
    {
        path: "/timeline",
        icon: "mdi:timeline-clock-outline",
        label: "Experience",
        name: "timeline",
    },
    {
        path: "/blog",
        icon: "fluent-mdl2:blog",
        label: "Articles",
        name: "blog",
    },
    {
        path: "/my-work",
        icon: "pajamas:project",
        label: "Projects",
        name: "my-work",
    },
    {
        path: "/contact",
        icon: "mdi:mail",
        label: "Contact Me",
        name: "contact",
    },
    {
        path: "https://www.buymeacoffee.com/BroJenuel/extras",
        label: "Shop",
        name: "shop",
        icon: "solar:shop-bold",
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
            class="block px-1 py-1 text-sm hover:bg-[var(--background-secondary)] flex items-center gap-6px"
            :class="{
                '!text-[var(--primary)] is-active':
                    route.path == menu.path || route.name?.toString().includes(menu.name),
            }"
        >
            <Icon class="text-size-20px" :name="menu.icon" />
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
            <Icon name="solar:list-linear" />
        </div>
        <div class="dropdown-menu-mobile" :class="{ 'active-menu': show }">
            <div class="py-1 h-full z-999 relative bg-[var(--background)] pt-30px px-5" role="none">
                <div class="absolute right-3 top-3" @click="show = false">
                    <Icon class="text-size-30px" name="mdi:close" />
                </div>
                <NuxtLink
                    v-for="menu in menus"
                    :key="menu.path"
                    @click="show = false"
                    :href="menu.path"
                    class="block px-4 lg:py-2 py-4 text-sm hover:bg-[var(--background-secondary)] flex items-center gap-6px"
                    :class="{ '!text-[var(--primary)] is-active': route.path == menu.path }"
                    :target="menu.name?.toString().includes('shop') ? '_blank' : '_self'"
                >
                    <Icon class="text-size-30px" :name="menu.icon" />
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

        &:before {
            content: "";
            height: 2px;
            position: absolute;
            bottom: 0;
            width: 0;
            left: 50%;
            background-color: var(--primary);
            transition: all 0.3s;
        }

        &:hover {
            color: var(--primary);

            &::before {
                left: 0;
                width: 100%;
            }
        }
    }

    .is-active {
        &:before {
            width: 100%;
            left: 0;
        }
    }
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
