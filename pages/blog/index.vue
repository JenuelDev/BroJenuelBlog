<script lang="ts" setup>
const client = useSupabaseClient();
const route = useRoute();
const { setMeta } = useMeta();
const blogInfiniteScrollRef = ref(null);
const targetIsVisible = useElementVisibility(blogInfiniteScrollRef);
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
const { ToolCategories, frameworks, otherCategories } = useCategories();

watch(
    () => targetIsVisible.value,
    (val) => {
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
        .select(`id, title, summary, slug, updated_at, cover_img, blog_meta(*), tags`)
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
useHead({
    ...setMeta({
        title: "Blog - BroJenuel",
        description:
            "Learn about tips and tricks about programming. Read or watch tutorials that will help you on jour journey as a developer.",
        path: route.path,
        keywords: ["brojenuel", "Jenuel", "Jenuel Ganawed", "bro jenuel", "web developer", "blog"],
        lang: "en",
    }),
});

defineOgImage({
    appName: "www.BroJenuel.com",
    component: "DefaultOgImage",
    path: route.path,
    title: "BroJenuel - Blog",
    description:
        "Learn programming tips, tricks, best practices to make programming and other information that will benefit you.",
});

function searchRoute() {
    getBlogs(true);
}
</script>
<template>
    <NuxtLayout name="bloglayout">
        <div class="mt-70px min-h-100vh max-w-700px mx-auto lg:px-10px px-10px pb-5 gap-20">
            <div class="mb-5">
                <div class="flex justify-between">
                    <div>
                        <span class="text-[var(--primary)] text-2xl font-800">Blogs</span>
                    </div>
                    <form @submit.prevent="searchRoute" class="flex items-center mb-1">
                        <div class="relative">
                            <input
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 border-none block h-30px"
                                type="text"
                                placeholder="Search..."
                                v-model="filter.search"
                            />
                        </div>
                    </form>
                </div>
                <div class="flex gap-10px">
                    <DropMenu
                        label="Framework"
                        :menuOptions="frameworks"
                        v-model="filter.cat"
                        @change="searchRoute"
                        position="right"
                    />
                    <DropMenu
                        label="Tools"
                        :menuOptions="ToolCategories"
                        v-model="filter.cat"
                        @change="searchRoute"
                        position="right"
                    />
                    <DropMenu
                        label="Others"
                        :menuOptions="otherCategories"
                        v-model="filter.cat"
                        @change="searchRoute"
                        position="right"
                    />
                </div>
            </div>
            <div class="">
                <div class="min-h-[100vh]">
                    <div class="grid sm:grid-cols-2 grid-cols-1 gap-10">
                        <NuxtLink
                            v-for="(blog, i) in blogsList"
                            :key="blog.id"
                            :href="`/blog/${blog.slug}`"
                            class="group rounded-md cursor-pointer gap-1 decoration-none text-[var(--color)]"
                            :style="`order: ${i > 0 ? i + 1 : i}`"
                        >
                            <div class="flex items-center justify-center overflow-hidden rounded-lg mb-3">
                                <NuxtImg
                                    v-if="blog.cover_img && !(blog.cover_img.indexOf('youtube') > -1)"
                                    :src="blog.cover_img"
                                    class="rounded-lg w-full h-150px"
                                    width="300"
                                    height="150"
                                    format="webp"
                                    loading="lazy"
                                    quality="80"
                                    :alt="blog.title"
                                />
                                <div
                                    v-else
                                    class="flex items-center justify-center bg-gray-900 w-full h-[90%] text-gray-50 rounded-lg p-5 text-center h-160px"
                                >
                                    {{ blog.title }}
                                </div>
                            </div>
                            <span class="opacity-70 text-xs">
                                <span class="icon--solar icon--solar--calendar-bold-duotone" />
                                {{ $dayjs(blog.updated_at).format("DD MMM, YYYY") }}
                            </span>
                            <div class="opacity-90 content-summary leading-5">
                                <b> {{ blog.title }} </b>. <span class="opacity-70">{{ blog.summary }}</span>
                            </div>
                        </NuxtLink>
                    </div>
                    <div v-show="loading" class="text-center text-[var(--primary)] pt-20px">
                        <div style="font-size: 50px">
                            <Icon name="svg-spinners:bars-scale-middle" />
                        </div>
                        <div>loading</div>
                    </div>
                </div>
                <div ref="blogInfiniteScrollRef">
                    <div v-show="noMoreData" class="text-center text-[var(--primary)] pt-20px">
                        <div style="font-size: 50px">
                            <Icon name="wpf:empty-flag" />
                        </div>
                        <div>Oops! No More Data</div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
