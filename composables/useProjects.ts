export default function () {
    return useState("projects", () => [
        {
            name: "Believers Sword",
            description:
                "A Bible Reading App for Believers who likes to study the Bible.",
            url: "https://www.believersword.com/",
            img: "/img/work/believers-sword.png",
            tech: ["VueJs", "JavaScript", "UnoCSS", "TailwindCss", "Electron"],
            ariaLabel: "Believers Sword (opens in a new tab)",
        },
        {
            name: "Fams Tree",
            description:
                "Create Family tree for preserving heritage, and connecting family.",
            url: "https://fam-tree.brojenuel.com/",
            img: "/img/work/fams-tree.png",
            tech: ["VueJs", "TailwindCss"],
            ariaLabel: "Fams Tree (opens in a new tab)",
        },
        {
            name: "Facebook Clone",
            description:
                "Facebook clone template for your next social media project.",
            url: "https://facebook-clone-nu-ecru.vercel.app/",
            shop: "https://www.buymeacoffee.com/brojenuel/e/165281",
            img: "/img/work/facebook-clone.png",
            tech: ["VueJs", "UnoCSS", "BroJenuel API"],
            ariaLabel: "Facebook Clone (opens in a new tab)",
        },
        {
            name: "Laravel MongoDB Docs",
            description:
                "This package adds functionalities to the Eloquent model and Query builder for MongoDB, using the original Laravel API. This library extends the original Laravel classes, so it uses exactly the same methods.",
            url: "https://laravel-mongodb.vercel.app",
            img: "/img/work/laravel mongodb.png",
            tech: ["VitePress"],
            ariaLabel: "Laravel MongoDB Docs (opens in a new tab)",
        },
        {
            name: "Portfolio Website",
            description:
                "A Portfolio website for Kate Awisan as a Data Entry Freelance, Customer Service Associate, Social Media Assistant, And Data Entry Role.",
            url: "https://kateawisan.netlify.app",
            img: "/img/work/kate portfolio.png",
            tech: ["VueJs", "SCSS"],
            ariaLabel: "Portfolio Website (opens in a new tab)",
        },
        {
            name: "GIF Search Engine",
            description: "Search The GIF in the internet using GIF search.",
            url: "https://gif-find.netlify.app",
            img: "/img/work/gif search.png",
            tech: ["VueJs", "GIF API"],
            ariaLabel: "GIF Search Engine (opens in a new tab)",
        },
    ]);
}
