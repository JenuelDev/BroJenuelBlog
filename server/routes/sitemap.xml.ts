import dayjs from "dayjs";
import { SitemapStream, streamToPromise } from "sitemap";
import { serverSupabaseClient } from "#supabase/server";

const domain = "https://brojenuel.com";

const pages = [
    {
        url: domain + "/timeline",
        lastmod: "2023-02-17",
    },
    {
        url: domain + "/contact",
        lastmod: "2023-02-17",
    },
    {
        url: domain + "/my-work",
        lastmod: "2023-02-17",
    },
    {
        url: domain + "/blog",
        lastmod: "2023-02-17",
    },
];

export default defineEventHandler(async (event) => {
    // Fetch all documents
    const client = serverSupabaseClient(event);
    const sitemap = new SitemapStream({
        hostname: domain,
    });

    for (const page of pages) {
        sitemap.write({
            url: page.url,
            lastmod: page.lastmod,
        });
    }

    const { data, error }: any = await client
        .from("blogs")
        .select()
        .order("id", { ascending: false })
        .eq("is_active", 1)
        .limit(5000);

    for (const blog of data) {
        sitemap.write({
            url: `${domain}/blog/${blog.slug}`,
            changefreq: "monthly",
            lastmod: dayjs(blog.updated_at).format("YYYY-MM-DD"),
        });
    }

    sitemap.end();
    return streamToPromise(sitemap);
});
