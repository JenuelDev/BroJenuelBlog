export const createSEOMeta = (data: any) => [
    { hid: 'title', property: 'title', content: data.title },
    { hid: 'description', name: 'description', content: data.description },
    { hid: 'image', property: 'image', content: data.image },
    {
      hid: 'url',
      property: 'url',
      content: data.url,
  },

    // OGs
    { hid: 'og:title', property: 'og:title', content: data.title },
    {
        hid: 'og:description',
        property: 'og:description',
        content: data.description,
    },
    { hid: 'og:image', property: 'og:image', content: data.image },
    { hid: 'og:image:alt', property: 'og:image:alt', content: 'Cover Image' },
    {
        hid: 'og:url',
        property: 'og:url',
        content: data.url,
    },

    // twitter
    { hid: 'twitter:title', property: 'twitter:title', content: data.title },
    { hid: 'twitter:creator', property: 'twitter:creator', content: '@BroJenuel' },
    {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: data.cardType || 'summary_large_image',
    },
]
