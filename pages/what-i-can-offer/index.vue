<script lang="ts" setup>
const route = useRoute();
const { setMeta, googleStream } = useMeta();
const isShowContent = ref(false);

onMounted(() => (isShowContent.value = true));

useHead({
    ...setMeta({
        title: "What I can Offer - Web Apps",
        description:
            "Jenuel Ganawed is a software developer from the philippines. His passionate about coding, writing, and sharing what he know. Sharing about experiences, personal projects and articles about code, self-improvement, health, and more",
        path: route.path,
        keywords: ["brojenuel", "Jenuel", "Jenuel Ganawed", "bro jenuel", "web developer", "software developer"],
        lang: "en",
    }),
    ...(process.env.NODE_ENV != "development" ? googleStream() : {}),
});
</script>
<template>
    <OgImageStatic
        :description="`Jenuel Ganawed is a software developer from the philippines. His passionate about coding, writing, and sharing what he know. Sharing about experiences, personal projects and articles about code, self-improvement, health, and more`"
        :path="route.path"
        :title="`What I can Offer -  Web Apps`"
        appName="www.BroJenuel.com"
        component="DefaultOgImage"
    />
    <Transition>
        <div v-show="isShowContent" class="min-h-90vh">
            <div class="max-w-600px lg:max-w-700px mx-auto px-10px pt-20px">
                <CardBlockComponent title="Web Apps" subtitle="Your Management Software" />
                <h2 class="font-900 text-[var(--primary)] mt-5">What is a web app?</h2>
                <p class="mb-3 indent-md">
                    A Web app is an online software. That is accessible from browsers such as Google, Safari, Firefox,
                    etc. This means it is available everywhere there is internet connection.
                </p>
                <p class="mb-3 indent-md">
                    Web apps’ ancestor was a 2000s software sold on CD and installed on PC data storage. This is an
                    obsolete technology; nowadays the device is no longer a limit.
                </p>
                <p class="mb-3 indent-md">
                    If developed to adapt to operating systems such as Android and iOS, the web app is available also on
                    smartphones and tablets through the associated mobile app. Whatsapp, for example, was born as a
                    mobile app but then a browser web app was integrated to it.
                </p>
                <img class="p-3 bg-white rounded-lg mb-30px" src="https://i.imgur.com/RET1ONn.png" alt="" srcset="" />
                <h2 class="font-900 text-[var(--primary)]">What is a business web app for?</h2>
                <p class="mb-3 indent-md">
                    A company can use a web app as an online management software, regardless of the economic sector. Any
                    company can make use of a web app to organize, to standardize or to automate different activities.
                </p>
                <p class="mb-3">Following some example of web app applications in business functions:</p>
                <ul class="flex flex-col gap-2 pl-3">
                    <li>
                        1. In marketing, they can be used to manage promotional activities and to send personalized
                        messages to customers.
                    </li>
                    <li>
                        2. In sales, they can be used to develop an e-commerce platform for selling products and
                        services.
                    </li>
                    <li>
                        3. In business management, they can be used to easily organize activities, to keep track of the
                        on-going operation of projects and to assess efficiency performances.
                    </li>
                    <li>4. Would you like to plan your day-to-day schedule?</li>
                    <li>5. In logistics, web apps can help to implement a software to manage a warehouse.</li>
                    <li>
                        6. In business administration, they can be used to simplify activities like invoicing and to
                        develop accounting software.
                    </li>
                    <li>
                        7. In manufacture, they can be used to standardize processes and simplify machinery performance
                        assessments.
                    </li>
                </ul>
            </div>
        </div>
    </Transition>
</template>
