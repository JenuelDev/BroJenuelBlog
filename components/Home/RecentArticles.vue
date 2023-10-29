<script lang="ts" setup>
const client = useSupabaseClient();
const loadingBlogs = ref(true);
const limit = ref(5);
const blogs = ref<Array<any>>([]);
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
    <div id="recent-articles-area" class="w-full max-w-1100px mx-auto md:px-15px px-10px pt-15">
        <div class="mx-auto mb-20px basis-1/2 flex items-center lg:order-3 sm:order-2 order-0">
            <div class="text-8xl">📰</div>
            <div class="text-left">
                <h2 class="lg:text-5xl sm:text-4xl text-3xl w-auto whitespace-nowrap">My Recent</h2>
                <h2 class="lg:text-6xl font-900 text-4xl whitespace-nowrap flex">
                    <span>Articles</span>
                </h2>
            </div>
        </div>
        <div v-show="!loadingBlogs" class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            <NuxtLink
                v-for="(blog, i) in blogs"
                :key="blog.id"
                :href="`/blog/${blog.slug}`"
                class="group rounded-md cursor-pointer flex flex-col gap-1"
                :style="`order: ${i > 0 ? i + 1 : i}`"
            >
                <div class="h-200px flex items-center overflow-hidden rounded-lg">
                    <NuxtImg
                        v-if="blog.cover_img && !(blog.cover_img.indexOf('youtube') > -1)"
                        :src="blog.cover_img"
                        class="rounded-lg"
                        width="500px"
                        height="250px"
                        format="webp"
                        loading="lazy"
                    />
                </div>
                <span class="opacity-70 text-xs">
                    <span class="icon--solar icon--solar--calendar-bold-duotone" />
                    {{ $dayjs(blog.updated_at).format("DD MMM, YYYY") }}
                </span>
                <h3
                    class="group-hover:underline decoration-[var(--primary)] group-hover:text-[var(--primary)] text-2xl"
                    :title="blog.title"
                >
                    {{ blog.title }}
                </h3>
                <div>
                    <div class="opacity-90 content-summary text-sm">
                        {{ blog.summary }}
                    </div>
                </div>
            </NuxtLink>
            <NuxtLink
                to="/blog"
                class="border rounded-md shadow-md basis-1/2 order-9 flex gap-2 items-center justify-center hover:bg-gray-900 hover:text-gray-50 dark:hover:bg-[var(--gray-lightest)] dark:hover:text-[var(--background)] transition-all duration-75 py-2"
            >
                <div class="md:text-left text-center">
                    <h2 class="lg:text-4xl text-3xl w-auto whitespace-nowrap">Read More</h2>
                    <h2 class="lg:text-4xl text-3xl whitespace-nowrap flex">
                        <span>Articles</span>
                    </h2>
                </div>
            </NuxtLink>
        </div>
        <div v-show="loadingBlogs" class="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <div v-for="count in limit" :key="count" role="status" class="max-w-sm animate-pulse">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.content-summary {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
