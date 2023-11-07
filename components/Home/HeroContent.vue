<template>
    <div
        class="flex gap-2 w-full max-w-1100px mx-auto md:px-20px px-10px justify-center md:flex-row flex-col"
        style="margin-top: 90px"
    >
        <div class="md:w-[30%] self-auto w-full z-9 flex flex-col gap-2 md:items-start items-center justify-center">
            <div class="lg:text-lg md:text-left text-center">
                <div>
                    Hi! <span class="animate-wave lg:text-size-44px md:text-size-36px text-size-30px">👋</span> Im
                    <b>Jenuel</b> & I am a
                </div>
            </div>
            <div class="md:text-left text-center">
                <h2 class="lg:text-5xl text-4xl w-auto rounded-1xl">Software</h2>
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
        </div>
        <div>
            <div
                class="light:bg-[#dee2e3] bg-[var(--primary)] md:w-360px sm:w-350px w-300px rounded-2xl z-8 md:h-360px sm:h-350px h-300px self-center overflow-hidden group relative mx-auto"
            >
                <div class="absolute right-5 top-5 h-4 w-4 bg-gray-50 opacity-50 rounded-full"></div>
                <div class="absolute right-5 top-11 h-4 w-4 bg-gray-50 opacity-60 rounded-full"></div>
                <div class="absolute right-11 top-5 h-4 w-4 bg-gray-50 opacity-60 rounded-full"></div>
                <NuxtImg
                    src="/my-image/smile face.png"
                    format="webp"
                    width="400"
                    height="400"
                    class="group-hover:block w-full absolute"
                />
                <div class="absolute left-5 bottom-5 h-4 w-4 bg-gray-50 opacity-50 rounded-full"></div>
                <div class="absolute left-5 bottom-11 h-4 w-4 bg-gray-50 opacity-60 rounded-full"></div>
                <div class="absolute left-11 bottom-5 h-4 w-4 bg-gray-50 opacity-60 rounded-full"></div>
            </div>
        </div>
    </div>
    <div
        class="flex gap-2 w-full max-w-1100px mx-auto md:px-20px px-10px justify-center md:flex-row flex-col py-5 pt-15"
    >
        <div class="w-full px-5 py-3 text-center">
            <div class="sm:text-lg max-w-700px mx-auto leading-8 mb-5">
                Since the beginning of my journey as a software developer 6 years ago, I've done office and remote work
                for companies, and collaborated with teams of developers to build and maintain awesome products. I'm
                quietly confident, naturally curious, and perpetually working on improving my craft.
            </div>
            <div class="flex items-center gap-1 flex-wrap justify-center">
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
    </div>
</template>
