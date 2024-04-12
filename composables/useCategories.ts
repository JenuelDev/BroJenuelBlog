export const framework_categories = [
    {
        key: "VueJs",
        icon: "icon--logos icon--logos--vue",
        label: "Vue JS",
    },
    {
        key: "ReactJs",
        icon: "icon--ri icon--ri--reactjs-line",
        label: "React JS",
    },
    {
        key: "Angular",
        icon: "icon--devicon icon--devicon--angular",
        label: "Angular",
    },
    {
        key: "Laravel",
        icon: "icon--devicon icon--devicon--laravel",
        label: "Laravel",
    },
    {
        key: "Electron",
        icon: "icon--skill-icons icon--skill-icons--electron",
        label: "Electron",
    },
    {
        key: "DJango",
        icon: "icon--skill-icons icon--skill-icons--django",
        label: "DJango",
    },
    {
        key: "NextJs",
        icon: "icon--skill-icons icon--skill-icons--nextjs-dark",
        label: "Next JS",
    },
    {
        key: "NuxtJs",
        icon: "icon--skill-icons icon--skill-icons--nuxtjs-dark",
        label: "Nuxt JS",
    },
];

export const other_categories = [
    {
        key: "Earn",
        icon: "icon--solar icon--solar--money-bag-bold",
        label: "Earn/Earn Online",
    },
    {
        key: "AI",
        icon: "icon--solar icon--solar--cpu-bolt-broken",
        label: "AI",
    },
    {
        key: "Health",
        icon: "icon--solar icon--solar--adhesive-plaster-bold",
        label: "Health",
    },
    {
        key: "Finance",
        icon: "icon--solar icon--solar--dollar-bold",
        label: "Finance",
    },
    {
        key: "Business",
        icon: "icon--solar icon--solar--chart-square-bold",
        label: "Business",
    },
    {
        key: "Software",
        icon: "icon--solar icon--solar--screencast-2-bold",
        label: "Software",
    },
    {
        key: "Productivity",
        icon: "icon--solar icon--solar--ranking-bold-duotone",
        label: "Productivity",
    },
    {
        key: "Programming",
        icon: "icon--solar icon--solar--code-square-bold",
        label: "Programming",
    },
    {
        key: "Parenting",
        icon: "icon--raphael icon--raphael--parent",
        label: "Parenting",
    },
    {
        key: "Website",
        icon: "icon--solar icon--solar--window-frame-bold-duotone",
        label: "Website",
    },
    {
        key: "Motivation",
        icon: "icon--solar icon--solar--meditation-round-bold",
        label: "Motivation",
    },
    {
        key: "Story",
        icon: "icon--solar icon--solar--chat-round-like-bold",
        label: "Story",
    },
    {
        key: "Inspiration",
        icon: "icon--solar icon--solar--ranking-bold-duotone",
        label: "Inspiration",
    },
];

export const tool_categories = [
    {
        key: "JavaScript",
        icon: "icon--skill-icons icon--skill-icons--javascript",
        label: "JavaScript",
    },
    {
        key: "HTML",
        icon: "icon--skill-icons icon--skill-icons--html",
        label: "HTML",
    },
    {
        key: "CSS",
        icon: "icon--skill-icons icon--skill-icons--css",
        label: "CSS",
    },
    {
        key: "PHP",
        icon: "icon--skill-icons icon--skill-icons--php-dark",
        label: "PHP",
    },
    {
        key: "Python",
        icon: "icon--skill-icons icon--skill-icons--python-dark",
        label: "Python",
    },
    {
        key: "Ruby",
        icon: "icon--skill-icons icon--skill-icons--ruby",
        label: "Ruby",
    },
    {
        key: "Java",
        icon: "icon--skill-icons icon--skill-icons--java-dark",
        label: "Java",
    },
    {
        key: "Go",
        icon: "icon--skill-icons icon--skill-icons--golang",
        label: "Go",
    },
];

export default function () {
    return {
        frameworks: framework_categories.sort((a, b) =>
            a.label.localeCompare(b.label)
        ),
        ToolCategories: tool_categories.sort((a, b) =>
            a.label.localeCompare(b.label)
        ),
        otherCategories: other_categories.sort((a, b) =>
            a.label.localeCompare(b.label)
        ),
    };
}
