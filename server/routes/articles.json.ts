import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    let limit = 100;

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

    const client = await serverSupabaseClient(event);
    let clientQuery = client
        .from("blogs")
        .select(
            `id, title, summary, slug, updated_at, cover_img, blog_meta(*), tags`
        )
        .eq("is_active", 1)
        .order("id", { ascending: false })
        .limit(limit);

    if (query.search && query.search != "") {
        clientQuery.textSearch("search_blogs", `'${query.search}'`);
    }

    if (query.cat && query.cat != "") {
        clientQuery.textSearch("keywords_str", `'${query.cat}'`);
    }

    const { data, error } = await clientQuery;

    if (error) {
        return error.message;
    }

    return data;
});
