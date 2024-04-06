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
</style>
