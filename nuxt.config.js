export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Home - Jess & Regina 2021',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Rubik:300,400,400i,500,600,700'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Loved+by+the+King'
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/css/style.scss', '@/assets/silex/silex.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{ src: '~/plugins/VueFlickity.js', ssr: false }],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    // Page transitions
    pageTransition: {
        name: 'page',
        mode: 'out-in'
    }
}
