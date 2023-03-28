<script lang="ts" setup>
const route = useRoute();
const client = useSupabaseClient();
const { setMeta } = useMeta();
const loadingBlogs = ref(true);

useHead({
    ...setMeta({
        title: "BroJenuel - Jenuel Oras Ganawed",
        description:
            "Jenuel Ganawed(BroJenuel/Bro Jenuel) is a developer with a full-stack background and a keen eye for good design. Currently, I focus on building apps and software using web tools.",
        path: route.path,
        keywords: ["brojenuel", "Jenuel", "Jenuel Ganawed", "bro jenuel", "web developer", "software developer"],
        lang: "en",
    }),
});

defineOgImageStatic({
    component: "DefaultOgImage",
    path: route.path,
    title: "BroJenuel",
    description:
        "Jenuel Ganawed(BroJenuel/Bro Jenuel) is a developer with a full-stack background and a keen eye for good design. Currently, I focus on building apps and software using web tools.",
    appName: "www.BroJenuel.com",
});

const blogs = ref<Array<any>>([]);
async function getBlogs() {
    loadingBlogs.value = true;
    let query: any = await client
        .from("blogs")
        .select(`*, blog_meta(*)`)
        .eq("is_active", 1)
        .order("id", { ascending: false })
        .limit(6);
    blogs.value = query.data;
    loadingBlogs.value = false;
}

onMounted(() => {
    getBlogs();
});
</script>
<template>
    <div class="w-full max-w-600px lg:max-w-700px mx-auto mt-50px px-20px">
        <h2 class="mb-3 text-[var(--primary)]">Recent Articles</h2>
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
                <div class="flex flex-col justify-between">
                    <div>
                        <h3
                            class="group-hover:underline decoration-[var(--primary)] text-size-25px font-800 mb-2 font-kumbhsans"
                        >
                            {{ blog.title }}
                        </h3>
                        <div class="text-size-14px opacity-90">{{ blog.summary.slice(0, 100) }}...</div>
                        <span class="font-700 text-[var(--primary)]">{{
                            $dayjs(blog.updated_at).format("DD MMM, YYYY")
                        }}</span>
                    </div>
                </div>
            </NuxtLink>
        </div>
        <div v-show="loadingBlogs" class="grid sm:grid-cols-2 grid-cols-1 gap-3">
            <div role="status" class="max-w-sm animate-pulse">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span class="sr-only">Loading...</span>
            </div>
            <div role="status" class="max-w-sm animate-pulse">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span class="sr-only">Loading...</span>
            </div>
            <div role="status" class="max-w-sm animate-pulse">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span class="sr-only">Loading...</span>
            </div>
            <div role="status" class="max-w-sm animate-pulse">
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
