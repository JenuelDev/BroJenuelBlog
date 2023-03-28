const works = [
    {
        title: "Believers Sword",
        description:
            "This is a simple bible reading application that gives basic functionality. I am waiting for anyone who wants to own this project, and I am willing to work with you.",
        techs: ["electron", "electron.builder", "Vue3", "windiCss", "naive-ui"],
        img: "https://i.imgur.com/HOGyZ7ql.png",
        date: "2023-02-17",
        logo: "https://believers-sword.brojenuel.com/_nuxt/believers-sword.7fcefc1c.svg",
        url: "/blog/Believers-Sword",
        url_new_tab: false,
    },
    {
        overline: "Documentation Project",
        title: "Laravel MongoDB Docs",
        description:
            "A Documentation website for Laravel MongoDB, a package that you can use to easily connect your laravel project to mongodb.",
        techs: ["vitepress", "vue"],
        img: "https://i.imgur.com/joyBgJBl.png",
        date: "2023-02-17",
        logo: "https://laravel-mongo-docs.ml/assets/img/logo.png",
        url: "https://laravel-mongodb.vercel.app",
        url_new_tab: true,
    },
    {
        overline: "Portfolio Website",
        title: "Portfolio Website",
        description:
            "Created a simple but cool looking portfolio website for my wife. I used pure VueJS to create the website and hosted it on netlify.",
        techs: ["vue", "javascript"],
        img: "https://i.imgur.com/RwAoRLyl.png",
        date: "2023-02-17",
        logo: "https://kateawisan.netlify.app/img/profile-img.d44572f5.jpg",
        url: "https://kateawisan.netlify.app/",
        url_new_tab: true,
    },
    {
        overline: "Search Engine Project",
        title: "Get GIF's",
        description: "Search the wide internet to get GIFs that you can download",
        techs: ["vue", "API", "javascript"],
        img: "gif-search.webp",
        date: "2023-02-17",
        logo: "https://www.getgifs.ml/img/gif.ea9d2c5a.png",
        url: "https://www.getgifs.ml/",
        url_new_tab: true,
    },
    {
        overline: "Personal Website ",
        title: "Portfolio Final Version",
        description:
            "I created a new portfolio website, and it is being served as an SSR for good SEO. I added blogs for publishing my articles.",
        techs: ["vue", "Nuxt", "javascript", "SSR", "SupaBase", "Disqus"],
        img: "https://i.imgur.com/dynz10Bl.png",
        date: "2023-02-17",
        logo: "https://i.imgur.com/3iN1kQym.jpg",
        url: "https://BroJenuel.com",
        url_new_tab: false,
    },
    {
        overline: "Personal Website",
        title: "Portfolio Version 1.**",
        description:
            "Created My Very First Portfolio Website. It looks cool but the performance is too much. I also used google blogSpot API to set my blogs. But my I removed my blogSpot so its not working anymore. But I was able to learn something from it.",
        techs: ["vue", "javascript"],
        img: "https://i.imgur.com/tVN4aOVl.png",
        date: "2017-12-01",
        logo: "https://i.imgur.com/3iN1kQym.jpg",
        url: "https://jenuelganawed-v1.netlify.app/#/challenge",
        url_new_tab: true,
    },
];

export const useWorks = (limit: "all" | number = "all") => {
    if (limit == "all") return works;
    else return works.slice(0, limit);
};
