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
            <div class="flex gap-20px text-size-16px items-center">
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
                <a
                    href="https://ko-fi.com/T6T5379QZ"
                    onclick="window.open('https://ko-fi.com/T6T5379QZ', 
                        'newwindow', 
                        'width=1000,height=800'); 
                        return false;"
                    target="_blank"
                >
                    <img
                        height="36"
                        style="border: 0px; height: 36px"
                        src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
                        border="0"
                        alt="Buy Me a Coffee at ko-fi.com"
                    />
                </a>
            </div>
        </div>
    </nav>
</template>
