<template>
    <div>
        <div class="page__content custom-container custom-container--news news-page-item" >
            <main class="page__double-main" v-for="(activeNews,index) in activeNews" :key="index"
                  style="margin-right: 20px;max-width: 950px; margin-left: auto;">
                <div class="news-content-breadcumbs">
                    <clink to="/">{{ $t('mainPage')}}</clink>
                    <clink to="/news/">{{ $t('header.news')}}</clink>
                    <a>{{ activeNews.title[$i18n.locale]}}</a>
                </div>
                <div class="news-content-title">
                    <span>{{ activeNews.title[$i18n.locale] }}</span>
                </div>
                <div class="news-content-image">
                    <img v-show="activeNews.video === null" :data-src="`${$imagesUrl}/${activeNews.image}`" v-lazy-load style="height: 500px;  width: 100%">
                    <VideoComponent width="100%" :height="$mq === 'mobile' ? '200px' : '500px'" v-show="activeNews.video !== null" :data="activeNews" />
                </div>
                <div class="news-content-date" style="justify-content: space-between">
                    <client-only>
                        <div class="overlay-social">
                            <facebook :url="url" scale="1.5" />
                            <twitter :url="url" :title="activeNews.title[$i18n.locale]" scale="1.5" />
                            <linkedin :url="url" scale="1.5" />
                            <telegram :url="url" scale="1.5" />
                            <whats-app :url="url" :title="activeNews.title[$i18n.locale]" scale="1.5" />
                        </div>
                    </client-only>
                    <div class="d-flex">
                    <div class="news-content-date-item">{{ $t('source')}}: {{ activeNews.source }}</div>
                    <div class="news-content-date-item">{{ activeNews.created_at | moment("from", "now") }}
                    </div>
                    <div class="news-content-date-item">{{ activeNews.country[$i18n.locale] }}</div>
                    </div>
                </div>
                <div class="news-content-text mb-5">
                    <b>{{ activeNews.description[$i18n.locale]}}</b><br><br>
                    <span v-html="activeNews.text[$i18n.locale]"></span>
                </div>
                <template>
                    <client-only>
                        <Spinner v-show="loading"/>
                        <div v-show="!loading">
                            <div id=fb_thread class="text-xs-center">
                                <div class="fb-comments" :data-href="`http://covid.az/${$route.fullPath}`"
                                     data-numposts="100" data-width="100%"></div>
                            </div>
                            <div id="fb-root"></div>
                        </div>
                    </client-only>
                </template>
                <div class="news-cards-title">
                    <span>{{ $t('newsPageinterestiong')}}</span>
                </div>
                <div class="news-cards-overlay">
                    <clink
                            :to="`/news/${item.slug}`"
                            class="news-cards-item"
                            v-for="item in newsData"
                            :key="item.id">
                        <div class="news-cards-item-image">
                            <img :data-src="`${$imagesUrl}/${item.image}`" v-lazy-load>
                        </div>
                        <div class="news-cards-item-title">
                            <span>{{ item.title[$i18n.locale] | truncate(35)  }}</span>
                        </div>
                        <div class="news-cards-item-text">
                            <span>{{ item.description[$i18n.locale]  | truncate(85) }}</span>
                        </div>
                        <div class="news-content-date news-cards-date">
                            <div class="news-content-date-item">{{ item.created_at | moment("from", "now") }}</div>
                            <div class="news-content-date-item">{{ activeNews.country[$i18n.locale] }}</div>
                        </div>
                    </clink>
                </div>
            </main>
            <aside class="page__aside news-page-aside" style="margin-top: 88px">
                <VirusStatic :virusWorldWide="virusWorldWide" :virusLocal="virusLocal"/>
                <LeftSidebar/>
                <div class="overlay-banner">
                    <img v-if="banners" :data-src="`${$imagesUrl}/${banners.image_third}`" v-lazy-load>
                </div>
            </aside>
        </div>
        <div class="page__content custom-container news-page-item news-item-mobile">
            <div class="page__double-main">
                <NewsSlider :data="newsData"  />
            </div>
            <aside class="page__aside">
                <div class="overlay-banner">
                    <img v-if="banners" :data-src="`${$imagesUrl}/${banners.image_third}`" v-lazy-load>
                </div>
            </aside>
        </div>
    </div>
</template>
<style scoped>
    .main-page__mobile__news-slider {
        display: none;
    }
    .news-cards-item-title{
        padding: 0 !important;
    }
</style>
<script>
    import VirusStatic from "~/components/global/VirusStatic";
    import Spinner from "~/components/global/Spinner";

    import {mapActions, mapState} from 'vuex';
    import LeftSidebar from "~/components/global/LeftSidebar";
    import VideoComponent from "../../components/pages/main/VideoComponent";
    import NewsSlider from '~/components/pages/main/mobile/NewsSlider';
    export default {
        components: {
            VideoComponent, LeftSidebar, Spinner, VirusStatic,NewsSlider},

        async fetch({store, route}) {
            await store.dispatch('news/findNews', route.params.id).then(
                async () => {
                    await store.dispatch('news/getPaginatedNews',
                        {
                            id: store.state.news.activeNews.news.cat_id,
                            slug:route.params.id,
                            curPage: 1,
                            perPage: 3
                        })
                });
        },

        data() {
            return {
                loading: true,
                url: `https://covid.az${this.$route.fullPath}`
            }
        },

        head() {
            return {
                title: this.activeNews.news.title[this.$i18n.locale],
                meta: [
                    {property: 'og:title', content: `${this.activeNews.news.title[this.$i18n.locale]}` || ''},
                    {
                        property: 'og:description',
                        content: `${this.activeNews.news.description[this.$i18n.locale]}` || ''
                    },
                    {name: 'description', content: `${this.activeNews.news.description[this.$i18n.locale]}` || ''},
                    {property: 'og:image', content: `${this.$imagesUrl}/${this.activeNews.news.image}` || ''},
                    {name: 'keywords', content: `${this.$t('keywords')}` || ''},
                    {property: 'og:url', content: `https://covid.az/${this.$route.fullPath}` || ''},
                    {property: 'twitter:card', content: `${this.$imagesUrl}/${this.activeNews.news.image}` || ''},
                ]
            }
        },

        methods: {
            ...mapActions('news', ['findNews', 'getBanners']),
            ...mapActions('virus', ['getVirus']),

            initCreationFacebookComments() {
                FB.XFBML.parse()
                this.loading = !this.loading
            }
        },

        computed: {
            ...mapState('news', ['newsData', 'activeNews', 'banners']),
            ...mapState('virus', ['virusWorldWide', 'virusLocal'])
        },

        mounted() {
            if (process.client) {
                (function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) {
                        return;
                    }
                    js = d.createElement(s);
                    js.id = id;
                    js.src = `https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v6.0`;
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));

                setTimeout(() => {
                    this.initCreationFacebookComments()
                }, 3000);
            }
        }
    }
</script>
