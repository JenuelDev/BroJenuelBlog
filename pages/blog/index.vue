<script lang="ts" setup>
const client = useSupabaseClient();
const route = useRoute();
const { setMeta, googleStream } = useMeta();
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
    }>
>([]);
const noMoreData = ref(false);
const frameworks = [
    {
        key: "vuejs",
        icon: "logos:vue",
        label: "Vue JS",
    },
    {
        key: "reactjs",
        icon: "ri:reactjs-line",
        label: "React JS",
    },
    {
        key: "angular",
        icon: "ph:angular-logo-fill",
        label: "Angular",
    },
    {
        key: "laravel",
        icon: "devicon:laravel",
        label: "Laravel",
    },
];

const otherCategories = [
    {
        key: "earn",
        icon: "streamline:money-cash-search-dollar-search-pay-product-currency-query-magnifying-cash-business-money-glass",
        label: "Earn/Earn Online",
    },
    {
        key: "ai",
        icon: "icon-park-outline:reverse-operation-in",
        label: "AI",
    },
];

const ToolCategories = [
    {
        key: "javascript",
        icon: "logos:javascript",
        label: "JavaScript",
    },
    {
        key: "html",
        icon: "skill-icons:html",
        label: "HTML",
    },
    {
        key: "css",
        icon: "skill-icons:css",
        label: "CSS",
    },
    {
        key: "php",
        icon: "logos:php",
        label: "PHP",
    },
];

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
        query.textSearch("search_blogs", `'${filter.cat}'`);
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
    ...(process.env.NODE_ENV != "development" ? googleStream() : {}),
});

defineOgImageStatic({
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
    <NuxtLayout name="nofooter">
        <div
            class="mt-70px min-h-100vh max-w-850px mx-auto lg:px-10px sm:px-100px px-10px md:pt-0px pt-90px pb-5 gap-20"
        >
            <div class="mb-5">
                <div class="flex justify-between">
                    <div>
                        <span class="text-[var(--primary)] font-800">Blogs</span>
                    </div>
                    <form @submit.prevent="searchRoute" class="flex items-center mb-1">
                        <div class="relative">
                            <input
                                class="w-full shadow appearance-none border border-[var(--background)] rounded w-full dark:text-white leading-tight focus:border-gray-400 focus:outline-none focus:shadow-outline bg-[var(--background-secondary)] lg:h-30px lg:px-3 h-40px"
                                type="text"
                                placeholder="Search..."
                                v-model="filter.search"
                            />
                            <Icon
                                v-if="filter.search"
                                class="absolute right-5px top-6px cursor-pointer"
                                name="material-symbols:cancel"
                                @click="
                                    filter.search = null;
                                    searchRoute();
                                "
                            />
                        </div>
                        <button
                            type="submit"
                            class="w-full shadow appearance-none border border-[var(--background)] rounded dark:text-white leading-tight focus:border-gray-400 focus:outline-none focus:shadow-outline bg-[var(--background-secondary)] lg:h-30px lg:w-50px w-40px h-40px flex items-center justify-center"
                            name="search article"
                            title="search articles"
                        >
                            <Icon name="ri:search-fill" />
                        </button>
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
            <div class="sm:col-span-9 col-span-11">
                <div class="min-h-[100vh]">
                    <div class="grid grid-cols-1 gap-3 sm:pl-0 pl-20px" v-if="blogsList.length">
                        <NuxtLink
                            v-for="blog in blogsList"
                            :key="blog.id"
                            :href="`blog/${blog.slug}`"
                            class="p-10px rounded-md transform translate-y-1 hover:translate-y-0 transition-transform cursor-pointer group hover:bg-[var(--background-secondary)] flex md:flex-row flex-col gap-3"
                        >
                            <div
                                v-if="blog.cover_img && !(blog.cover_img.indexOf('youtube') > -1)"
                                class="md:order-2 rounded-2xl overflow-hidden"
                            >
                                <img :src="blog.cover_img" class="float-right" />
                            </div>
                            <div class="relative group md:order-1">
                                <div
                                    class="absolute h-10px w-10px bg-gray-600 -left-5 group-hover:bg-[var(--primary)] opacity-50 group-hover:opacity-100 transition-all duration-300 rounded-lg delay top-[50%] transform translate-y-[-50%] translate-x-[-50%]"
                                ></div>
                                <div
                                    class="absolute h-1px w-1px group-hover:h-50px bg-[var(--primary)] transition-all duration-500 -left-5 top-[50%] opacity-0 group-hover:opacity-100 transform translate-y-[-50%] translate-x-[-50%]"
                                ></div>
                                <div class="absolute top-40%"></div>
                                <div>
                                    <span
                                        class="group-hover:text-[var(--primary)] text-size-20px font-kumbhsans font-800"
                                    >
                                        {{ blog.title }}.
                                    </span>
                                    <span class="opacity-80 font-poly">{{ blog.summary }}</span>
                                </div>
                                <div class="flex gap-2 my-1">
                                    <ul class="flex gap-1 flex-wrap text-size-13px">
                                        <li v-for="tags in blog.tags" :key="tags" :class="`tag-${tags}`" class="tag">
                                            #{{ tags }}
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <span class="italic font-500 opacity-50 whitespace-nowrap flex gap-20px">
                                        {{ $dayjs(blog.created_at).format("MMM. DD, YYYY") }}
                                        <span class="flex items-center gap-7px">
                                            <Icon name="ic:baseline-remove-red-eye" />
                                            {{ blog.blog_meta ? commafy(blog.blog_meta.view_count) : 0 }}
                                        </span>
                                    </span>
                                </div>
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
