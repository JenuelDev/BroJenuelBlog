<script lang="ts" setup>
const client = useSupabaseClient();
const loadingBlogs = ref(true);
const limit = ref(6);
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
    <div id="recent-articles-area" class="w-full max-w-1100px mx-auto md:px-15px px-10px pt-20">
        <div class="py-3">
            <span class="lg:text-size-24px text-size-20px font-bold"> Recent Articles </span>
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
                        class="rounded-lg w-full"
                        width="300"
                        height="150"
                        format="webp"
                        loading="lazy"
                        quality="80"
                        :alt="blog.title"
                    />
                </div>
                <span class="opacity-70 text-xs">
                    <span class="icon--solar icon--solar--calendar-bold-duotone" />
                    {{ $dayjs(blog.updated_at).format("DD MMM, YYYY") }}
                </span>
                <div>
                    <div class="opacity-90 content-summary">
                        <b> {{ blog.title }} </b>. {{ blog.summary }}
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
