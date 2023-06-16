<script lang="ts" setup>
const route = useRoute();
const { setMeta } = useMeta();
const client = useSupabaseClient();
const slug = route.params.slug[0];
const showContent = ref(false);
const runtimeConfig = useRuntimeConfig();
const coverImageLink = ref<null | string>(null);
const { share } = useShareFunction();

const { data } = await useAsyncData("blog", async () => {
    const { data }: any = await client
        .from("blogs")
        .select(`*, blog_meta(*)`)
        .eq("slug", slug)
        .eq("is_active", 1)
        .single();

    coverImageLink.value = data.cover_img ?? null;
    return data;
});

const author: any = await useAsyncData("author", async () => {
    const author = await client.from("user_profile").select("*").eq("user_id", data.value.author).single();
    return author.data;
});

const oldCountViews: number =
    data.value.blog_meta && data.value.blog_meta.view_count ? data.value.blog_meta.view_count : 0;

async function addViewCount() {
    const queryUpdate: any = {
        blogs_id: data?.value.id,
        view_count: oldCountViews + 1,
    };
    await client.from("blog_meta").upsert(queryUpdate).select();
}

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "/code-highlight/atom-one-dark.css",
        },
    ],
    ...setMeta({
        title: data.value.title,
        description: data.value.summary,
        path: `/blog/${data.value.slug}`,
        keywords: data.value.keywords,
        lang: "en",
        ...(coverImageLink.value
            ? {
                  image: coverImageLink.value,
              }
            : {}),
    }),
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
    <NuxtLayout name="bloglayout">
        <Transition>
            <main v-show="showContent" class="pt-70px w-full pb-5 relative">
                <div class="fixed w-full z-99">
                    <div class="w-full max-w-800px mx-auto relative">
                        <div
                            class="absolute lg:-left-50px left-10px flex lg:flex-col flex-row gap-2 lg:bg-none lg:p-0 p-2 lg:w-auto w-[90%] rounded-lg backdrop-filter backdrop-blur-md"
                        >
                            <button
                                title="Go back"
                                class="h-40px w-40px bg-[var(--background-secondary)] hover:bg-[var(--background)] rounded-full flex items-center justify-center hover:text-[var(--primary)] p-3 relative group"
                                @click="$router.back()"
                            >
                                <Icon name="material-symbols:arrow-back"></Icon>
                                <span
                                    class="absolute lg:left-50px left-0 lg:top-0 top-50px whitespace-nowrap bg-[var(--background)] opacity-0 group-hover:opacity-100 transition-all rounded-lg p-2 pointer-events-none"
                                >
                                    Go Back
                                </span>
                            </button>
                            <button
                                v-for="social in ['facebook', 'twitter', 'linkedin', 'copy']"
                                :key="social"
                                :title="social != 'Copy' ? `Share To ${social.toUpperCase()}` : 'Copy to Clipboard'"
                                class="h-40px w-40px p-3 bg-[var(--background-secondary)] hover:bg-[var(--background)] rounded-full flex items-center justify-center hover:text-[var(--primary)] relative group"
                                @click="share(social)"
                            >
                                <Icon v-if="social == 'facebook'" name="ri:facebook-fill"></Icon>
                                <Icon v-if="social == 'twitter'" name="mdi:twitter"></Icon>
                                <Icon v-if="social == 'linkedin'" name="ri:linkedin-fill"></Icon>
                                <Icon v-if="social == 'copy'" name="ph:link-simple-bold"></Icon>
                                <span
                                    class="absolute lg:left-50px left-0 lg:top-0 top-50px whitespace-nowrap bg-[var(--background)] opacity-0 group-hover:opacity-100 transition-all rounded-lg p-2 pointer-events-none"
                                >
                                    {{ social == "copy" ? "Copy Link" : `Share To ${social}` }}
                                </span>
                            </button>
                            <a
                                class="h-40px w-40px p-3 bg-[#FF5D5D] rounded-full flex items-center justify-center relative group"
                                href="https://ko-fi.com/T6T5379QZ"
                                target="_blank"
                            >
                                <Icon name="cib:ko-fi" />
                                <span
                                    class="absolute left-50px whitespace-nowrap bg-[#FF5D5D] opacity-0 group-hover:opacity-100 transition-all rounded-lg p-2 font-bold pointer-events-none"
                                >
                                    Give Coffee
                                    <Icon name="bxs:coffee" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="w-full max-w-800px mx-auto px-10px lg:pt-0 pt-70px">
                    <div class="mb-25px px-10px">
                        <template
                            v-if="
                                data.cover_img &&
                                (/\.(jpg|gif|png)$/.test(data.cover_img) || !(data.cover_img.indexOf('youtube') > -1))
                            "
                        >
                            <img :src="data.cover_img" alt="" class="w-full rounded-2xl mb-5" srcset="" />
                        </template>
                        <template v-else-if="data.cover_img && data.cover_img.indexOf('youtube') > -1">
                            <iframe :src="data.cover_img" class="sm:w-450px sm:h-250px w-full h-300px pr-20px pt-10px">
                            </iframe>
                        </template>
                        <div>
                            <h1 class="text-2xl lg:text-5xl md:text-4xl md:text-3xl pb-10px font-RobotoBold">
                                {{ data.title }}
                            </h1>
                            <div>
                                <p class="text-xl lg:text-3xl md:text-2xl sm:text-xl md font-RobotoThin font-100 mb-5">
                                    <span class="text-[var(--primary)]">/</span>
                                    {{ data.summary }}
                                </p>
                            </div>
                            <div class="flex flex-wrap gap-3 mb-3">
                                <div
                                    v-for="tags in data.tags"
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
                                <div class="whitespace-nowrap">
                                    <Icon name="fluent-emoji-flat:writing-hand-light" class="mr-2" />
                                    <span>{{ author ? author.data.value.username : "" }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="!runtimeConfig.public.isDevelopment" class="w-full">
                        <ClientOnly>
                            <GoogleAdsHorizontal />
                        </ClientOnly>
                    </div>
                    <div
                        class="content-render mx-auto relative md:text-lg pt-5 lg:px-10 px-1"
                        v-html="data.content"
                    ></div>
                    <hr />
                    <br />
                    <div
                        class="sticky top-15 sm:top-20 bg-[var(--background-secondary)] p-2 rounded-lg leading-5 mx-auto flex flex-col items-center"
                    >
                        <img src="/img/blog/qrcode-donate.webp" alt="" srcset="" width="200" />
                        <div class="mb-3">Hi! If you like this article and would like to give coffee.</div>
                        <a class="mt-2" href="https://ko-fi.com/T6T5379QZ" target="_blank">
                            <img
                                height="36"
                                style="border: 0px; height: 30px"
                                src="/img/picture/kofi.webp"
                                border="0"
                                alt="Buy Me a Coffee at ko-fi.com"
                            />
                        </a>
                    </div>
                    <div
                        v-if="!runtimeConfig.public.isDevelopment"
                        class="max-w-600px mx-auto px-10px relative pb-5 mt-50px"
                    >
                        <ClientOnly>
                            <Disqus
                                :identifier="`BroJenuel-${data.slug}`"
                                :title="data.title"
                                url="https://brojenuel.disqus.com"
                            />
                        </ClientOnly>
                    </div>
                </div>
                <div class="md:block hidden"></div>
            </main>
        </Transition>
    </NuxtLayout>
</template>
