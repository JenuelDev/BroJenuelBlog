<script setup lang="ts">
const skills = [
    {
        icon: "skill-icons:javascript",
        tech: "JavaScript/TypeScript",
        description:
            "It's used to create interactive front-end web experiences. It's also used on the server-side through technologies such as Node.js.",
        yearStarted: 2017,
        tools: [
            {
                icon: "logos:vue",
                text: "Vue",
                description: `Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members. <a href="https://vuejs.org/" target="_blank" alt="Go To VueJS">Go To VueJS</a>`,
                link: "https://vuejs.org/",
            },
            {
                icon: "logos:nuxt-icon",
                text: "Nuxt JS",
                description: `Build your next Vue.js application with confidence using NuxtJS. An open source framework making web development simple and powerful. <a href="https://nuxtjs.org/" target="_blank" alt="go to Nuxtjs">Go To NuxtJS</a>`,
                link: "https://nuxt.com",
            },
            {
                icon: "logos:nodejs-icon",
                text: "NodeJs",
                description: `Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.`,
                link: "https://nodejs.org/en/",
            },
            {
                icon: "skill-icons:typescript",
                text: "TypeScript",
                description: `Its actually like javascript but focuses more on types, this was created to be useful on IDEs like VS Code, and also help lower type errors in the future, specially as the project grows. <a href="https://www.typescriptlang.org/">To Know More Click Here</a>`,
                link: "https://www.typescriptlang.org/",
            },
        ],
    },
    {
        icon: "skill-icons:html",
        tech: "HTML/CSS/UX/UI",
        description:
            "For creating the structure, design and layout of web pages. It uses a system of tags and attributes to define the various elements on a web page.",
        yearStarted: 2016,
        tools: [
            {
                icon: "logos:tailwindcss-icon",
                text: "tailwindcss",
                description: `A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.`,
                link: "https://tailwindcss.com/",
            },
            {
                icon: "logos:windi-css",
                svg: true,
                text: "windicss",
                description: `If you are already familiar with Tailwind CSS, think about Windi CSS as an on-demand alternative to Tailwind, which provides faster load times, fully compatible with Tailwind v2.0 and with a bunch of additional cool features.`,
                link: "https://windicss.org/",
            },
            {
                icon: "skill-icons:sass",
                text: "SASS",
                description: `CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.`,
                link: "https://sass-lang.com/",
            },
            {
                icon: "skill-icons:html",
                text: "html5",
                description: `HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.`,
                link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            },
            {
                icon: "logos:figma",
                text: `Figma`,
                description: `As a developer that also works with frontend development, I started to learn and gain experience in UX designing because I want it to be User Friendly. Figma is great for creating designs and is what I use.`,
                link: "https://www.figma.com/",
            },
            {
                icon: "logos:bootstrap",
                text: `Bootstrap`,
                description: `Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.`,
                link: "https://getbootstrap.com/",
            },
            {
                icon: "logos:unocss",
                text: `UnoCSS`,
                description: `UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible. The core is un-opinionated, and all the CSS utilities are provided via presets.`,
                link: "https://unocss.dev/",
            },
        ],
    },
    {
        icon: "logos:php",
        tech: "PHP",
        description:
            "Server-side scripting language primarily used for web development. Also commonly used with the MySQL database, and is supported by many web servers and operating systems.",
        yearStarted: 2017,
        tools: [
            {
                icon: "logos:codeigniter-icon",
                teny: true,
                text: "CodeIgniter",
                description:
                    "CodeIgniter is a powerful PHP framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications.",
                link: "https://codeigniter.com/",
            },
            {
                icon: "logos:laravel",
                teny: true,
                text: "laravel/Lumen",
                description:
                    "<a href='https://laravel.com/' target='_blank' alt='Go to Laravel'>Laravel</a> is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony. Laravel <a href='https://lumen.laravel.com/' target='_blank' alt='Go to lumen'>Lumen</a> is a stunningly fast PHP micro-framework for building web applications with expressive, elegant syntax.",
                link: "https://laravel.com/",
            },
        ],
    },
    {
        icon: "teenyicons:database-solid",
        tech: "Databases",
        description:
            "In web development, a database is a structured collection of data that is organized and stored in a way that allows efficient storage, retrieval, modification, and management of information",
        yearStarted: 2021,
        tools: [
            {
                icon: "skill-icons:mysql-dark",
                text: `MySQL`,
                description: `MySQL is an open-source relational database management system (RDBMS) that is widely used for managing and organizing structured data. It's one of the most popular choices for powering web applications, content management systems, and various other types of software that require a reliable and efficient way to store and retrieve data.`,
                link: "https://www.mysql.com/",
            },
            {
                icon: "logos:postgresql",
                text: `PostgreSQL`,
                description: `PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.`,
                link: "https://www.postgresql.org/",
            },
            {
                icon: "devicon:mongodb",
                text: `MongoDB`,
                description: `MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.`,
                link: "https://www.mongodb.com/",
            },
            {
                icon: "logos:firebase",
                text: `Firebase`,
                description: `Firebase, Inc. is a set of backend cloud computing services and application development platforms provided by Google. It hosts databases, services, authentication, and integration for a variety of applications, including Android, iOS, JavaScript, Node.js, Java, Unity, PHP, and C++.`,
                link: "https://firebase.google.com/",
            },
        ],
    },
];
</script>
<template>
    <div id="skills-container" class="my-work pt-50px">
        <div>
            <div class="w-full max-w-600px lg:max-w-700px mx-auto mt-50px px-20px">
                <div class="font-800 text-size-20px text-[var(--primary)]">Technical Skills</div>
                <div class="pt-5">
                    <div class="tracking-wide">
                        I am continuously learning to keep up with the latest technologies and be able to pick the best
                        tech for the job.
                    </div>
                </div>
            </div>
            <div class="max-w-600px lg:max-w-650px mx-auto px-10px pt-30px">
                <div class="grid sm:grid-cols-2 grid-cols-1 gap-3">
                    <div
                        v-for="skill in skills"
                        :key="skill.tech"
                        class="flex flex-col pb-5 transform scale-98 hover:scale-100 transition-all"
                    >
                        <div>
                            <div class="flex items-center gap-3 pb-3">
                                <Icon class="text-size-25px" :name="skill.icon" />
                                <div class="font-RobotoBold">{{ skill.tech }}</div>
                            </div>
                            <div class="tracking-wide leading-relaxed font-RobotoLight">{{ skill.description }}</div>
                        </div>
                        <div class="flex gap-2 pt-10px flex-wrap">
                            <NuxtLink :href="tool.link" target="_blank" v-for="tool in skill.tools" :key="tool.text">
                                <div
                                    class="whitespace-nowrap w-full overflow-hidden transition-all bg-[var(--background-secondary)] p-2 rounded-md transform hover:scale-110 cursor-pointer"
                                >
                                    <Icon class="text-size-20px" :name="tool.icon" />
                                    <span class="ml-2 text-size-14px">{{ tool.text }}</span>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
