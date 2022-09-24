// import { serverQueryContent } from "#content/server";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["@nuxt/content", "nuxt-windicss", "@nuxtjs/feed"],
    css: ["@/assets/styles/main.scss"],
    nitro: {
        prerender: {
            routes: ["/sitemap.xml"],
        },
    },
    content: {
        highlight: {
            theme: "one-dark-pro",
        },
    },
    feed() {
        // const articles = await

        const { $content } = require("@nuxt/content");

        const createFeedArticles = async function () {
            // const docs = await serverQueryContent().find();
            // console.log(docs);
        };

        createFeedArticles();

        return [
            {
                path: "/feed.xml", // The route to your feed.
                async create(feed) {}, // The create function (see below)
                cacheTime: 1000 * 60 * 15, // How long should the feed be cached
                type: "rss2", // Can be: rss2, atom1, json1
                data: ["Some additional data"], // Will be passed as 2nd argument to `create` function
            },
        ];
    },
});
