<script lang="ts" setup>
const route = useRoute();
const { setMeta, googleStream } = useMeta();
const isShowContent = ref(false);

onMounted(() => (isShowContent.value = true));

useHead({
    ...setMeta({
        title: "What I can Offer - Websites",
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
        :title="`What I can Offer -  Websites`"
        appName="www.BroJenuel.com"
        component="DefaultOgImage"
    />
    <NuxtLayout name="offerlayout">
        <Transition>
            <div v-show="isShowContent" class="min-h-90vh">
                <div class="max-w-600px lg:max-w-700px mx-auto px-10px pt-20px">
                    <CardBlockComponent title="Websites" subtitle="Your professional web space" />
                    <h2 class="font-900 text-[var(--primary)] mt-5">What is a website?</h2>
                    <p class="mb-3 indent-md">
                        A company website is a business card for those who come visit online. It is also a digital
                        brochure that allows customers to choose your products and services.
                    </p>
                    <p class="mb-3 indent-md">
                        Having a website allows your company to instill a solid brand identity and offer to customers
                        services such as booking, consulting an online catalogue, receiving assistance, benefitting from
                        promotions and accessing up to date content.
                    </p>
                    <p class="mb-3 indent-md">
                        A professional website is a powerful tool that can evolve into more ambitious projects; for
                        example: it can support a web app such as e-commerce platform.
                    </p>
                    <div class="flex justify-center">
                        <img
                            class="p-3 bg-white rounded-lg mb-30px"
                            src="https://i.imgur.com/b3oBAwC.jpg"
                            alt=""
                            srcset=""
                        />
                    </div>
                    <h2 class="font-900 text-[var(--primary)]">
                        Why is important for a company to build a business website?
                    </h2>
                    <p class="mb-3 indent-md">
                        Relying solely on a social media page nowadays is not enough, neither if yours is a small
                        business. Although social media pages are ever more structured and full of useful information,
                        their aim is to direct users onto a website; therefore is crucial for a company to have it
                        built.
                    </p>
                    <p class="mb-3 indent-md">
                        A professional well-structured website guarantees an exhaustive informative experience to the
                        users and presents a great opportunity for businesses to pursue a key goal: establishing a good
                        connection with potential clients.
                    </p>
                    <p class="mb-3 indent-md">
                        It is important to point out that this connection requires an active involvement and an ongoing
                        input from the company. Another important thing to bear in mind is that the conversation should
                        be easily accessible from a mobile device as well. Considering this, a responsive website is
                        essential, otherwise users could give up on reading.
                    </p>
                </div>
            </div>
        </Transition>
    </NuxtLayout>
</template>
