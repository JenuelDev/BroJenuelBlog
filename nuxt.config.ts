// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss"],
    app: {
        head: {
            link: [
                { rel: "preconnect", href: "https://rsms.me/" },
                { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
            ],
        },
    },
});
