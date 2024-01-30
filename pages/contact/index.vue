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

defineOgImageComponent("DefaultOgImage", {
    title: "Contact Me",
    description: "Thanks for taking the time to reach out. How can I help you today?",
});
</script>
<template>
    <div class="pb-100px pt-20">
        <div class="max-w-650px mx-auto px-10px relative">
            <div class="pt-5 text-center text-7xl font-100 pt-20">😁</div>
            <div class="pt-5 text-center text-4xl font-100 pb-50px">
                Thanks for taking the time to reach out. How can I help you today?
            </div>
            <form class="pt-5" @submit.prevent="submitMail()">
                <div class="flex sm:flex-row flex-col sm:gap-3 gap-1">
                    <div class="w-full">
                        <div class="pb-2">Name</div>
                        <input
                            v-model="form.name"
                            type="text"
                            class="form-control block w-full px-3 py-3 text-base font-normal bg-[var(--background-secondary)] border border-solid border-[var(--background-secondary)] rounded transition ease-in-out m-0 focus:border-[var(--primary)] focus:outline-none mb-3"
                            placeholder="ex. john"
                            required
                        />
                    </div>
                    <div class="w-full">
                        <div class="pb-2">Email</div>
                        <input
                            v-model="form.email"
                            type="email"
                            class="form-control block w-full px-3 py-3 text-base font-normal bg-[var(--background-secondary)] border border-solid border-[var(--background-secondary)] rounded transition ease-in-out m-0 focus:border-[var(--primary)] focus:outline-none mb-3"
                            placeholder="ex. example@gmail.com"
                            required
                        />
                    </div>
                </div>
                <div>
                    <div class="pb-2">Subject</div>
                    <input
                        v-model="form.subject"
                        type="text"
                        class="form-control block w-full px-3 py-3 text-base font-normal bg-[var(--background-secondary)] bg-clip-padding border border-solid border-[var(--background-secondary)] rounded transition ease-in-out m-0 focus:border-[var(--primary)] focus:outline-none mb-3"
                        placeholder="ex. Project Collaboration"
                        required
                    />
                </div>
                <div>
                    <div class="pb-2">Message</div>
                    <textarea
                        v-model="form.message"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal bg-[var(--background-secondary)] bg-clip-padding border border-solid border-[var(--background-secondary)] rounded transition ease-in-out m-0 focus:border-[var(--primary)] focus:outline-none mb-10"
                        id="exampleFormControlTextarea1"
                        rows="7"
                        placeholder="Write Your message"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    :disabled="isLoading"
                    class="border border-0 px-10 py-20px rounded-full font-bold flex  hover:border-[var(--orange)] mx-auto hover:bg-[var(--orange)] transition-all group cursor-pointer"
                    role="button"
                    title="Submit Message"
                    id="submit-message-button"
                >
                    <span class="flex items-center gap-2 transform scale-100 group-hover:scale-110 transition-all">
                        <span class="icon--solar icon--solar--mailbox-broken text-25px"></span>
                        {{ isLoading ? "Sending" : "Send Message" }}
                    </span>
                </button>
            </form>
        </div>
    </div>
</template>
