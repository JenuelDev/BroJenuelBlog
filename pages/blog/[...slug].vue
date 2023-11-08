<script lang="ts" setup>
const route = useRoute();
const { setMeta } = useMeta();
const client = useSupabaseClient();
const slug = route.params.slug[0];
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
    const author: any = await client.from("user_profile").select("*").eq("user_id", data.value.author).single();
    return author.data;
});

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
        path: data.value && data.value.slug ? `/blog/${data.value.slug}` : route.path,
        keywords: data.value ? data.value.keywords : ["no found"],
        lang: "en",
        ...(coverImageLink.value
            ? {
                  image: coverImageLink.value,
              }
            : {}),
        ...(["BroJenuel", "KateAwisan"].includes(
            author && author.data.value && author.data.value.username ? author.data.value.username : "BroJenuel"
        )
            ? {}
            : {
                  author:
                      author && author.data.value && author.data.value.username
                          ? author.data.value.username
                          : "BroJenuel",
              }),
    }),
});
</script>
<template>
    <OgImageStatic
        v-if="!coverImageLink"
        :description="data ? data.summary : 'Page Not Found'"
        :path="route.path"
        :title="data ? data.title : 'Page Not Found'"
        appName="www.BroJenuel.com"
        component="DefaultOgImage"
    />
    <NuxtLayout name="bloglayout">
        <Transition>
            <main v-if="data" class="pt-70px w-full pb-10 relative">
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
                                class="h-40px w-40px bg-[#FFDD00] rounded-full flex items-center justify-center relative group text-dark-700"
                                href="https://bit.ly/brojenuel-KOFI"
                                alt="Jenuel Ganawed Buy me Coffee"
                                target="_blank"
                            >
                                <Icon name="cib:ko-fi" size="23" class="ml-3px" />
                                <span
                                    class="absolute left-50px whitespace-nowrap bg-[#FFDD00] opacity-0 group-hover:opacity-100 transition-all rounded-lg p-2 font-bold pointer-events-none text-dark-700"
                                >
                                    Buy Me A Coffee 😇
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <article class="w-full max-w-800px mx-auto px-10px lg:pt-0 pt-70px">
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
                            <h1 class="lg:text-5xl md:text-4xl md:text-3xl pb-10px font-RobotoBold">
                                {{ data.title }}
                            </h1>
                            <p class="md:text-2xl sm:text-xl md font-RobotoThin font-100 mb-5">
                                <span class="text-[var(--primary)]">/</span>
                                {{ data.summary }}
                            </p>
                            <div class="flex flex-wrap gap-3 mb-3">
                                <div
                                    v-for="tags in data.tags"
                                    :class="`tag-${tags}`"
                                    class="tag tag-sm !text-size-18px"
                                >
                                    #{{ tags }}
                                </div>
                            </div>
                            <div class="text-lg mb-2">
                                <div v-if="author.data.value" class="mt-3 flex flex-wrap gap-2 items-center">
                                    ✍️
                                    <NuxtLink
                                        :href="author.data.value.website ?? '#'"
                                        target="_blank"
                                        title="authors website"
                                    >
                                        <h3
                                            v-if="author.data.value.first_name || author.data.value.last_name"
                                            class="text-size-20px hover:text-[var(--primary)] underline"
                                        >
                                            {{ author.data.value.first_name }} {{ author.data.value.last_name }}
                                        </h3>
                                        <h3
                                            v-else-if="author.data.value.username"
                                            class="text-size-20px hover:text-[var(--primary)] underline"
                                        >
                                            {{ author.data.value.username }}
                                        </h3>
                                    </NuxtLink>
                                    <div class="flex items-center gap-3 text-size-20px">
                                        <NuxtLink
                                            v-if="author.data.value.facebook_username"
                                            :href="`https://facebook.com/${author.data.value.facebook_username}`"
                                            target="_blank"
                                            :title="`facebook ${author.data.value.facebook_username}`"
                                        >
                                            <Icon name="logos:facebook" />
                                        </NuxtLink>
                                        <NuxtLink
                                            v-if="author.data.value.instagram_username"
                                            :href="`https://instagram.com/${author.data.value.instagram_username}`"
                                            target="_blank"
                                            :title="`instagram ${author.data.value.instagram_username}`"
                                        >
                                            <Icon name="skill-icons:instagram" />
                                        </NuxtLink>
                                        <NuxtLink
                                            v-if="author.data.value.tiktok_username"
                                            :href="`https://tiktok.com/${author.data.value.tiktok_username}`"
                                            target="_blank"
                                            :title="`tiktok ${author.data.value.tiktok_username}`"
                                        >
                                            <Icon name="icon-park-solid:tiktok" />
                                        </NuxtLink>
                                        <NuxtLink
                                            v-if="author.data.value.twitter_username"
                                            :href="`https://twitter.com/${author.data.value.twitter_username}`"
                                            target="_blank"
                                            :title="`twitter ${author.data.value.twitter_username}`"
                                        >
                                            <Icon name="simple-icons:x" />
                                        </NuxtLink>
                                        <NuxtLink
                                            v-if="author.data.value.threads_username"
                                            :href="`https://threads.net/${author.data.value.threads_username}`"
                                            target="_blank"
                                            :title="`threads ${author.data.value.threads_username}`"
                                        >
                                            <Icon name="fa6-brands:square-threads" />
                                        </NuxtLink>
                                        <NuxtLink
                                            v-if="author.data.value.youtube_username"
                                            :href="`https://youtube.com/${author.data.value.youtube_username}`"
                                            target="_blank"
                                            :title="`youtube ${author.data.value.youtube_username}`"
                                        >
                                            <Icon name="logos:youtube-icon" />
                                        </NuxtLink>
                                    </div>
                                </div>
                                <span class="text-size-15px">
                                    {{ $dayjs(data.created_at).format("MMM. DD, YYYY. h:mm A") }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-if="!runtimeConfig.public.isDevelopment" class="w-full">
                        <ClientOnly>
                            <GoogleAdsHorizontal />
                        </ClientOnly>
                    </div>
                    <div class="content-render mx-auto relative md:text-lg pt-5 px-1" v-html="data.content"></div>
                    <div class="mt-2 content-render mx-auto relative md:text-lg">
                        <div class="pb-5">
                            <hr />
                        </div>
                        <p>
                            If you enjoy this article and would like to show your support, you can easily do so by
                            making a donation through Ko-fi. Your contribution is greatly appreciated!
                        </p>
                        <a href="https://bit.ly/brojenuel-KOFI" target="_blank">
                            <NuxtImg
                                height="50"
                                width="260"
                                style="border: 0px; height: 50px; width: auto"
                                src="https://storage.ko-fi.com/cdn/brandasset/kofi_button_red.png"
                                border="0"
                                alt="Buy Me a Coffee at ko-fi.com"
                            />
                        </a>
                    </div>
                </article>
                <div class="md:block hidden"></div>
            </main>
            <div v-else class="py-30 max-w-550px mx-auto lg:px-10px sm:px-100px px-10px pb-5 gap-20 text-center">
                <div class="text-6xl">😓</div>
                <div class="text-lg text-center mt-3">
                    The Content Your Trying to View is Not Available or has been removed
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
    </NuxtLayout>
</template>
