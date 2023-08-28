const frameworks = [
    {
        key: "VueJs",
        icon: "logos:vue",
        label: "Vue JS",
    },
    {
        key: "ReactJs",
        icon: "ri:reactjs-line",
        label: "React JS",
    },
    {
        key: "Angular",
        icon: "ph:angular-logo-fill",
        label: "Angular",
    },
    {
        key: "Laravel",
        icon: "devicon:laravel",
        label: "Laravel",
    },
    {
        key: "Electron",
        icon: "skill-icons:electron",
        label: "Electron",
    },
    {
        key: "DJango",
        icon: "skill-icons:django",
        label: "DJango",
    },
    {
        key: "NextJs",
        icon: "skill-icons:nextjs-dark",
        label: "Next JS",
    },
    {
        key: "NuxtJs",
        icon: "skill-icons:nuxtjs-dark",
        label: "Nuxt JS",
    },
];

const otherCategories = [
    {
        key: "Earn",
        icon: "streamline:money-cash-search-dollar-search-pay-product-currency-query-magnifying-cash-business-money-glass",
        label: "Earn/Earn Online",
    },
    {
        key: "AI",
        icon: "icon-park-outline:reverse-operation-in",
        label: "AI",
    },
    {
        key: "Health",
        icon: "twemoji:red-heart",
        label: "Health",
    },
    {
        key: "Finance",
        icon: "mdi:finance",
        label: "Finance",
    },
    {
        key: "Business",
        icon: "material-symbols:business-center",
        label: "Business",
    },
    {
        key: "Software",
        icon: "material-symbols:app-badging",
        label: "Software",
    },
    {
        key: "Productivity",
        icon: "bi:tools",
        label: "Productivity",
    },
    {
        key: "Programming",
        icon: "solar:programming-bold",
        label: "Programming",
    },
    {
        key: "Parenting",
        icon: "raphael:parent",
        label: "Parenting",
    },
    {
        key: "Website",
        icon: "el:website",
        label: "Website",
    },
    {
        key: "Motivation",
        icon: "academicons:inspire-square",
        label: "Motivation",
    },
    {
        key: "Story",
        icon: "ic:sharp-history-edu",
        label: "Story",
    },
    {
        key: "Inspiration",
        icon: "academicons:inspire",
        label: "Inspiration",
    },
];

const ToolCategories = [
    {
        key: "JavaScript",
        icon: "logos:javascript",
        label: "JavaScript",
    },
    {
        key: "HTML",
        icon: "skill-icons:html",
        label: "HTML",
    },
    {
        key: "CSS",
        icon: "skill-icons:css",
        label: "CSS",
    },
    {
        key: "PHP",
        icon: "logos:php",
        label: "PHP",
    },
    {
        key: "Python",
        icon: "logos:python",
        label: "Python",
    },
    {
        key: "Ruby",
        icon: "logos:ruby",
        label: "Ruby",
    },
    {
        key: "Java",
        icon: "logos:java",
        label: "Java",
    },
    {
        key: "Go",
        icon: "logos:go",
        label: "Go",
    },
];

export default function () {
    return {
        frameworks: frameworks.sort((a, b) => a.label.localeCompare(b.label)),
        ToolCategories: ToolCategories.sort((a, b) => a.label.localeCompare(b.label)),
        otherCategories: otherCategories.sort((a, b) => a.label.localeCompare(b.label)),
    };
}
