<script lang="ts" setup>
const client = useSupabaseClient();
const { setMeta } = useMeta();
const blogInfiniteScrollRef = ref(null);
const targetIsVisible = useElementVisibility(blogInfiniteScrollRef);

const route = useRoute();
const isHasHistory = ref(false);
const filter = reactive<{
    search: null | string | undefined;
    limit: number;
    page: number;
    cat: string | undefined;
}>({
    search: null,
    limit: 15,
    page: 1,
    cat: undefined,
});
const loading = ref(true);
const blogsList = ref<
    Array<{
        id: string | number;
        slug: string;
        cover_img: string;
        title: string;
        summary: string;
        tags: Array<any>;
        created_at: string | number | null | undefined;
        blog_meta: any;
        updated_at: string | number | null | undefined;
    }>
>([]);
const noMoreData = ref(false);

watch(
    () => targetIsVisible.value,
    (val) => {
        console.log(val);
        if (noMoreData.value) return;
        if (val) {
            filter.page += 1;
            getBlogs();
        }
    }
);

async function getBlogs(isReset = false) {
    if (isReset) {
        blogsList.value = [];
        filter.page = 1;
        noMoreData.value = false;
    }

    noMoreData.value = false;
    let rangeFrom = filter.page * filter.limit - filter.limit;
    rangeFrom = rangeFrom > 0 ? rangeFrom + 1 : rangeFrom;
    let rangeTo = filter.page * filter.limit;
    let query = client
        .from("blogs")
        .select(
            `id, title, summary, slug, updated_at, cover_img, blog_meta(*), tags`
        )
        .eq("is_active", 1)
        .order("id", { ascending: false });

    if (filter.search && filter.search != "") {
        query.textSearch("search_blogs", `'${filter.search}'`);
    }

    if (filter.cat && filter.cat != "") {
        query.textSearch("keywords_str", `'${filter.cat}'`);
    }

    loading.value = true;
    const { data } = await query.range(rangeFrom, rangeTo);

    loading.value = false;
    if ((data as any).length < filter.limit) noMoreData.value = true;
    blogsList.value = [...blogsList.value, ...(data as any)];
    return data;
}

await useAsyncData("blogs", async () => {
    if (route.query.search) filter.search = route.query.search as any;
    if (route.query.cat) filter.cat = route.query.cat as any;
    await getBlogs(true);
});

useHead({
    ...setMeta({
        title: "Blog - BroJenuel",
        description: "Learn about tips and tricks about tech and programming.",
        path: route.path,
        keywords: ["brojenuel", "Jenuel", "Ganawed", "tech", "programming"],
        lang: "en",
    }),
});

defineOgImageComponent("BroJenuelOgImage", {
    title: "BroJenuel - Blog",
    description:
        "Learn programming tips, tricks, best practices to make programming and other information that will benefit you.",
});

function searchRoute() {
    getBlogs(true);
}

onMounted(() => {
    isHasHistory.value = window.history.length > 0;
});
</script>
<template>
    <div class="relative">
        <HomePointer />
        <div class="mx-auto max-w-2xl px-6 pt-5 sm:pt-0">
            <div class="pt-0 sm:pt-10 pb-10">
                <div class="flex justify-between flex-col sm:flex-row">
                    <div
                        v-if="isHasHistory"
                        @click="$router.go(-1)"
                        class="hover:text-teal-300 pb-3 sm:pb-0 cursor-pointer"
                    >
                        <Icon name="ic:baseline-arrow-back" class="w-6 h-6" />
                        BroJenuel
                    </div>
                    <NuxtLink v-else to="/" class="hover:text-teal-300 py-10">
                        <Icon name="ic:baseline-arrow-back" class="w-6 h-6" />
                        BroJenuel
                    </NuxtLink>
                    <form
                        @submit.prevent="searchRoute"
                        class="flex items-center mb-1"
                    >
                        <div class="relative">
                            <input
                                class="bg-slate-800 appearance-none border-2 border-gray-200 rounded px-4 text-gray-700 leading-tight focus:outline-none focus:text-slate-200 focus:border-purple-500 border-none block h-[30px]"
                                type="text"
                                placeholder="Search..."
                                v-model="filter.search"
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div class="grid min-h-[100vh] grid-cols-1 gap-10 group/list">
                <NuxtLink
                    v-for="(blog, i) in blogsList"
                    :key="`${blog.id}-${i}`"
                    :href="`/blog/${blog.slug}`"
                    :style="`order: ${i > 0 ? i + 1 : i}`"
                    class="rounded-md cursor-pointer gap-1 decoration-none relative pb-1 transition-all md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 grid grid-cols-1 sm:grid-cols-8 text-center sm:text-left"
                >
                    <NuxtImg
                        v-if="blog.cover_img"
                        :src="blog.cover_img"
                        class="rounded-lg w-150px mx-auto col-span-2"
                        width="300"
                        height="150"
                        format="webp"
                        loading="lazy"
                        quality="50"
                        :alt="blog.title"
                    />

                    <div
                        class="content-summary leading-5 col-span-6 text-slate-200"
                    >
                        <div class="opacity-70 text-xs">
                            <span
                                class="icon--solar icon--solar--calendar-bold-duotone"
                            />
                            {{ $dayjs(blog.updated_at).format("DD MMM, YYYY") }}
                        </div>
                        <b> {{ blog.title }} </b>.
                        <div class="h-70 overflow-hidden">
                            <p class="truncate">{{ blog.summary }}</p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
            <div v-show="loading" class="text-center pt-20px">
                <div style="font-size: 50px">
                    <Icon name="svg-spinners:bars-scale-middle" />
                </div>
                <div>loading</div>
            </div>
            <div ref="blogInfiniteScrollRef" class="mb-10">
                <div v-show="noMoreData" class="text-center pt-20px">
                    <div style="font-size: 50px">
                        <Icon name="wpf:empty-flag" />
                    </div>
                    <div>Oops! No More Data</div>
                </div>
            </div>
        </div>
    </div>
</template>
