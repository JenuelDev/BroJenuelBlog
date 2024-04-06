<template>
    <NuxtPage />
</template>

<style lang="scss">
/* CSS */
:root {
    font-family: Inter, sans-serif;
    font-feature-settings: "liga" 1, "calt" 1; /* fix for Chrome */
}

* {
    scroll-behavior: smooth;
}

@supports (font-variation-settings: normal) {
    :root {
        font-family: InterVariable, sans-serif;
    }
}

body {
    @apply bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900;
}

.jum-link-item.active {
    .nav-indicator {
        @apply w-16 bg-slate-200;
    }

    .nav-text {
        @apply text-slate-200;
    }
}
</style>
