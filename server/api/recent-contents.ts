import { serverQueryContent } from "#content/server";

export default defineEventHandler(async (event) => {
    // Fetch all documents
    const docs = await serverQueryContent(event)
        .where({ active: 1 })
        .sort({ _file: -1 })
        .limit(10)
        .find();
    const baseUrl = "https://bro.brojenuel.com";
    return docs.map((doc) => {
        return {
            path: `${baseUrl}${doc._path}`,
            title: doc.title,
            description: doc.description,
            keywords: doc.keywords,
            date: doc.date,
            image: doc.image,
            image_thumbnail: doc.image_thumbnail,
            image_title: doc.image_title,
        };
    });
});
