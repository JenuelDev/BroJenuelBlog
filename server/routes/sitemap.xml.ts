import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";

export default defineEventHandler(async (event) => {
    // Fetch all documents
    const docs = await serverQueryContent(event)
        .where({ active: 1 })
        .sort({ _file: -1 })
        .limit(30000)
        .find();

    const sitemap = new SitemapStream({
        hostname: "https://blog.brojenuel.com",
    });

    for (const doc of docs) {
        sitemap.write({
            url: doc._path,
            changefreq: "monthly",
            lastmod: doc.date,
        });
    }
    sitemap.end();

    return streamToPromise(sitemap);
});
