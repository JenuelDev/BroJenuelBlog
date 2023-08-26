<script setup lang="ts">
const { $Swal } = useNuxtApp();
const isShowContent = ref(false);
const emailJs = useEmailJs();
const isLoading = ref(false);
const route = useRoute();
const form = reactive<{
    subject: string | null;
    name: string | null;
    email: string | null;
    message: string;
}>({
    subject: null,
    name: null,
    email: null,
    message: "",
});
async function submitMail() {
    isLoading.value = true;
    try {
        if (form.name && form.subject && form.email && form.message) {
            await emailJs.sendEmail({
                name: form.name,
                subject: form.subject,
                email: form.email,
                message: form.message,
            });

            $Swal.fire({
                icon: "success",
                title: "Message Sent! 📬",
                text: "Thank you for your message! I will get back to you soon! 😇😍✋",
            });
        }

        form.name = null;
        form.email = null;
        form.subject = null;
        form.message = "";
    } catch (e) {
        $Swal.fire({
            icon: "error",
            title: "Oops... Cant Send Message",
            text: "Something went wrong!",
        });
    }
    isLoading.value = false;
}
onMounted(() => (isShowContent.value = true));

const { setMeta } = useMeta();

useHead({
    ...setMeta({
        title: "Contact Jenuel Ganawed",
        description:
            "Do you like to talk about something, or want to hire me or work with me or just want to say hi? Feel free to contact me.",
        path: route.path,
        keywords: [
            "contact brojenuel",
            "contact jenuel ganawed",
            "brojenuel",
            "Jenuel",
            "Jenuel Ganawed",
            "bro jenuel",
            "web developer",
            "software developer",
        ],
        lang: "en",
    }),
});

defineOgImage({
    component: "DefaultOgImage",
    path: route.path,
    title: "Contact - BroJenuel",
    description: "Contact us, and I will definitely going to reply back.",
    appName: "www.BroJenuel.com",
});
</script>
<template>
    <NuxtLayout>
        <Transition>
            <div v-show="isShowContent" class="pt-90px min-h-90vh">
                <div class="max-w-550px mx-auto px-10px">
                    <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px">
                        <Icon name="mdi:gmail" />
                        Contact
                    </div>
                    <div class="pt-5">
                        <div class="indent-md">
                            I am currently looking for Job. If you have other request or offer, don't hesitate to
                            contact me using the form bellow.
                        </div>
                    </div>
                    <form class="pt-5" @submit.prevent="submitMail()">
                        <input
                            v-model="form.name"
                            type="text"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal bg-[var(--background-secondary)] bg-clip-padding border border-solid border-[var(--background-secondary)] rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none mb-3"
                            placeholder="Enter Your Name"
                            required
                        />
                        <input
                            v-model="form.email"
                            type="email"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal bg-[var(--background-secondary)] bg-clip-padding border border-solid border-[var(--background-secondary)] rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none mb-3"
                            placeholder="Enter Your Email Address"
                            required
                        />
                        <input
                            v-model="form.subject"
                            type="text"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal bg-[var(--background-secondary)] bg-clip-padding border border-solid border-[var(--background-secondary)] rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none mb-3"
                            placeholder="Subject"
                            required
                        />
                        <textarea
                            v-model="form.message"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal bg-[var(--background-secondary)] bg-clip-padding border border-solid border-[var(--background-secondary)] rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none mb-3"
                            id="exampleFormControlTextarea1"
                            rows="4"
                            placeholder="Write Your message"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            :disabled="isLoading"
                            class="btn btn-lg disabled:cursor-not-allowed btn-filled"
                            role="button"
                            title="Submit Message"
                            id="submit-message-button"
                        >
                            <Icon v-show="isLoading" name="eos-icons:bubble-loading" />
                            {{ isLoading ? "Sending" : "Send Message" }}
                        </button>
                    </form>
                </div>
            </div>
        </Transition>
    </NuxtLayout>
</template>
