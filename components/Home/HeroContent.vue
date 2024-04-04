<template>
    <div
        class="gap-2 w-full max-w-700px mx-auto md:flex-row flex-col items-center mt-30 mb-10"
    >
        <div>
            <p class="text-2xl m-1 sm:text-left text-center dark:text-white">
                <NuxtLink
                    to="/about"
                    class="dark:text-yellow-200 text-orange-600 decoration-none hover:underline font-bold"
                >
                    hey, I'm Jenuel.
                </NuxtLink>
                I'm a software developer/engineer.
            </p>
            <div
                class="flex items-center gap-5 flex-wrap sm:justify-start justify-center"
            >
                <NuxtLink
                    href="https://dev.to/brojenuel"
                    class="flex items-center text-[var(--color)] decoration-none gap-1 hover:text-gray-500"
                    target="_blank"
                    alt="Jenuel Oras Ganawed Dev"
                    aria-label="Jenuel Ganawed Dev.to"
                    role="link"
                    title="Jenuel Oras Ganawed Dev.to"
                >
                    <span class="icon--mdi icon--mdi--dev-to text-30px"></span>
                    Dev.to
                </NuxtLink>
                <NuxtLink
                    href="https://www.linkedin.com/in/jenuelganawed/"
                    class="flex items-center text-[var(--color)] decoration-none gap-1 hover:text-[#337DAF]"
                    target="_blank"
                    alt="Jenuel Oras Ganawed Linkedin"
                    aria-label="Jenuel Oras Ganawed Linkedin"
                >
                    <span
                        class="icon--mdi icon--mdi--linkedin text-20px text-[#337DAF]"
                    ></span>
                    LinkedIn
                </NuxtLink>
                <NuxtLink
                    href="https://youtube.com/@brojenuel"
                    target="_blank"
                    class="flex items-center text-[var(--color)] decoration-none gap-1 hover:text-[#EF2527]"
                >
                    <span
                        class="icon--mdi icon--mdi--youtube text-20px text-[#EF2527]"
                    ></span>
                    Youtube
                </NuxtLink>
                <NuxtLink
                    to="/contact"
                    class="flex items-center text-[var(--color)] decoration-none gap-1 hover:text-[#32aa56]"
                >
                    <span
                        class="icon--solar icon--solar--mailbox-broken text-20px text-[#32aa56]"
                    ></span>
                    Email Me
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
