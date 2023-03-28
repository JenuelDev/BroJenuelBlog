import VueDisqus from "vue-disqus";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueDisqus, {
        shortname: "brojenuel",
    });
});