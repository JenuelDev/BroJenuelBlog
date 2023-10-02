<script lang="ts" setup>
const client = useSupabaseClient();
const loadingBlogs = ref(true);
const limit = ref(4);
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
    <div class="w-full max-w-1000px mx-auto mt-100px pb-100px">
        <div class="w-full max-w-600px lg:max-w-700px mx-auto mt-50px px-20px mb-20px text-center">
            <div class="md:text-size-32px text-size-24px font-bold mb-5">Recent Articles</div>
            <div class="mt-2 text-lg">
                Creating an Article is one way of sharing your knowledge with the world. It's also a great way to learn
                new things.
            </div>
        </div>
        <div v-show="!loadingBlogs" class="grid sm:grid-cols-2 grid-cols-1 gap-3">
            <NuxtLink
                v-for="(blog, i) in blogs"
                :key="blog.id"
                :href="`/blog/${blog.slug}`"
                class="group p-2 rounded-md gap-20px cursor-pointer flex gap-1 items-center"
            >
                <div>
                    <div
                        class="bg-[var(--background-secondary)] h-25px w-25px rounded-full flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] !group-hover:text-[var(--background)]"
                    >
                        {{ i + 1 }}
                    </div>
                </div>
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
        <div class="flex justify-center mt-30px">
            <NuxtLink
                to="/blog"
                class="border px-5 py-5px rounded-full font-bold flex items-center gap-2 hover:text-[var(--primary)] hover:border-[var(--primary)] hover:underline dark:border-white border-gray-900"
            >
                <span class="icon--solar icon--solar--documents-broken text-25px"></span>
                Read More Articles
            </NuxtLink>
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
