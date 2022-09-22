<template>
    <nav
        class="mx-auto shadow shadow-lg sticky top-0 bg-[var(--background)] p-5 z-50"
    >
        <div
            class="flex items-center justify-between sm:flex-row flex-col gap-10px max-w-1200px mx-auto"
        >
            <h2 class="text-[var(--primary)]">
                <div class="flex flex-col">
                    <span
                        class="font-800 text-white flex items-center sm:justify-start justify-center text-size-0.8rem"
                    >
                        BLOG <IconDotMark class="w-20px" />
                    </span>
                    <span class="text-size-1.5rem !font-100">BroJenuel</span>
                </div>
            </h2>
            <div class="flex gap-20px text-size-16px">
                <NuxtLink
                    to="/"
                    class="hover:text-[var(--primary)] hover:underline"
                >
                    <span class="font-500"> Home </span>
                </NuxtLink>
                <a
                    href="https://www.brojenuel.com"
                    class="hover:text-[var(--primary)] hover:underline"
                >
                    <span class="font-500"> BroJenuel </span>
                </a>
            </div>
        </div>
    </nav>
</template>
