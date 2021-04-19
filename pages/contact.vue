<template>
    <section class="text-gray-400 bg-gray-900 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div
                class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-center relative"
            >
                <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    class="absolute inset-0"
                    frameborder="0"
                    scrolling="no"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAHSeKxhRiCNzU3DEsIoyElfzZzBZJabzQ&q=16.444182987619534, 120.58955279593856&zoom=18"
                ></iframe>
                <div
                    class="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md"
                >
                    <div class="lg:w-1/2 px-6">
                        <h2
                            class="title-font font-semibold text-white tracking-widest text-xs"
                        >
                            ADDRESS
                        </h2>
                        <p class="mt-1">
                            La Trinidad, Benguet, Region Car, Luzon, Philippines
                        </p>
                    </div>
                    <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2
                            class="title-font font-semibold text-white tracking-widest text-xs"
                        >
                            EMAIL
                        </h2>
                        <a class="text-blue-400 leading-relaxed cursor-pointer"
                            >jenuelganawed936@gmail.com</a
                        >
                        <h2
                            class="title-font font-semibold text-white tracking-widest text-xs mt-4"
                        >
                            Telegram
                        </h2>
                        <p class="text-blue-400 leading-relaxed cursor-pointer">
                            https://t.me/BroJenuelChannel
                        </p>
                    </div>
                </div>
            </div>
            <div
                class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
            >
                <h2 class="text-white text-lg mb-1 font-medium title-font">
                    Contact Me
                </h2>
                <p class="leading-relaxed mb-5">
                    You can Send me a message by filling up the form bellow.
                </p>
                <p v-show="sent" class="border-2 p-4 border-blue-500 rounded-lg text-blue-500">Your Message was Sent Successfully! I will surely check my email.😁👍</p>
                <div class="relative mb-4">
                    <label for="name" class="leading-7 text-sm text-gray-400"
                        >Name</label
                    >
                    <input
                        type="text"
                        id="name"
                        name="name"
                        v-model="form.name"
                        class="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-400"
                        >Email</label
                    >
                    <input
                        type="email"
                        id="email"
                        name="email"
                        v-model="form.email"
                        class="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div class="relative mb-4">
                    <label for="message" class="leading-7 text-sm text-gray-400"
                        >Message</label
                    >
                    <textarea
                        id="message"
                        name="message"
                        v-model="form.message"
                        class="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                </div>
                <button
                    class="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                    @click="sendEmail()"
                    :disabled="sending"
                >
                    {{sending ? 'Sending' : 'Submit'}}
                </button>
                <p class="text-xs text-gray-400 text-opacity-90 mt-3">
                    Information you've written will be in private and will not
                    be shared to anyone.
                </p>
            </div>
        </div>
    </section>
</template>
<script>
import { createSEOMeta } from '~/utils/seo'
import emailjs, { init } from 'emailjs-com'
init('user_zdO7SqNAzUeW1bl8KtMhn')
export default {
    data: () => {
        return {
            form: {
                subject: 'From BorJenuelBlog',
                name: '',
                email: '',
                message: '',
            },
            showError: false,
            sent: false,
            sending: false,
        }
    },
    head: {
        title: 'Contact - Bro Jenuel Blog',
        meta: createSEOMeta({
            title: "Contact - Bro Jenuel Blog",
            description: "...share and to keep track and have a record of things I learned in my journey as I travel to the world of being a programmer. Bookmark this website in your browsers, and check it anytime. I will be posting here at least 1 to 2 times a week..",
            image: 'https://i.ibb.co/WkWW3rs/Screenshot-2021-04-19-232949.png',
            url: process.env.baseUrl
        }),
    },
    methods: {
        sendEmail() {
            this.sending = true
            if (this.checkProperties()) {
                emailjs
                    .send('service_88wvqn9', 'template_nulphu2', this.form)
                    .then(() => {
                        this.sent = true
                        this.showError = false
                        this.sending = false
                        this.form = {
                            subject: '',
                            name: '',
                            email: '',
                            message: '',
                        }
                    })
                    .catch(() => {
                        this.sent = false
                        this.showError = false
                        this.sending = false
                    })
            } else {
                this.showError = true
                this.sending = false
            }
        },

        checkProperties() {
            let form = this.form
            return form.subject != '' &&
                form.name != '' &&
                form.email != '' &&
                form.message != ''
                ? true
                : false
        },
    },
}
</script>