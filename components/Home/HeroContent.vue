<template>
    <div
        class="flex gap-2 w-full max-w-700px mx-auto md:px-20px px-10px justify-center md:flex-row flex-col items-center mt-30 mb-10"
    >
        <div class="m-3 rounded-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-700 p-1 text-white">
            <div
                class="rounded-full bg-[var(--background)] p-4 overflow-hidden h-140px w-140px flex items-center justify-center border border-3px border-light-50"
            >
                <NuxtImg
                    src="/my-image/smile face.png"
                    format="webp"
                    width="190"
                    height="190"
                    quality="100"
                    alt="brojenuel profile"
                />
            </div>
        </div>
        <div>
            <p class="text-3xl m-1 font-bold dark:text-gray-400 text-gray-500 sm:text-left text-center">
                <NuxtLink to="/about" class="text-[var(--color)] decoration-none hover:underline"> Hey, Im Jenuel </NuxtLink>
                . I'm a software developer and a project lead.
            </p>
            <div class="flex items-center gap-5 flex-wrap sm:justify-start justify-center">
                <NuxtLink
                    href="https://dev.to/brojenuel"
                    class="flex items-center text-[var(--color)] decoration-none text-lg gap-1 hover:text-gray-500"
                    target="_blank"
                    alt="Jenuel Oras Ganawed Dev"
                    aria-label="Jenuel Oras Ganawed Dev"
                >
                    <span class="icon--mdi icon--mdi--dev-to text-40px"></span>
                    Dev.to
                </NuxtLink>
                <NuxtLink
                    href="https://www.linkedin.com/in/jenuelganawed/"
                    class="flex items-center text-[var(--color)] decoration-none text-lg gap-1 hover:text-[#337DAF]"
                    target="_blank"
                    alt="Jenuel Oras Ganawed Linkedin"
                    aria-label="Jenuel Oras Ganawed Linkedin"
                >
                    <span class="icon--mdi icon--mdi--linkedin text-30px text-[#337DAF]"></span>
                    LinkedIn
                </NuxtLink>
                <NuxtLink
                    to="/cv"
                    class="flex items-center text-[var(--color)] decoration-none text-lg gap-1 hover:text-[#EF2527]"
                >
                    <span class="icon--mdi icon--mdi--youtube text-30px text-[#EF2527]"></span>
                    Youtube
                </NuxtLink>
                <NuxtLink
                    to="/contact"
                    class="flex items-center text-[var(--color)] decoration-none text-lg gap-1 hover:text-[#32aa56]"
                >
                    <span class="icon--solar icon--solar--mailbox-broken text-30px text-[#32aa56]"></span>
                    Email Me
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
