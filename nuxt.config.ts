// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "nuxt-icon"],
    app: {
        head: {
            link: [
                { rel: "preconnect", href: "https://rsms.me/" },
                { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
            ],
        },
    },
    css: ["@/assets/styles/main.scss"],
});
