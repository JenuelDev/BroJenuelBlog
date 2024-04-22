export default defineNuxtConfig({
    ssr: true,
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "@vueuse/nuxt",
        "nuxt-icon",
        "@nuxt/image",
        "@nuxtjs/supabase",
        "nuxt-og-image",
    ],
    routeRules: {
        "/*": { cors: true },
    },
    app: {
        head: {
            title: "Jenuel Ganawed - Software Engineer",
            link: [
                { rel: "preconnect", href: "https://rsms.me/" },
                { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
            ],
            meta: [
                {
                    name: "google-adsense-account",
                    content: "ca-pub-2268807726840190",
                },
            ],
        },
    },
    css: ["@/assets/styles/main.scss"],
    supabase: {
        redirectOptions: {
            login: "/login",
            callback: "/confirm",
            include: ["/admin(/*)?"],
        },
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => ["ins"].includes(tag),
        },
    },
    runtimeConfig: {
        public: {
            siteUrl:
                process.env.NUXT_PUBLIC_SITE_URL || "https://brojenuel.com",
            isDevelopment: process.env.IS_DEVELOPMENT == "TRUE",
            emailJsServiceId: process.env.EMAILJS_SERVICE_ID,
            emailJsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
            emailJsUserId: process.env.EMAILJS_USER_ID,
        },
    },
    tailwindcss: {
        configPath: "tailwind.config",
        exposeConfig: {
            level: 2,
        },
        config: {},
        viewer: true,
    },
});
