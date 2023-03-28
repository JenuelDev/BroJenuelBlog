const setMeta = (data: {
    title: string;
    description: string;
    keywords?: Array<string>;
    type?: string | undefined;
    image?: string | undefined;
    path: string;
    lang: "en" | "cn";
}) => {
    let metaData = {
        title: data.title,
        htmlAttrs: {
            lang: data.lang,
        },
        meta: [
            {
                name: "description",
                content: data.description,
            },
            {
                name: "keywords",
                content: data.keywords?.join(", "),
            },
            {
                name: "copyright",
                content: "BroJenuel",
            },
            {
                name: "language",
                content: "ES",
            },
            {
                name: "summary",
                content: data.description,
            },
            {
                name: "robots",
                content: "index, follow",
            },
            {
                name: "author",
                content: "BroJenuel, jenuelganawed936@gmail.com",
            },
            {
                name: "url",
                content: "https://brojenuel.com",
            },

            // Social Media Tags
            // FACEBOOK
            {
                name: "og:locale",
                content: "en_US",
            },
            {
                name: "og:type",
                content: data.type ? data.type : "article",
            },
            {
                name: "og:title",
                content: data.title,
            },
            {
                name: "og:description",
                content: data.description,
            },
            {
                name: "og:site_name",
                content: "brojenuel.com",
            },
            {
                name: "og:url",
                content: "https://blog.brojenuel.com" + data.path,
            },

            // TWITTER
            {
                name: "twitter:title",
                content: data.title,
            },
            {
                name: "twitter:description",
                content: data.description,
            },
            {
                name: "twitter:url",
                content: "https://blog.brojenuel.com" + data.path,
            },
            {
                name: "twitter:card",
                content: "summery_large_image",
            },
        ],
    };


    if (data.image) {
        metaData.meta = [
            ...metaData.meta,
            {
                name: "og:image",
                content: data.image,
            },
            {
                name: "twitter:image",
                content: data.image,
            },
        ];
    }

    return metaData;
};

const googleStream = () => ({
    script: [
        {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-J6ESE2YBXS"
        },
        {
            children: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-J6ESE2YBXS');`
        }
    ]
})

export default function () {
    return {
        setMeta,
        googleStream
    };
}
