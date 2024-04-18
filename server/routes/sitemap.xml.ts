import dayjs from "dayjs";
import { SitemapStream, streamToPromise } from "sitemap";
import { serverSupabaseClient } from "#supabase/server";

const domain = "https://brojenuel.com";

const pages = [
    {
        url: domain + "/about",
        lastmod: "2023-12-20",
    },
    {
        url: domain + "/contact",
        lastmod: "2023-04-17",
    },
    {
        url: domain + "/archive",
        lastmod: "2024-04-18",
    },
    {
        url: domain + "/blog",
        lastmod: "2023-04-17",
    },
];

export default defineEventHandler(async (event) => {
    // Fetch all documents
    const client = await serverSupabaseClient(event);
    const sitemap = new SitemapStream({
        hostname: domain,
    });

    for (const page of pages) {
        sitemap.write({
            url: page.url,
            lastmod: page.lastmod,
        });
    }

    const { data }: any = await client
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
