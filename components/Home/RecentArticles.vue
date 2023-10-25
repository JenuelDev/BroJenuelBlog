<script lang="ts" setup>
const client = useSupabaseClient();
const loadingBlogs = ref(true);
const limit = ref(6);
const blogs = ref<Array<any>>([]);
async function getBlogs() {
    loadingBlogs.value = true;
    let query: any = await client
        .from("blogs")
        .select(`title, summary, id, slug, updated_at`)
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
    <!-- grid sm:grid-cols-2 grid-cols-1 gap-3 -->
    <div class="w-full max-w-1100px mx-auto pb-100px md:px-15px px-10px pt-15">
        <div v-show="!loadingBlogs" class="flex flex-wrap md:flex-row flex-col">
            <div
                class="w-full max-w-600px lg:max-w-700px mx-auto mb-20px basis-1/2 flex items-center md:order-1 order-0"
            >
                <div class="px-20px text-8xl">📰</div>
                <div class="text-left">
                    <h2 class="lg:text-5xl text-4xl w-auto whitespace-nowrap">My Recent</h2>
                    <h2 class="lg:text-6xl font-900 text-4xl whitespace-nowrap flex">
                        <span>Articles</span>
                    </h2>
                </div>
            </div>
            <NuxtLink
                v-for="(blog, i) in blogs"
                :key="blog.id"
                :href="`/blog/${blog.slug}`"
                class="group p-2 rounded-md gap-20px cursor-pointer flex gap-1 items-center basis-1/2"
                :style="`order: ${i > 0 ? i + 1 : i}`"
            >
                <div>
                    <h3
                        class="group-hover:underline decoration-[var(--primary)] font-bold group-hover:text-[var(--primary)]"
                        :title="blog.title"
                    >
                        {{ blog.title }}
                    </h3>
                    <div>
                        <div class="opacity-90 content-summary font-RobotoLight">
                            {{ blog.summary }}
                        </div>
                        <span class="opacity-70 text-xs">
                            <span class="icon--solar icon--solar--calendar-bold-duotone" />
                            {{ $dayjs(blog.updated_at).format("DD MMM, YYYY") }}
                        </span>
                    </div>
                </div>
            </NuxtLink>
            <NuxtLink
                to="/blog"
                class="border rounded-md shadow-md basis-1/2 order-9 flex gap-2 items-center justify-center hover:bg-gray-900 hover:text-gray-50 dark:hover:bg-[var(--gray-lightest)] dark:hover:text-[var(--background)] transition-all duration-75 py-2"
            >
                <div class="md:text-left text-center">
                    <h2 class="lg:text-5xl text-4xl w-auto whitespace-nowrap">Read More</h2>
                    <h2 class="lg:text-5xl text-4xl whitespace-nowrap flex">
                        <span>Articles</span>
                        <span class="icon--solar icon--solar--documents-broken"></span>
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
