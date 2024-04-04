<script lang="ts" setup>
const client = useSupabaseClient();
const loadingBlogs = ref(true);
const limit = ref(4);
const blogs = ref<
    Array<{
        title: string;
        summary: string;
        id: number;
        slug: string;
        updated_at: string;
        cover_img: string;
    }>
>([]);
async function getBlogs() {
    loadingBlogs.value = true;
    let query: any = await client
        .from("blogs")
        .select(`title, summary, id, slug, updated_at, cover_img`)
        .eq("is_active", 1)
        .order("id", { ascending: false })
        .limit(limit.value);
    blogs.value = query.data;
    loadingBlogs.value = false;
}

onMounted(() => {
    getBlogs();
});
</script>
<template>
    <div id="recent-articles-area" class="w-full max-w-700px mx-auto pt-5">
        <div class="py-3">
            <span class="lg:text-2xl font-bold"> Recent Blog Posts </span>
        </div>
        <div v-show="!loadingBlogs" class="grid grid-cols-1 gap-5">
            <NuxtLink
                v-for="(blog, i) in blogs"
                :key="blog.id"
                :href="`/blog/${blog.slug}`"
                class="group rounded-md cursor-pointer text-[var(--color)] decoration-none leading-6"
                :style="`order: ${i > 0 ? i + 1 : i}`"
            >
                <span class="opacity-70">
                    <span
                        class="icon--solar icon--solar--calendar-bold-duotone"
                    />
                    {{ $dayjs(blog.updated_at).format("DD MMM, YYYY") }}
                </span>
                <div class="opacity-90 content-summary">
                    <b class="text-lg group-hover:underline">
                        {{ blog.title }} </b
                    >.
                    <span class="opacity-80">{{ blog.summary }}</span>
                </div>
            </NuxtLink>
        </div>
        <div v-show="loadingBlogs" class="grid grid-cols-1 gap-4">
            <div
                v-for="count in limit"
                :key="count"
                role="status"
                class="animate-pulse"
            >
                <div
                    class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-full"
                ></div>
                <div
                    class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"
                ></div>
                <div
                    class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"
                ></div>
                <div
                    class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"
                ></div>
                <div
                    class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"
                ></div>
                <div
                    class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"
                ></div>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div class="pt-5">
            <NuxtLink
                to="/blog"
                class="group inline-flex items-center rounded border border-neutral-200 bg-neutral-200 p-4 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            >
                Read more articles
                <Icon
                    size="20"
                    name="material-symbols:arrow-right-alt"
                    class="ml-3 group-hover:animate-shake-x"
                />
            </NuxtLink>
        </div>
    </div>
</template>
<style lang="scss">
.content-summary {
    font-weight: 100 !important;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
