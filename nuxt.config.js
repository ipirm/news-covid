routerBase = {
    router: {
        base: '/'
    }
},
module.exports = {
    env: {
        imagesUrl: 'https://covid.info.az/storage' || 'http://localhost:3000'
    },
    head: {
        title: 'Covid-19 AZE',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap'
            }
        ]
    },
    /*
    ** Customize the progress bar color
    */

    loading: {color: '#354D8A'},
    /*
    ** Build configuration
    */
    plugins: [
        '~plugins/swiper',
        '~plugins/moment',
        {src: '~plugins/bootstrap-vue', ssr: true},
        {src: '~plugins/bus', ssr: true},
        {src: '~plugins/mixins/user', ssr: true},
        {src: '~plugins/components', ssr: true},
        {src: '~plugins/autocomplete', ssr: true},
        {src: '~plugins/vue-select', ssr: false},
        {src: '~plugins/marquee-text', ssr: false},
        {src: '~plugins/video', ssr: false},
        {src: '~plugins/scroll', ssr: false},
        {src: '~plugins/map', ssr: true},
        {src: '~plugins/vue-backtotop', ssr: false},
        {src: '~plugins/vue-scrollto'},
        {src: '~plugins/number-filter'},
        {src: '~plugins/truncate'},
        {src: '~plugins/click-outside'},
        { src: '~plugins/ga.js', ssr: false }
    ],
    css: [
        {src: '~assets/scss/app.scss', lang: 'scss'}
    ],
    modules: [
        [
            'nuxt-i18n',
            {
                noPrefixDefaultLocale: true,
                locales: [
                    {code: 'az', iso: 'az-AZ', file: 'az.json'},
                    {code: 'ru', iso: 'ru-RU', file: 'ru.json'}
                ],
                defaultLocale: 'az',
                vueI18n: {
                    fallbackLocale: 'az'
                },
                lazy: true,
                langDir: 'locales/'
            }
        ],
        '@nuxtjs/svg-sprite',
        '@nuxtjs/axios',
        '@nuxtjs/auth'
    ],
    axios: {
        baseURL: 'https://covid.info.az/api/'
    },
    auth: {
        redirect: false,
        strategies: {
            local: {
                endpoints: {
                    login: {url: 'login', method: 'post', propertyName: 'meta.token'},
                    user: {url: 'user', method: 'get', propertyName: 'data'},
                    logout: {url: 'logout', method: 'post'}
                }
            }
        },
    },
    svgSprite: {
        input: '~/assets/svg/'
    },
    build: {
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        transpile: [/^vue2-google-maps($|\/)/, /^vue2-gmap-custom-marker($|\/)/]
    }
}
