import { serverSupabaseClient } from "#supabase/server";
import RSS from "rss";

export default defineEventHandler(async (event) => {
    let limit = 5000;
    const query = getQuery(event);

    if (query.limit) {
        try {
            limit = parseInt(query.limit as string);
        } catch (e) {
            throw createError({
                statusCode: 400,
                statusMessage: "Limit cant be parsed",
            });
        }
    }

    const feed = new RSS({
        title: "BroJenuel - Articles",
        site_url: "https://brojenuel.com",
        feed_url: `https://brojenuel.com/rss.xml`,
        description:
            "Latest articles in BroJenuel Site by Jenuel Oras Ganawed.",
        copyright: `${new Date().getFullYear()} BroJenuel`,
        language: "en",
    });

    const client = await serverSupabaseClient(event);
    const { data, error }: any = await client
        .from("blogs")
        .select()
        .order("id", { ascending: false })
        .eq("is_active", 1)
        .limit(limit);

    for (const doc of data) {
        feed.item({
            title: doc.title ?? "-",
            url: `https://brojenuel.com/blog/${doc.slug}`,
            date: doc.updated_at,
            description: doc.summary,
        });
    }

    const feedString = feed.xml({ indent: true });
    event.node.res.setHeader("content-type", "text/xml");
    event.node.res.end(feedString);
});
