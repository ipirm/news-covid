module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'Tviser',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap'
            }
        ]
    },
    /*
    ** Customize the progress bar color
    */

    loading: {color: '#3B8070'},
    /*
    ** Build configuration
    */
    plugins: [
        {src: '~plugins/bootstrap-vue', ssr: true},
        {src: '~plugins/swiper', ssr: false},
        {src: '~plugins/bus', ssr: true},
        {src: '~plugins/mixins/user.js', ssr: true},
        {src: '~plugins/components.js', ssr: true},
        {src: '~plugins/autocomplete.js', ssr: true},
        {src: '~plugins/vue-select.js', ssr: false},
    ],
    css: [
        {src: '~assets/scss/app.scss', lang: 'scss'},
        {src: 'swiper/dist/css/swiper.css'},
    ],
    modules: [
        [
            'nuxt-i18n',
            {
                noPrefixDefaultLocale: true,
                locales: [
                    {code: 'en', iso: 'en-US', file: 'en.json'},
                    {code: 'ru', iso: 'es-ES', file: 'ru.json'}
                ],
                defaultLocale: 'en',
                vueI18n: {
                    fallbackLocale: 'en'
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
        baseURL: 'http://tviser.loc/api'
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
        }
    }
}

