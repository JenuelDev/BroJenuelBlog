<script lang="ts" setup>
const route = useRoute();
const { setMeta } = useMeta();
const client = useSupabaseClient();
const slug = route.params.slug[0];
const showContent = ref(false);

const { data }: any = await useAsyncData("blog", async () => {
    const { data }: any = await client.from("blogs").select(`*, blog_meta(*)`).eq("slug", slug).single();
    return data;
});

const oldCountViews: number =
    data.value.blog_meta && data.value.blog_meta.view_count ? data.value.blog_meta.view_count : 0;

async function addViewCount() {
    const queryUpdate: any = { blogs_id: data?.value.id, view_count: oldCountViews + 1 };
    await client.from("blog_meta").upsert(queryUpdate).select();
}

useHead({
    ...setMeta({
        title: data.value.title,
        description: data.value.summary,
        path: `/blog/${data.value.slug}`,
        keywords: data.value.keywords,
        lang: "en",
    }),
});

defineOgImageStatic({
    component: "DefaultOgImage",
    path: route.path,
    title: data.value.title,
    description: data.value.summary,
    appName: "www.BroJenuel.com",
});

function commafy(num: number) {
    var str = num.toString().split(".");
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
}

onMounted(() => {
    showContent.value = true;
    addViewCount();
});

function share(social: string) {
    let url = "https://brojenuel.com" + route.fullPath;
    if (social == "facebook") {
        const navUrl = "https://www.facebook.com/sharer/sharer.php?u=" + url;
        window.open(navUrl, "_blank");
        return;
    }

    if (social == "twitter") {
        const navUrl = "https://twitter.com/intent/tweet?text=" + url;
        window.open(navUrl, "_blank");
        return;
    }

    if (social == "linkedin") {
        const navUrl = "https://www.linkedin.com/sharing/share-offsite/?url=" + url;
        window.open(navUrl, "_blank");
        return;
    }

    if (social == "copy") {
        navigator.clipboard.writeText(url).then(() => {
            alert("Link Copied.");
        });
        return;
    }
}
</script>
<template>
    <NuxtLayout>
        <main class="pt-40px min-h-80vh">
            <Transition>
                <div v-show="showContent" class="pt-40px max-w-600px lg:max-w-800px mx-auto pb-5 px-10px">
                    <div>
                        <div class="mb-25px">
                            <h1 class="text-2xl lg:text-5xl md:text-4xl md:text-3xl font-700 pb-10px font-kumbhsans">
                                {{ data.title }}
                            </h1>
                            <div>
                                <template v-if="/\.(jpg|gif|png)$/.test(data.cover_img)">
                                    <img
                                        :src="data.cover_img"
                                        alt=""
                                        srcset=""
                                        class="float-left sm:w-450px w-full pr-20px pt-10px"
                                    />
                                </template>
                                <p class="text-xl lg:text-3xl md:text-2xl sm:text-xl md font-sans font-100 mb-5">
                                    <span class="text-[var(--primary)]">/</span> {{ data.summary }}
                                </p>
                            </div>
                            <div class="flex flex-wrap gap-3 mb-3">
                                <div
                                    v-for="tags in data.tags"
                                    :key="tags"
                                    :class="`tag-${tags}`"
                                    class="tag tag-sm !text-size-18px"
                                >
                                    #{{ tags }}
                                </div>
                            </div>
                            <div class="text-lg opacity-70 mb-2">
                                <span class="mr-10px">{{
                                    $dayjs(data.created_at).format("MMM. DD, YYYY. h:mm A")
                                }}</span>
                                <span><Icon name="ic:baseline-remove-red-eye" /> {{ commafy(oldCountViews) }}</span>
                            </div>
                            <div class="flex gap-2">
                                <button
                                    class="h-30px w-30px bg-[var(--background-secondary)] rounded-full flex items-center justify-center hover:text-[var(--primary)]"
                                    @click="share('facebook')"
                                    title="Share To Facebook"
                                >
                                    <Icon name="ri:facebook-fill"></Icon>
                                </button>
                                <button
                                    class="h-30px w-30px bg-[var(--background-secondary)] rounded-full flex items-center justify-center hover:text-[var(--primary)]"
                                    @click="share('twitter')"
                                    title="Share to Twitter"
                                >
                                    <Icon name="mdi:twitter"></Icon>
                                </button>
                                <button
                                    class="h-30px w-30px bg-[var(--background-secondary)] rounded-full flex items-center justify-center hover:text-[var(--primary)]"
                                    @click="share('linkedin')"
                                    title="Share to LinkedIN"
                                >
                                    <Icon name="ri:linkedin-fill"></Icon>
                                </button>
                                <button
                                    class="h-30px w-30px bg-[var(--background-secondary)] rounded-full flex items-center justify-center hover:text-[var(--primary)]"
                                    @click="share('copy')"
                                    title="Copy Link"
                                >
                                    <Icon name="ph:link-simple-bold"></Icon>
                                </button>
                            </div>
                        </div>
                        <div class="max-w-600px lg:max-w-700px">
                            <ClientOnly>
                                <GoogleAdsHorizontal />
                            </ClientOnly>
                        </div>
                        <div
                            class="content-render max-w-600px lg:max-w-700px mx-auto relative font-poly text-l md:text-xl"
                            v-html="data.content"
                        ></div>
                        <ClientOnly>
                            <div class="max-w-600px mx-auto px-10px relative pb-5 mt-50px">
                                <Disqus
                                    :identifier="`BroJenuel-${data.slug}`"
                                    url="https://brojenuel.disqus.com"
                                    :title="data.title"
                                />
                            </div>
                        </ClientOnly>
                    </div>
                </div>
            </Transition>
        </main>
    </NuxtLayout>
</template>
