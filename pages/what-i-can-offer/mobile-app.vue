<script lang="ts" setup>
const route = useRoute();
const { setMeta, googleStream } = useMeta();
const isShowContent = ref(false);

onMounted(() => (isShowContent.value = true));

useHead({
    ...setMeta({
        title: "What I can Offer - Mobile Apps",
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
        :title="`What I can Offer - Mobile Apps`"
        appName="www.BroJenuel.com"
        component="DefaultOgImage"
    />
    <Transition>
        <div v-show="isShowContent" class="min-h-90vh">
            <div class="max-w-600px lg:max-w-700px mx-auto px-10px pt-20px">
                <CardBlockComponent title="Mobile App" subtitle="The company software at hand" />
                <h2 class="font-900 text-[var(--primary)] mt-5">What is a mobile app?</h2>
                <p class="mb-3 indent-md">
                    A mobile app is a software designed to adjust to operating systems like Android and iOS and to adapt
                    perfectly to mobile devices dimensions (tablet, phablet, smartphone, etc.). These kind of
                    applications eases many activities that otherwise would be more complex, like going to the bank for
                    easy operations or driving with a map at hand.
                </p>
                <p class="mb-3 indent-md">
                    Mobile apps simplify the use of mobile devices. Probably this is the reason why people uses
                    smartphone ever more.
                </p>
                <p class="mb-3 indent-md">
                    Many applications used on mobile devices are available also for laptop and pc. Desktop apps are
                    known as web apps.
                </p>
                <img class="p-3 bg-white rounded-lg mb-30px" src="https://i.imgur.com/6HcHFJT.png" alt="" srcset="" />
                <h2 class="font-900 text-[var(--primary)]">What can a company use a mobile app for?</h2>
                <p class="mb-3 indent-md">
                    Companies can request a mobile app for internal management reasons or to connect to the outside
                    environment, or for both purposes
                </p>
                <p class="mb-3 indent-md">
                    In the first instance, with the use of mobile apps the company can simplify the communication among
                    departments, ease data transfer and allow stakeholders to access specific information. In many other
                    cases a mobile app can be developed to provide customer assistance, to make the use of a product
                    easier or to take part in a loyalty program. In case of both uses, a mobile app could be used to
                    manage employees, work shifts and salaries; or to create a point of contact for customers who can
                    consult a catalogue and buy online.
                </p>
            </div>
        </div>
    </Transition>
</template>
