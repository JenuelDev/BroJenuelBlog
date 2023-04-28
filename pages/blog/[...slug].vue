<script lang="ts" setup>
const route = useRoute();
const { setMeta } = useMeta();
const client = useSupabaseClient();
const slug = route.params.slug[0];
const showContent = ref(false);
const runtimeConfig = useRuntimeConfig();
const coverImageLink = ref<null | string>(null);

const { data }: any = await useAsyncData("blog", async () => {
    const { data }: any = await client.from("blogs").select(`*, blog_meta(*)`).eq("slug", slug).eq("is_active", 1).single();
    coverImageLink.value = data.cover_img ?? null;
    return data;
});

const oldCountViews: number =
    data.value.blog_meta && data.value.blog_meta.view_count ? data.value.blog_meta.view_count : 0;

async function addViewCount() {
    const queryUpdate: any = {
        blogs_id: data?.value.id,
        view_count: oldCountViews + 1
    };
    await client.from("blog_meta").upsert(queryUpdate).select();
}

useHead({
    ...setMeta({
        title: data.value.title,
        description: data.value.summary,
        path: `/blog/${data.value.slug}`,
        keywords: data.value.keywords,
        lang: "en",
        ...(coverImageLink.value
            ? {
                image: coverImageLink.value
            }
            : {})
    })
});

function commafy(num: number) {
    const str = num.toString().split(".");
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
    <OgImageStatic
        v-if="!coverImageLink"
        :description="data.summary"
        :path="route.path"
        :title="data.title"
        appName="www.BroJenuel.com"
        component="DefaultOgImage"
    />
    <NuxtLayout name="blogslayout">
        <main class="pt-40px min-h-80vh">
            <Transition>
                <div v-show="showContent" class="pt-40px max-w-600px lg:max-w-800px mx-auto pb-5 md:flex">
                    <div class="sticky top-12 bottom-0 z-50 filter backdrop-filter backdrop-blur-sm">
                        <div
                            class="flex md:flex-col md:gap-2 gap-8 items-center md:sticky md:top-15 md:pr-20px md:justify-start justify-center md:h-auto h-50px"
                        >
                            <button
                                v-for="social in ['facebook', 'twitter', 'linkedin', 'copy']"
                                :key="social"
                                :title="social != 'Copy' ? `Share To ${social.toUpperCase()}` : 'Copy to Clipboard'"
                                class="h-40px w-40px bg-[var(--background-secondary)] rounded-full flex items-center justify-center hover:text-[var(--primary)]"
                                @click="share(social)"
                            >
                                <Icon v-if="social == 'facebook'" name="ri:facebook-fill"></Icon>
                                <Icon v-if="social == 'twitter'" name="mdi:twitter"></Icon>
                                <Icon v-if="social == 'linkedin'" name="ri:linkedin-fill"></Icon>
                                <Icon v-if="social == 'copy'" name="ph:link-simple-bold"></Icon>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div class="mb-25px px-10px">
                            <h1 class="text-2xl lg:text-5xl md:text-4xl md:text-3xl font-700 pb-10px font-kumbhsans">
                                {{ data.title }}
                            </h1>
                            <div>
                                <template
                                    v-if="
                                        data.cover_img &&
                                        (/\.(jpg|gif|png)$/.test(data.cover_img) ||
                                            !(data.cover_img.indexOf('youtube') > -1))
                                    "
                                >
                                    <img
                                        :src="data.cover_img"
                                        alt=""
                                        class="float-left sm:w-450px w-full pr-20px pt-10px"
                                        srcset=""
                                    />
                                </template>
                                <template v-else-if="data.cover_img && data.cover_img.indexOf('youtube') > -1">
                                    <iframe
                                        :src="data.cover_img"
                                        class="float-left sm:w-450px sm:h-250px w-full h-300px pr-20px pt-10px"
                                    >
                                    </iframe>
                                </template>
                                <p class="text-xl lg:text-3xl md:text-2xl sm:text-xl md font-sans font-100 mb-5">
                                    <span class="text-[var(--primary)]">/</span>
                                    {{ data.summary }}
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
                        </div>
                        <div v-if="!runtimeConfig.public.isDevelopment" class="max-w-600px lg:max-w-700px">
                            <ClientOnly>
                                <GoogleAdsHorizontal />
                            </ClientOnly>
                        </div>
                        <div
                            class="content-render max-w-600px lg:max-w-700px mx-auto relative font-poly text-l md:text-xl pt-5"
                            v-html="data.content"
                        ></div>
                        <div v-if="!runtimeConfig.public.isDevelopment"
                             class="max-w-600px mx-auto px-10px relative pb-5 mt-50px">
                            <ClientOnly>
                                <Disqus
                                    :identifier="`BroJenuel-${data.slug}`"
                                    :title="data.title"
                                    url="https://brojenuel.disqus.com"
                                />
                            </ClientOnly>
                        </div>
                    </div>
                </div>
            </Transition>
        </main>
    </NuxtLayout>
</template>
