export default defineNuxtConfig({
    ssr: true,
    modules: [
        "@pinia/nuxt",
        "nuxt-icon",
        "@nuxtjs/color-mode",
        "@vueuse/nuxt",
        "nuxt-windicss",
        "@nuxtjs/supabase",
        "nuxt-og-image",
    ],
    colorMode: {
        preference: "dark",
        classSuffix: "",
        fallback: "dark",
        storageKey: "brojenuel-color-mode",
    },
    routeRules: {
        "/*": { cors: true },
    },
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://brojenuel.com",
        },
    },
    css: ["@/assets/style/main.scss", "highlight.js/scss/agate.scss"],
    app: {
        head: {
            link: [
                {
                    rel: "icon",
                    type: "image/png",
                    href: "/img/icons/favicon-32x32.png",
                },
            ],
        },
    },
});
