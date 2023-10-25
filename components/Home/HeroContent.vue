<template>
    <div
        class="flex gap-2 w-full max-w-1100px mx-auto md:px-20px px-10px justify-center md:flex-row flex-col"
        style="margin-top: 90px"
    >
        <div class="md:w-[25%] self-auto w-full z-9 flex flex-col justify-between md:items-start items-center">
            <div class="flex gap-1">
                <div
                    class="inline-block flex items-center gap-1 border rounded-lg"
                    style="padding: 0 7px; border-radius: 0.5rem"
                >
                    <div style="width: 10px; height: 10px; background-color: #d4ede3; border-radius: 100%"></div>
                    <small>happy</small>
                </div>
                <div
                    class="inline-block flex items-center gap-1 border rounded-lg"
                    style="padding: 0 7px; border-radius: 0.5rem"
                >
                    <div style="width: 10px; height: 10px; background-color: #f4dac7; border-radius: 100%"></div>
                    <small>thought</small>
                </div>
            </div>
            <div class="md:text-left text-center">
                <h2
                    class="lg:text-5xl text-4xl w-auto whitespace-nowrap !bg-[var(--background)] lg:w-315px w-240px rounded-1xl"
                >
                    I'm a Software
                </h2>
                <h2
                    class="lg:text-6xl font-900 text-4xl whitespace-nowrap flex !bg-[var(--background)] lg:w-310px md:w-200px w-full rounded-br-1xl"
                >
                    <span>Developer</span>
                </h2>
                <h2
                    class="lg:text-6xl font-900 text-4xl whitespace-nowrap flex !bg-[var(--background)] lg:w-270px md:w-170px w-full rounded-br-1xl"
                >
                    <span>Engineer</span>
                </h2>
            </div>
            <div class="h-1px dark:bg-light-50 bg-dark-50 w-60px self-center md:my-0 my-3"></div>
            <div class="lg:text-lg md:text-left text-center">
                i programme to develop apps and websites, I create articles, and I love what I do.
            </div>
            <div class="flex items-center gap-1 flex-wrap">
                <a
                    href="https://www.linkedin.com/in/jenuelganawed/"
                    class="flex items-center hover:text-[var(--primary)]"
                    target="_blank"
                    alt="Jenuel Oras Ganawed Linkedin"
                    aria-label="Jenuel Oras Ganawed Linkedin"
                >
                    <span class="icon--mdi icon--mdi--linkedin text-34px"></span>
                </a>
                <NuxtLink
                    to="/cv"
                    class="border px-2 py-1px rounded-full flex items-center gap-1 hover:text-[var(--primary)] !hover:border-[var(--primary)] hover:underline dark:border-white"
                >
                    <span class="icon--solar icon--solar--document-broken"></span>
                    Resume
                </NuxtLink>
                <NuxtLink
                    to="/contact"
                    class="border border-gray-900 px-2 py-1px bg-gray-900 text-[var(--background)] rounded-full flex items-center gap-2 hover:underline dark:bg-gray-50"
                >
                    <span class="icon--solar icon--solar--mailbox-broken"></span>
                    Email Me
                </NuxtLink>
            </div>
        </div>
        <div class="bg-[#dee2e3] lg:w-450px md:w-400px sm:w-350px w-300px rounded-2xl z-8 h-350px self-center"></div>
        <div class="md:w-[35%] flex flex-col gap-10px md:self-auto self-center">
            <div class="flex gap-2 h-50px flex-1 md:self-auto self-center md:order-1 order-2">
                <div class="bg-[#dee2e3] md:w-1/2 w-80px md:h-auto h-80px rounded-1xl"></div>
                <div class="bg-[#dee2e3] md:w-1/2 w-80px md:h-auto h-80px rounded-1xl"></div>
            </div>
            <div class="lg:text-lg md:text-left text-center md:order-2 order-1">
                Hi! 👋 Im <b>Jenuel</b>. Since the beginning of my journey as a software developer
                {{ new Date().getFullYear() - 2017 }} years ago, I've done office and remote work for companies, and
                collaborated with teams of developers to build and maintain awesome products. I'm quietly confident,
                naturally curious, and perpetually working on improving my craft.
            </div>
        </div>
    </div>
</template>
