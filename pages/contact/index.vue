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

function goBack() {
    window.history.back();
}

defineOgImage({
    component: "DefaultOgImage",
    path: route.path,
    title: "Contact - BroJenuel",
    description: "Contact us, and I will definitely going to reply back.",
    appName: "www.BroJenuel.com",
});
</script>
<template>
    <div class="pb-100px">
        <div class="max-w-650px mx-auto px-10px relative">
            <div class="absolute right-0 top-4">
                <span
                    class="icon--solar icon--solar--close-circle-broken text-3xl cursor-pointer hover:text-[var(--primary)]"
                    @click="goBack()"
                ></span>
            </div>
            <div class="pt-5 text-center text-7xl font-100">😁</div>
            <div class="pt-5 text-center text-4xl font-100 pb-80px">
                Thanks for taking the time to reach out.<br />
                How can I help you today?
            </div>
            <form class="pt-5" @submit.prevent="submitMail()">
                <div class="flex gap-3">
                    <div class="w-full">
                        <div class="pb-2">Name</div>
                        <input
                            v-model="form.name"
                            type="text"
                            class="form-control block w-full px-3 py-3 text-base font-normal bg-[var(--background-secondary)] bg-clip-padding border border-solid border-[var(--background-secondary)] rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none mb-3"
                            placeholder="ex. john"
                            required
                        />
                    </div>
                    <div class="w-full">
                        <div class="pb-2">Email</div>
                        <input
                            v-model="form.email"
                            type="email"
                            class="form-control block w-full px-3 py-3 text-base font-normal bg-[var(--background-secondary)] bg-clip-padding border border-solid border-[var(--background-secondary)] rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none mb-3"
                            placeholder="ex. example@gmail.com"
                            required
                        />
                    </div>
                </div>
                <div>
                    <div class="pb-2">Email</div>
                    <input
                        v-model="form.subject"
                        type="text"
                        class="form-control block w-full px-3 py-3 text-base font-normal bg-[var(--background-secondary)] bg-clip-padding border border-solid border-[var(--background-secondary)] rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none mb-3"
                        placeholder="Subject"
                        required
                    />
                </div>
                <div>
                    <div class="pb-2">Message</div>
                    <textarea
                        v-model="form.message"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal bg-[var(--background-secondary)] bg-clip-padding border border-solid border-[var(--background-secondary)] rounded transition ease-in-out m-0 focus:border-blue-600 focus:outline-none mb-3"
                        id="exampleFormControlTextarea1"
                        rows="7"
                        placeholder="Write Your message"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    :disabled="isLoading"
                    class="border px-7 py-10px rounded-full font-bold flex items-center gap-2 hover:text-[var(--primary)] hover:border-[var(--primary)] hover:underline mx-auto"
                    role="button"
                    title="Submit Message"
                    id="submit-message-button"
                >
                    <span class="icon--solar icon--solar--mailbox-broken text-25px"></span>
                    {{ isLoading ? "Sending" : "Send Message" }}
                </button>
            </form>
        </div>
    </div>
</template>
