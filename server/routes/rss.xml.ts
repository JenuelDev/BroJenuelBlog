import { serverQueryContent } from "#content/server";
import RSS from "rss";

const feed = new RSS({
    title: "BroJenuel Blog",
    site_url: "https://blog.brojenuel.com",
    feed_url: `https://blog.brojenuel.com/rss.xml`,
});

export default defineEventHandler(async (event) => {
    const docs = await serverQueryContent(event)
        .sort({ date: -1 })
        .where({ active: 1 })
        .limit(30000)
        .find();

    for (const doc of docs) {
        feed.item({
            title: doc.title ?? "-",
            url: `https://blog.brojenuel.com${doc._path}`,
            date: doc.date,
            description: doc.description,
        });
    }

    const feedString = feed.xml({ indent: true });
    event.res.setHeader("content-type", "text/xml");
    event.res.end(feedString);
});
