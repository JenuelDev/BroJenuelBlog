<template>
    <div
        class="flex gap-2 w-full max-w-1100px mx-auto md:px-20px px-10px justify-center md:flex-row flex-col"
        style="margin-top: 90px"
    >
        <div class="md:w-[30%] self-auto w-full z-9 flex flex-col gap-2 md:items-start items-center justify-center">
            <div class="lg:text-lg md:text-left text-center">
                <div>
                    Hi! <span class="animate-wave lg:text-size-44px md:text-size-36px text-size-30px">👋</span> <br />
                    Im <b>Jenuel</b> & I am a
                </div>
            </div>
            <div class="md:text-left text-center">
                <h2 class="lg:text-5xl text-4xl w-auto rounded-1xl">Software</h2>
                <h2
                    class="font-900 text-4xl whitespace-nowrap lg:w-270px w-full rounded-br-1xl relative h-50px md:-ml-0px -ml-65px"
                >
                    <div class="animation absolute">
                        <div class="first"><div>Engineer</div></div>
                        <div class="second"><div>Programmer</div></div>
                        <div class="third"><div>Developer</div></div>
                    </div>
                </h2>
            </div>
            <div class="h-1px dark:bg-light-50 bg-dark-50 w-60px self-center md:my-0 my-3"></div>
            <div class="lg:text-lg md:text-left text-center">
                i programme to develop apps and websites, I create articles, and I love what I do.
            </div>
        </div>
        <div>
            <div
                class="light:bg-[#dee2e3] bg-[var(--primary)] md:w-360px sm:w-350px w-300px rounded-2xl z-8 md:h-360px sm:h-350px h-300px self-center overflow-hidden group relative mx-auto group"
            >
                <div
                    class="absolute right-5 top-5 h-4 w-4 bg-gray-50 opacity-50 rounded-full group-hover:h-6 group-hover:w-6 group-hover:top-3 group-hover:right-3 transition-all duration-500"
                ></div>
                <div
                    class="absolute right-5 top-11 h-4 w-4 bg-gray-50 opacity-60 rounded-full group-hover:top-15 transition-all duration-500"
                ></div>
                <div
                    class="absolute right-11 top-5 h-4 w-4 bg-gray-50 opacity-60 rounded-full group-hover:right-15 transition-all duration-500"
                ></div>
                <NuxtImg
                    src="/my-image/smile face.png"
                    format="webp"
                    width="300"
                    height="300"
                    quality="80"
                    class="group-hover:block w-full absolute group-hover:transform group-hover:scale-110 transition-all"
                    alt="brojenuel profile"
                />
                <div
                    class="absolute left-5 bottom-5 h-4 w-4 bg-gray-50 opacity-50 rounded-full group-hover:h-6 group-hover:w-6 transition-all duration-500"
                ></div>
                <div
                    class="absolute left-5 bottom-11 h-4 w-4 bg-gray-50 opacity-60 rounded-full group-hover:bottom-15 transition-all duration-500"
                ></div>
                <div
                    class="absolute left-11 bottom-5 h-4 w-4 bg-gray-50 opacity-60 rounded-full group-hover:left-15 transition-all duration-500"
                ></div>
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
            <div class="flex items-center gap-7px flex-wrap justify-center">
                <a
                    href="https://dev.to/brojenuel"
                    class="flex items-center hover:text-[var(--primary)]"
                    target="_blank"
                    alt="Jenuel Oras Ganawed Dev"
                    aria-label="Jenuel Oras Ganawed Dev"
                >
                    <span class="icon--mdi icon--mdi--dev-to text-70px"></span>
                </a>
                <a
                    href="https://www.linkedin.com/in/jenuelganawed/"
                    class="flex items-center hover:text-[var(--primary)]"
                    target="_blank"
                    alt="Jenuel Oras Ganawed Linkedin"
                    aria-label="Jenuel Oras Ganawed Linkedin"
                >
                    <span class="icon--mdi icon--mdi--linkedin text-50px"></span>
                </a>
                <NuxtLink
                    to="/cv"
                    class="border px-5 py-2 rounded-full flex items-center gap-1 hover:text-[var(--primary)] !hover:border-[var(--primary)] hover:underline dark:border-white"
                >
                    <span class="icon--solar icon--solar--document-broken"></span>
                    Resume
                </NuxtLink>
                <NuxtLink
                    to="/contact"
                    class="border border-gray-900 px-5 py-2 bg-gray-900 text-[var(--background)] rounded-full flex items-center gap-2 hover:underline dark:bg-gray-50"
                >
                    <span class="icon--solar icon--solar--mailbox-broken"></span>
                    Email Me
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<style scoped>
.animation {
    height: 50px;
    overflow: hidden;
}

.animation > div > div {
    padding: 0.25rem 0.75rem;
    height: 50px;
    margin-bottom: 2.81rem;
    display: inline-block;
}

.animation div:first-child {
    animation: text-animation 8s infinite;
}

.first div {
    background-color: #20a7d8;
    color: white;
}
.second div {
    background-color: #cd921e;
    color: white;
}
.third div {
    background-color: #c10528;
    color: white;
}

@keyframes text-animation {
    0% {
        margin-top: 0;
    }
    10% {
        margin-top: 0;
    }
    20% {
        margin-top: -5.62rem;
    }
    30% {
        margin-top: -5.62rem;
    }
    40% {
        margin-top: -11.24rem;
    }
    60% {
        margin-top: -11.24rem;
    }
    70% {
        margin-top: -5.62rem;
    }
    80% {
        margin-top: -5.62rem;
    }
    90% {
        margin-top: 0;
    }
    100% {
        margin-top: 0;
    }
}
</style>
