import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    let limit = 100;
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

    const articles = [];

    const client = serverSupabaseClient(event);
    const { data, error } = await client.from("blogs").select().order("id", { ascending: false }).eq("is_active", 1).limit(limit);

    if (error) {
        return error.message;
    }

    for (const doc of data as any) {
        articles.push({
            title: doc.title ?? "-",
            url: `https://brojenuel.com/blog/${doc.slug}`,
            date: doc.updated_at,
            description: doc.summary,
            cover_img: doc.cover_img
        });
    }

    return articles;
});
