<script setup lang="ts">
interface TechItem {
    name: string;
    link?: string;
    icon: string;
}

interface ExperienceItem {
    from: string | number;
    to: string | number;
    company: string;
    position: string;
    subPosition?: string[];
    link: string;
    linkAreaLabel: string;
    description: Array<string>;
    techs: TechItem[];
}

const experiences: ExperienceItem[] = [
    {
        from: 2021,
        to: "Present",
        company: "VOCPhone",
        position: "Senior Software Engineer",
        description: [
            "Implementation of programs aligned with user stories, ensuring successful project completion.",
            "Leveraged expertise in Laravel, JavaScript (ES6+), Vue.js (2 & 3), TypeScript, SASS, C#, HTML, CSS, Node.js, and Python (AI) to design and deliver functional, optimized solutions.",
        ],
        link: "https://www.vocphone.com/",
        linkAreaLabel: "Software Engineer at VOCPhone (opens in a new tab)",
        // subPosition: ["Software Developer", "Lead Software Engineer"],
        techs: [
            {
                name: "PHP",
                icon: "logos:php",
            },
            {
                name: "PWA",
                icon: "logos:pwa",
            },
            {
                name: "nodejs",
                icon: "logos:nodejs-icon",
            },
            {
                name: "Laravel",
                icon: "logos:laravel",
            },
            {
                name: "TypeScript",
                icon: "logos:typescript-icon",
            },
            {
                name: "SASS",
                icon: "logos:sass",
            },
            {
                name: "JavaScript",
                icon: "logos:javascript",
            },
            {
                name: "Vue",
                icon: "logos:vue",
            },
            {
                name: "Tailwind",
                icon: "logos:tailwindcss-icon",
            },
            {
                name: "C#",
                icon: "logos:c-sharp",
            },
            {
                name: "Python",
                icon: "logos:python",
            },
            {
                name: "HTML",
                icon: "logos:html-5",
            },
        ],
    },
    {
        company: "Webinarinc",
        position: "Software Developer",
        from: 2021,
        to: 2021,
        description: [
            "Maintained and improved large-scale systems and projects, covering both front-end (Vue.js, JavaScript, TypeScript, SASS, HTML, CSS) and back-end (Laravel) development.",
            "Built and delivered web applications and websites using technologies like Laravel, Vue.js, JavaScript, TypeScript, SASS, HTML, and CSS.",
        ],
        link: "https://www.linkedin.com/company/revdojo/",
        linkAreaLabel: "Software Developer at Webinarinc (opens in a new tab)",
        techs: [
            {
                name: "Laravel",
                icon: "logos:laravel",
            },
            {
                name: "Vue",
                icon: "logos:vue",
            },
            {
                name: "JavaScript",
                icon: "logos:javascript",
            },
            {
                name: "TypeScript",
                icon: "logos:typescript-icon",
            },
            {
                name: "SASS",
                icon: "logos:sass",
            },
            {
                name: "HTML",
                icon: "logos:html-5",
            },
            {
                name: "CSS",
                icon: "logos:css-3",
            },
        ],
    },
    {
        from: 2019,
        to: 2021,
        company: "UTalk Philippines",
        position: "Software Developer",
        description: [
            "Maintain systems and services to reduce system errors and bugs",
            "Manage both front-end and back-end programs",
            "Work with various frameworks and tools including Vue.js, AngularIO, Codeigniter, Lumen/Laravel, and Ruby on Rails",
            "Utilize MySQL and Mongo Database for database management",
        ],
        link: "https://utalk.ph/",
        linkAreaLabel:
            "Software Developer at UTalk Philippines (opens in a new tab)",
        techs: [
            {
                name: "Laravel",
                icon: "logos:laravel",
            },
            {
                name: "Vue",
                icon: "logos:vue",
            },
            {
                name: "JavaScript",
                icon: "logos:javascript",
            },
            {
                name: "AngularIO",
                icon: "logos:angular-icon",
            },
            {
                name: "Codeigniter",
                icon: "logos:codeigniter",
            },
            {
                name: "MySQL",
                icon: "logos:mysql",
            },
            {
                name: "Ruby on Rails",
                icon: "logos:ruby",
            },
        ],
    },
    {
        from: 2018,
        to: 2019,
        company: "Dap-ayan Eatery La Trinidad",
        position: "Web Developer",
        description: [
            "Focus on maintaining systems and services to minimize errors and bugs",
            "Proficient in managing and creating front-end and back-end code",
            "Experienced with various frameworks and tools such as Vue.js, AngularIO, Codeigniter, Lumen/Laravel, and Ruby on Rails",
            "Skilled in database management using MySQL and MongoDB",
            "Ensure smooth and efficient functioning of applications and systems by leveraging these technologies",
        ],
        link: "https://www.facebook.com/profile.php?id=100057698281360",
        linkAreaLabel:
            "Web Developer at Dap-ayan Eatery La Trinidad (opens in a new tab)",
        techs: [
            {
                name: "Codeigniter",
                icon: "logos:codeigniter",
            },
            {
                name: "JavaScript",
                icon: "logos:javascript",
            },
            {
                name: "MySQL",
                icon: "logos:mysql",
            },
            {
                name: "PHP",
                icon: "logos:php",
            },
            {
                name: "Vue",
                icon: "logos:vue",
            },
        ],
    },
    {
        from: 2018,
        to: 2028,
        company: "ILearn Skills Development Academy",
        position: "Designer and Web Developer",
        description: [
            "Actively involved in design-oriented work, focusing on magazine designs and layouts using Photoshop and Illustrator",
            "Proficient in video editing with Adobe Premiere",
            "Specialize in web programming, particularly algorithm development using JavaScript and PHP",
            "Combine design and programming skills to create visually appealing designs and seamless web experiences",
        ],
        link: "https://www.ilearnskills.com/",
        linkAreaLabel:
            "Designer and Web Developer at Ilearn Skills Development Academy (opens in a new tab)",
        techs: [
            {
                name: "PHP",
                icon: "logos:php",
            },
            {
                name: "JavaScript",
                icon: "logos:javascript",
            },
            {
                name: "HTML",
                icon: "logos:html-5",
            },
            {
                name: "CSS",
                icon: "logos:css-3",
            },
            {
                name: "WordPress",
                icon: "skill-icons:wordpress",
            },
            {
                name: "Photoshop",
                icon: "logos:adobe-photoshop",
            },
        ],
    },
];
</script>
<template>
    <section
        class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Work experience"
    >
        <div
            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gray-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
        >
            <h2
                class="text-sm font-bold uppercase tracking-widest text-gray-200 lg:sr-only"
            >
                Experience
            </h2>
        </div>
        <div>
            <ol class="group/list">
                <li v-for="experience in experiences" class="mb-12 group">
                    <div
                        class="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                    >
                        <div
                            class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                        ></div>
                        <header
                            class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-300 sm:col-span-2"
                            aria-label="2018 to 2024"
                        >
                            {{ experience.from }} — {{ experience.to }}
                        </header>
                        <div class="z-10 sm:col-span-6">
                            <h3 class="font-medium leading-snug text-gray-200">
                                <div>
                                    <a
                                        class="inline-flex items-baseline font-medium leading-tight text-gray-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                        :href="experience.link"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label="Lead Engineer at Upstatement (opens in a new tab)"
                                    >
                                        <span
                                            class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                                        >
                                        </span>
                                        <span>
                                            {{ experience.position }} ·
                                            <span class="inline-block">
                                                {{ experience.company }}
                                                <Icon
                                                    name="ic:baseline-arrow-outward"
                                                />
                                            </span>
                                        </span>
                                    </a>
                                </div>
                                <div v-if="experience.subPosition">
                                    <div
                                        v-for="subPosition in experience.subPosition"
                                        class="text-gray-300 font-thin"
                                        aria-hidden="true"
                                    >
                                        {{ subPosition }}
                                    </div>
                                </div>
                            </h3>
                            <div>
                                <ul
                                    class="list-disc mt-2 text-sm leading-normal pl-5"
                                >
                                    <li
                                        v-for="desPoint in experience.description"
                                    >
                                        {{ desPoint }}
                                    </li>
                                </ul>
                            </div>
                            <ul
                                class="mt-2 flex flex-wrap gap-2"
                                aria-label="Technologies used"
                            >
                                <li v-for="tech in experience.techs">
                                    <div
                                        class="whitespace-nowrap w-full transition-all duration-75 bg-gray-800 px-2 py-1 rounded-md transform hover:scale-105 cursor-pointer flex items-center text-[var(--color)]"
                                    >
                                        <Icon :name="tech.icon" />
                                        <span class="ml-2 text-sm">
                                            {{ tech.name }}
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ol>
            <div class="mt-12">
                <a
                    class="inline-flex items-baseline font-medium leading-tight hover:text-teal-300 focus-visible:text-teal-300 text-gray-200 group/link text-base"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="View Full Resume (opens in a new tab)"
                >
                    <span>
                        View
                        <span class="inline-block">
                            Resume
                            <Icon name="ic:baseline-arrow-outward" />
                        </span>
                    </span>
                </a>
            </div>
        </div>
    </section>
</template>
