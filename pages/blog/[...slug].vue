<script lang="ts" setup>
const route = useRoute();
const { setMeta } = useMeta();
const client = useSupabaseClient();
const slug = route.params.slug[0];
const runtimeConfig = useRuntimeConfig();
const coverImageLink = ref<null | string>(null);
const { share } = useShareFunction();

const isHasHistory = ref(false);
const { data } = await useAsyncData("blog", async () => {
    const { data }: any = await client
        .from("blogs")
        .select(`*, user_profile(*)`)
        .eq("slug", slug)
        .eq("is_active", 1)
        .single();

    if (!data) return;

    if (!runtimeConfig.public.isDevelopment) {
        await client.rpc("increment_blob_view_count", {
            blog_id: data.id,
        } as any);
    }

    coverImageLink.value = data.cover_img ?? null;
    return data;
});

const author = data.value ? data.value.user_profile : null;

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "/code-highlight/atom-one-dark.css",
        },
    ],
    ...setMeta({
        title: data.value ? data.value.title : "Page Not Found",
        description: data.value ? data.value.summary : "Page Not Found",
        path:
            data.value && data.value.slug
                ? `/blog/${data.value.slug}`
                : route.path,
        keywords: data.value ? data.value.keywords : ["no found"],
        lang: "en",
        ...(coverImageLink.value
            ? {
                  image: coverImageLink.value,
              }
            : {}),
        ...(["BroJenuel", "KateAwisan"].includes(
            author && author.username ? author.username : "BroJenuel"
        )
            ? {}
            : {
                  author:
                      author && author.username ? author.username : "BroJenuel",
              }),
    }),
});

definePageMeta({
    layout: "bloglayout",
});

onMounted(() => {
    isHasHistory.value = window.history.length > 0;
});
</script>

