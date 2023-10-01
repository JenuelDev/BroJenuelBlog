import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", () => {
    const mySocial = ref([
        {
            title: "Facebook",
            icon: "icon--la icon--la--facebook",
            url: "https://www.facebook.com/broJenuelofficial/",
            ariaLabel: "Check BroJenuel Facebook",
            isNuxtLink: false,
        },
        {
            title: "Youtube",
            icon: "icon--la icon--la--youtube",
            url: "https://www.youtube.com/@brojenuel",
            ariaLabel: "Check BroJenuel Youtube",
            isNuxtLink: false,
        },
        {
            title: "LinkedIn",
            icon: "icon--la icon--la--linkedin",
            url: "https://www.linkedin.com/in/jenuelganawed/",
            ariaLabel: "Check BroJenuel LinkedIn",
            isNuxtLink: false,
        },
        {
            title: "Dev.to",
            icon: "icon--la icon--la--dev",
            url: "https://dev.to/brojenuel",
            ariaLabel: "Check BroJenuel Dev",
            isNuxtLink: false,
        },
        {
            title: "Instagram",
            url: "https://www.instagram.com/brojenuel/",
            icon: "icon--la icon--la--instagram",
            ariaLabel: "Check BroJenuel Instagram",
            isNuxtLink: false,
        },
        // {
        //     title: "Contact Me",
        //     url: "/contact",
        //     icon: "icon--mdi icon--mdi--gmail",
        //     ariaLabel: "Check BroJenuel Instagram",
        //     isNuxtLink: true,
        // },
        // {
        //     title: "Resume",
        //     url: "/cv",
        //     icon: "icon--solar icon--solar--documents-line-duotone",
        //     ariaLabel: "Check BroJenuel Resume",
        //     isNuxtLink: true,
        // },
    ]);

    return {
        mySocial,
    };
});
