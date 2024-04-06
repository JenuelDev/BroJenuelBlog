<template>
    <div id="main-content" class="relative">
        <HomePointer />
        <div
            class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
        >
            <div class="lg:flex lg:justify-between lg:gap-4">
                <HomeHeader />
                <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
                    <HomeAbout />
                    <HomeExperience />
                    <HomeProjects />
                    <HomeWriting />
                    <HomeFooter />
                </main>
            </div>
        </div>
    </div>
</template>
