export default defineNuxtConfig({
    ssr: true,
    modules: [
        "@nuxtjs/color-mode",
        "@vueuse/nuxt",
        "nuxt-windicss",
        "@nuxtjs/supabase",
        "nuxt-og-image",
        "@nuxt/image",
        "nuxt-icon",
    ],
    colorMode: {
        preference: "light",
        classSuffix: "",
        fallback: "light",
        storageKey: "brojenuel-color-mode",
    },
    routeRules: {
        "/*": { cors: true },
    },
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://brojenuel.com",
            isDevelopment: process.env.IS_DEVELOPMENT == "TRUE",
            emailJsServiceId: process.env.EMAILJS_SERVICE_ID,
            emailJsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
            emailJsUserId: process.env.EMAILJS_USER_ID,
        },
    },
    css: ["@/assets/style/main.scss"],
    app: {
        head: {
            link: [
                { rel: "apple-touch-icon", sizes: "180x180", href: "/img/icons/apple-touch-icon-180x180.png" },
                { rel: "icon", type: "image/png", sizes: "32x32", href: "/img/icons/favicon-32x32.png" },
                { rel: "icon", type: "image/png", sizes: "16x16", href: "/img/icons/favicon-16x16.png" },
            ],
        },
    },
    image: {
        domains: ["i.imgur.com"],
    },
    devtools: {
        enabled: false,
    },
});