<template>
    <OgImage
        v-if="!coverImageLink"
        :description="data ? data.summary : 'Page Not Found'"
        :title="data ? data.title : 'Page Not Found'"
        component="BroJenuelOgImage"
    />
    <Transition>
        <main
            v-if="data"
            class="pt-70px w-full max-w-screen-md mx-auto pb-10 relative px-[10px]"
        >
            <div class="sticky top-10 z-50">
                <div class="absolute flex flex-col items-center z-50 gap-5">
                    <button
                        v-if="isHasHistory"
                        title="Go back"
                        class="h-[40px] w-[40px] hover:bg-slate-900 rounded-full flex items-center justify-center hover:text-slate-100 p-3 relative group border-none cursor-pointer"
                        @click="$router.back()"
                    >
                        <Icon name="material-symbols:arrow-back"></Icon>
                        <span
                            class="absolute lg:left-[50px] left-0 lg:top-0 top-[50px] whitespace-nowrap bg-slate-800 opacity-0 group-hover:opacity-100 transition-all rounded-lg p-2 pointer-events-none"
                        >
                            Go Back
                        </span>
                    </button>
                    <NuxtLink
                        title="Go back"
                        v-else
                        to="/"
                        class="h-[40px] w-[40px] hover:bg-slate-900 rounded-full flex items-center justify-center hover:text-[var(--primary)] p-3 relative group border-none hover:text-slate-100 cursor-pointer"
                        @click="$router.back()"
                    >
                        <Icon name="material-symbols:arrow-back"></Icon>
                        <span
                            class="absolute lg:left-50px left-0 lg:top-0 top-50px whitespace-nowrap bg-[var(--background)] opacity-0 group-hover:opacity-100 transition-all rounded-lg p-2 pointer-events-none"
                        >
                            Go Back
                        </span>
                    </NuxtLink>
                    <button
                        v-for="social in [
                            'facebook',
                            'twitter',
                            'linkedin',
                            'copy',
                        ]"
                        :key="social"
                        :title="
                            social != 'Copy'
                                ? `Share To ${social.toUpperCase()}`
                                : 'Copy to Clipboard'
                        "
                        class="h-40px w-40px p-3 hover:hover:bg-slate-900 rounded-full flex items-center justify-center hover:text-slate-100 relative group border-none text-[var(--color)] cursor-pointer"
                        @click="share(social)"
                    >
                        <Icon
                            v-if="social == 'facebook'"
                            name="ri:facebook-fill"
                        ></Icon>
                        <Icon
                            v-if="social == 'twitter'"
                            name="mdi:twitter"
                        ></Icon>
                        <Icon
                            v-if="social == 'linkedin'"
                            name="ri:linkedin-fill"
                        ></Icon>
                        <Icon
                            v-if="social == 'copy'"
                            name="ph:link-simple-bold"
                        ></Icon>
                        <span
                            class="absolute lg:left-[50px] left-0 lg:top-0 top-[50px] whitespace-nowrap bg-slate-800 opacity-0 group-hover:opacity-100 transition-all rounded-lg p-2 pointer-events-none"
                        >
                            {{
                                social == "copy"
                                    ? "Copy Link"
                                    : `Share To ${social}`
                            }}
                        </span>
                    </button>
                    <a
                        class="h-[30px] w-[30px] bg-[#FFDD00] rounded-full flex items-center justify-center relative group text-dark-700"
                        href="https://bit.ly/BroJenuel-BuyMeCoffee"
                        alt="Jenuel Ganawed Buy me Coffee"
                        target="_blank"
                    >
                        <Icon
                            name="cib:ko-fi"
                            size="20"
                            class="ml-3px text-slate-900 ml-[3px] mt-[2px]"
                        />
                        <span
                            class="absolute left-[50px] whitespace-nowrap bg-[#FFDD00] opacity-0 group-hover:opacity-100 transition-all rounded-lg p-2 font-bold pointer-events-none text-dark-700 text-slate-900"
                        >
                            Buy Me A Coffee 😇
                        </span>
                    </a>
                </div>
            </div>
            <article class="px-10px lg:pt-0 pt-70px ml-14 relative z-0">
                <div class="mb-25px px-10px w-full pt-10">
                    <template
                        v-if="
                            data.cover_img &&
                            (/\.(jpg|gif|png)$/.test(data.cover_img) ||
                                !(data.cover_img.indexOf('youtube') > -1))
                        "
                    >
                        <NuxtImg
                            :src="data.cover_img"
                            format="webp"
                            :alt="`Cover Image ${data.title}`"
                            width="528"
                            height="303"
                            quality="80"
                            class="rounded-2xl mb-5"
                        />
                    </template>
                    <template
                        v-else-if="
                            data.cover_img &&
                            data.cover_img.indexOf('youtube') > -1
                        "
                    >
                        <iframe
                            :src="data.cover_img"
                            class="sm:w-450px sm:h-250px w-full h-300px pr-20px pt-10px"
                        >
                        </iframe>
                    </template>
                    <div>
                        <h1
                            class="sm:text-3xl text-2xl pb-10px font-RobotoBold m-0 font-bold text-slate-100"
                        >
                            {{ data.title }}
                        </h1>
                        <p
                            class="font-100 m-0 mb-5 leading-6 sm:text-lg text-slate-200"
                        >
                            <span class="text-[var(--primary)]">/</span>
                            {{ data.summary }}
                        </p>
                        <div class="flex flex-wrap gap-3 mb-3">
                            <div
                                v-for="tags in data.tags"
                                :class="`tag-${tags}`"
                                class="tag tag-sm text-sm"
                            >
                                #{{ tags }}
                            </div>
                        </div>
                        <div class="text-lg mb-2">
                            <div
                                v-if="author"
                                class="mt-3 flex flex-wrap gap-2 items-center"
                            >
                                ✍️
                                <NuxtLink
                                    :href="author.website ?? '#'"
                                    target="_blank"
                                    title="authors website"
                                    class="decoration-none text-[var(--color)]"
                                >
                                    <span
                                        v-if="author.username"
                                        class="text-size-20px hover:text-[var(--primary)]"
                                    >
                                        {{ author.username }}
                                    </span>
                                    <span
                                        v-else-if="
                                            author.first_name ||
                                            author.last_name
                                        "
                                        class="text-size-20px hover:text-[var(--primary)]"
                                    >
                                        {{ author.first_name }}
                                        {{ author.last_name }}
                                    </span>
                                </NuxtLink>
                                <div
                                    class="flex items-center gap-3 text-size-20px"
                                >
                                    <NuxtLink
                                        v-if="author.facebook_username"
                                        :href="`https://facebook.com/${author.facebook_username}`"
                                        target="_blank"
                                        :title="`facebook ${author.facebook_username}`"
                                    >
                                        <Icon name="logos:facebook" />
                                    </NuxtLink>
                                    <NuxtLink
                                        v-if="author.instagram_username"
                                        :href="`https://instagram.com/${author.instagram_username}`"
                                        target="_blank"
                                        :title="`instagram ${author.instagram_username}`"
                                    >
                                        <Icon name="skill-icons:instagram" />
                                    </NuxtLink>
                                    <NuxtLink
                                        v-if="author.tiktok_username"
                                        :href="`https://tiktok.com/${author.tiktok_username}`"
                                        target="_blank"
                                        :title="`tiktok ${author.tiktok_username}`"
                                        class="text-[var(--color)]"
                                    >
                                        <Icon name="icon-park-solid:tiktok" />
                                    </NuxtLink>
                                    <NuxtLink
                                        v-if="author.twitter_username"
                                        :href="`https://twitter.com/${author.twitter_username}`"
                                        target="_blank"
                                        :title="`twitter ${author.twitter_username}`"
                                        class="text-[var(--color)]"
                                    >
                                        <Icon name="simple-icons:x" />
                                    </NuxtLink>
                                    <NuxtLink
                                        v-if="author.threads_username"
                                        :href="`https://threads.net/${author.threads_username}`"
                                        target="_blank"
                                        :title="`threads ${author.threads_username}`"
                                        class="text-[var(--color)]"
                                    >
                                        <Icon
                                            name="fa6-brands:square-threads"
                                        />
                                    </NuxtLink>
                                    <NuxtLink
                                        v-if="author.youtube_username"
                                        :href="`https://youtube.com/${author.youtube_username}`"
                                        target="_blank"
                                        :title="`youtube ${author.youtube_username}`"
                                    >
                                        <Icon
                                            name="logos:youtube-icon"
                                            size="30"
                                        />
                                    </NuxtLink>
                                </div>
                            </div>
                            <span class="text-size-15px">
                                {{
                                    $dayjs(data.created_at).format(
                                        "MMM. DD, YYYY. h:mm A"
                                    )
                                }}
                            </span>
                        </div>
                    </div>
                </div>
                <div v-if="!runtimeConfig.public.isDevelopment" class="w-full">
                    <ClientOnly>
                        <GoogleAdsHorizontal />
                    </ClientOnly>
                </div>
                <div
                    class="content-render mx-auto relative md:text-lg pt-5 px-1 text-slate-300"
                    v-html="data.content"
                ></div>
                <div class="mt-2 content-render mx-auto relative md:text-lg">
                    <div class="pb-5">
                        <hr />
                    </div>
                    <p>
                        If you enjoy this article and would like to show your
                        support, you can easily do so by buying me a coffee.
                        Your contribution is greatly appreciated!
                    </p>
                    <a
                        href="https://bit.ly/BroJenuel-BuyMeCoffee"
                        target="_blank"
                    >
                        <NuxtImg
                            height="50"
                            width="260"
                            style="border: 0px; height: 50px; width: auto"
                            src="/img/buymecoffee/bmc-button.png"
                            border="0"
                            alt="Buy Me a Coffee at https://www.buymeacoffee.com"
                            class="rounded-lg"
                        />
                    </a>
                </div>
            </article>
            <div class="md:block hidden"></div>
        </main>
        <div
            v-else
            class="py-30 max-w-550px mx-auto lg:px-10px sm:px-100px px-10px pb-5 gap-20 text-center"
        >
            <div class="text-6xl">😓</div>
            <div class="text-lg text-center mt-3">
                The Content Your Trying to View is Not Available or has been
                removed
            </div>
            <div class="inline-block pt-5 pb-50">
                <button
                    class="border px-5 py-5px rounded-full font-bold flex items-center gap-2 hover:text-[var(--primary)] hover:border-[var(--primary)] hover:underline dark:border-white border-gray-900"
                    @click="$router.back()"
                >
                    <Icon name="material-symbols:arrow-back"></Icon>
                    Back
                </button>
            </div>
        </div>
    </Transition>
</template>
