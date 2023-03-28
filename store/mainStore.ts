import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", () => {
    const isIntroSocialLinkShowing = ref(true);
    const mySocial = ref([
        {
            title: "Facebook",
            icon: "mdi:facebook-box",
            url: "https://www.facebook.com/broJenuel/",
            ariaLabel: "Check BroJenuel Facebook",
            isNuxtLink: false,
        },
        {
            title: "Youtube",
            icon: "mdi:youtube",
            url: "https://www.youtube.com/@brojenuel",
            ariaLabel: "Check BroJenuel Youtube",
            isNuxtLink: false,
        },
        {
            title: "LinkedIn",
            icon: "pajamas:linkedin",
            url: "https://www.linkedin.com/in/jenuelganawed/",
            ariaLabel: "Check BroJenuel LinkedIn",
            isNuxtLink: false,
        },
        {
            title: "Dev.to",
            icon: "mdi:dev-to",
            url: "https://dev.to/brojenuel",
            ariaLabel: "Check BroJenuel Dev",
            isNuxtLink: false,
        },
        {
            title: "Instagram",
            url: "https://www.instagram.com/brojenuel/",
            icon: "mdi:instagram",
            ariaLabel: "Check BroJenuel Instagram",
            isNuxtLink: false,
        },
        {
            title: "Contact Me",
            url: "/contact",
            icon: "mdi:gmail",
            ariaLabel: "Check BroJenuel Instagram",
            isNuxtLink: true,
        },
    ]);

    return {
        mySocial,
        isIntroSocialLinkShowing,
    };
});
