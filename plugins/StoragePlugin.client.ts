export default defineNuxtPlugin((nuxtApp) => {
    const Storage = useStorage();
    return {
        provide: {
            Storage,
        },
    };
});
