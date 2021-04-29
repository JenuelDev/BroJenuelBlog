<template>
    <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 mx-auto flex flex-wrap flex-col">
            <img
                class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
                alt="hero"
                src="~/assets/images/pagenotfound/giphy.gif"
            />
            <div class="flex flex-col text-center w-full">
                <h1 class="text-xl font-medium title-font mb-4 text-white">
                    The Page Your Are Trying to Access Doesn't Exist
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
            </div>
        </div>
        <div class="flex flex-wrap container mx-auto justify-center">
            <div
                v-for="page in pages"
                :key="page.title"
                class="xl:w-1/4 md:w-1/2 p-4 bg-gray-800 rounded-lg m-3"
            >
                <div class="bg-opacity-40">
                    <h3
                        class="tracking-widest text-indigo-400 text-xs font-medium title-font"
                    >
                        {{ page.sub }}
                    </h3>
                    <h2 class="text-lg text-white font-medium title-font mb-4">
                        {{ page.title }}
                    </h2>
                    <p class="leading-relaxed text-base">
                        {{ page.p }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['error'],
    layout: 'blog', // you can set a custom layout for the error page
    
    data: ()  => {
        return {
            pages: [
                {
                    sub: 'to home',
                    title: 'HOME PAGE',
                    p: 'Read some tips and tricks, or tutorials in home page.'
                },
                {
                    sub: 'to about',
                    title: 'ABOUT PAGE',
                    p: 'Know about what the page is offering.'
                },
                {
                    sub: 'to contact',
                    title: 'CONTACT PAGE',
                    p: 'If you have any question you can bip me up by sending me a message.'
                }
            ]
        }
    }
}
</script>