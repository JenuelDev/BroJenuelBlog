export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Jenuel Ganawed - Blog',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'This is BroJenuel Blog Site.',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    target: 'static',

    loading: {
        color: 'white',
        height: '5px',
        continuous: true,
    },
    env: {
        baseUrl: 'https://bro-jenuel-blog.netlify.app/',
        main_base_URL: 'https://brojenuel-blog.ml',
    },

    pageTransition: {
        name: 'page',
        mode: 'out-in',
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/styles/main.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxtjs/tailwindcss',
    ],

    generate: {
        routes: [
            '/view/javascript-tips-tricks-n1',
            '/view/making-own-portfolio',
            '/view/my-first-blog',
            '/view/nuxt-pwa-update',
        ],
    },

    tailwindcss: {
        jit: true,
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
        '@nuxtjs/dayjs',
        // keep this module at the end
        '@nuxtjs/sitemap',
    ],

    sitemap: {
        // options
        hostname: process.env.main_base_URL,
        gzip: true,
        exclude: ['/secret', '/admin/**'],
        routes: [
            '/about',
            '/contact',
            {
                url: '/view/javascript-tips-tricks-n1',
                changefreq: 'daily',
                priority: 1,
                lastmodISO: '2017-06-30T13:30:00.000Z',
            },
        ],
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}
