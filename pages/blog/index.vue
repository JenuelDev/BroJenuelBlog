<script lang="ts" setup>
const client = useSupabaseClient();
const route = useRoute();
const { setMeta, googleStream } = useMeta();
const blogInfiniteScrollRef = ref(null);
const targetIsVisible = useElementVisibility(blogInfiniteScrollRef);
const filter = reactive<{
    search: null | string;
    limit: number;
    page: number;
}>({
    search: null,
    limit: 50,
    page: 1,
});
const blogsList: any = ref([]);
const noMoreData = ref(false);

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

    let query = client.from("blogs").select(`*, blog_meta(*)`).eq("is_active", 1).order("id", { ascending: false });

    if (filter.search && filter.search != "") {
        query.textSearch("content", `'${filter.search}'`);
    }

    const { data }: any = await query.range(rangeFrom, rangeTo);

    if (data.length < filter.limit) noMoreData.value = true;

    blogsList.value = [...blogsList.value, ...(data as any)];
    return data;
}

await useAsyncData("blogs", async () => {
    await getBlogs();
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
    component: "DefaultOgImage",
    path: route.path,
    title: "BroJenuel - Blog",
    description: "Learn programming tips, tricks, and best practices to make programming ",
});

const buttonFilters = ["VueJS", "ReactJs", "SEO", "News", "Job", "Health"];
</script>
<template>
    <NuxtLayout>
        <div
            class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px max-w-850px mx-auto mt-90px lg:px-0 sm:px-100px px-10px"
        >
            <Icon name="pajamas:project" />
            Blog
        </div>
        <div
            class="min-h-100vh max-w-850px mx-auto lg:px-10px sm:px-100px px-10px pt-10px pb-5 grid lg:grid-cols-12 grid-cols-1 gap-40px"
        >
            <div class="col-span-12 lg:col-span-3">
                <div class="sticky pt-5 top-50px mx-auto bg-[var(--background)] z-99 w-full">
                    <form @submit.prevent="getBlogs(true)" class="flex gap-7px">
                        <input
                            class="w-full shadow appearance-none border border-[var(--background)] rounded w-full py-2 px-3 text-white leading-tight focus:border-gray-400 focus:outline-none focus:shadow-outline bg-[var(--background-secondary)]"
                            id="username"
                            type="text"
                            placeholder="Search..."
                            v-model="filter.search"
                        />
                        <button
                            type="submit"
                            class="py-2 px-3 flex items-center justify-center bg-[var(--background-secondary)] rounded-sm cursor-pointer hover:bg-[var(--primary)] hover:text-[var(--background)]"
                            name="search article"
                            title="search articles"
                        >
                            <Icon name="ri:search-fill" />
                        </button>
                    </form>
                    <div class="flex lg:flex-col justify-center flex-row mt-20px gap-1 flex-wrap">
                        <button
                            v-for="buttonFilter in buttonFilters"
                            :key="buttonFilter"
                            type="button"
                            class="py-1 px-5 text-sm bg-[var(--background-secondary)] lg:w-full inline-block opacity-75 hover:opacity-100"
                            :class="{
                                '!bg-[var(--primary)] !text-[var(--background)]': filter.search == buttonFilter,
                            }"
                            @click="
                                filter.search = buttonFilter;
                                getBlogs(true);
                            "
                        >
                            {{ buttonFilter }}
                        </button>
                    </div>
                    <div
                        class="text-center pt-20px pb-10px hover:text-[var(--primary)] hover:underline cursor-pointer"
                        @click="
                            filter.search = null;
                            getBlogs(true);
                        "
                    >
                        Clear Filters
                    </div>
                    <div class="text-center">
                        <a
                            class="text-size-10px hover:bg-[var(--primary)] hover:text-[var(--background)] px-3"
                            href="/sitemap.xml"
                            target="_blank"
                        >
                            SITEMAP
                        </a>
                    </div>
                </div>
            </div>

            <div class="sm:col-span-9 col-span-12">
                <div ref="blogInfiniteScroll" class="grid grid-cols-1 gap-3 sm:pl-0 pl-20px" v-if="blogsList.length">
                    <NuxtLink
                        v-for="blog in blogsList"
                        :key="blog.id"
                        :href="`blog/${blog.slug}`"
                        class="p-10px rounded-md transform translate-y-1 hover:translate-y-0 transition-transform cursor-pointer group hover:bg-[var(--background-secondary)]"
                    >
                        <div class="relative group">
                            <div
                                class="absolute h-10px w-10px bg-gray-600 -left-5 group-hover:bg-[var(--primary)] opacity-50 group-hover:opacity-100 transition-all duration-300 rounded-lg delay top-[50%] transform translate-y-[-50%] translate-x-[-50%]"
                            ></div>
                            <div
                                class="absolute h-1px w-1px group-hover:h-50px bg-[var(--primary)] transition-all duration-500 -left-5 top-[50%] opacity-0 group-hover:opacity-100 transform translate-y-[-50%] translate-x-[-50%]"
                            ></div>
                            <div class="absolute top-40%"></div>
                            <div>
                                <span class="group-hover:text-[var(--primary)] text-size-20px font-kumbhsans font-800">
                                    {{ blog.title }}.
                                </span>
                                <span class="opacity-80 font-poly">{{ blog.summary }}</span>
                            </div>
                            <div class="italic flex gap-2 my-1">
                                <ul class="flex gap-1 flex-wrap">
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
                <div>
                    <div
                        v-if="!noMoreData"
                        ref="blogInfiniteScrollRef"
                        class="text-center text-[var(--primary)] pt-20px"
                    >
                        <div style="font-size: 50px">
                            <Icon name="svg-spinners:bars-scale-middle" />
                        </div>
                        <h1>loading</h1>
                    </div>
                    <div v-else ref="blogInfiniteScrollRef" class="text-center text-[var(--primary)] pt-20px">
                        <div style="font-size: 50px">
                            <Icon name="wpf:empty-flag" />
                        </div>
                        <h1>Oops! No More Data</h1>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
