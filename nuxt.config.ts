// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["@nuxt/content", "nuxt-windicss"],
    css: ["@/assets/styles/main.scss"],
    nitro: {
        prerender: {
            routes: ["/sitemap.xml", "/rss.xml"],
        },
    },
    content: {
        highlight: {
            theme: "one-dark-pro",
        },
    },
});
