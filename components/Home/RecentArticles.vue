<script lang="ts" setup>
const client = useSupabaseClient();
const loadingBlogs = ref(true);
const limit = ref(2);
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
    <div class="w-full max-w-600px lg:max-w-700px mx-auto mt-50px">
        <div class="w-full max-w-600px lg:max-w-700px mx-auto mt-50px px-20px mb-20px">
            <div class="font-800 text-size-20px text-[var(--primary)]">Recent Articles</div>
            <div class="pt-5">
                <div class="tracking-wide">
                    Creating an Article is one way of sharing your knowledge with the world. It's also a great way to
                    learn new things.
                </div>
            </div>
        </div>
        <div v-show="!loadingBlogs" class="grid sm:grid-cols-2 grid-cols-1 gap-3">
            <NuxtLink
                v-for="(blog, i) in blogs"
                :key="blog.id"
                :href="`/blog/${blog.slug}`"
                class="group p-2 rounded-md gap-20px cursor-pointer flex gap-1"
            >
                <div>
                    <div
                        class="bg-[var(--background-secondary)] h-25px w-25px rounded-full flex items-center justify-center text-[var(--primary)]"
                    >
                        {{ i + 1 }}
                    </div>
                </div>
                <div>
                    <h3
                        class="group-hover:underline decoration-[var(--primary)] text-size-25px font-800 mb-2 font-kumbhsans"
                        :title="blog.title"
                    >
                        {{ blog.title }}
                    </h3>
                    <div>
                        <div class="opacity-90 content-summary font-RobotoLight">
                            {{ blog.summary }}
                        </div>
                        <span class="font-700 text-[var(--primary)]">{{
                            $dayjs(blog.updated_at).format("DD MMM, YYYY")
                        }}</span>
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
            <NuxtLink class="btn btn-filled w-auto" href="/blog" alt="Read More Blogs">Read More Articles</NuxtLink>
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
