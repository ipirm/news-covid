<template>
    <div>
        <section class="main-page-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-2">
                    </div>
                    <div class="col-lg-7" v-for="(activeNews,index) in activeNews" :key="index">
                        <div class="news-content-breadcumbs">
                            <clink to="/">{{ $t('mainPage')}}</clink>
                            <clink to="/news/">Все Новости</clink>
                            <a>{{ activeNews.title[$i18n.locale]}}</a>
                        </div>
                        <div class="news-content-title">
                            <span>{{ activeNews.title[$i18n.locale] }}</span>
                        </div>
                        <div class="news-content-image">
                            <img v-show="activeNews.video === null" :data-src="`${$imagesUrl}/${activeNews.image}`" v-lazy-load>
                            <VideoComponent v-show="activeNews.video !== null"  :data="activeNews" />
                        </div>
                        <div class="news-content-date">
                            <div class="news-content-date-item">{{ $t('source')}}: {{ activeNews.source }}</div>
                            <div class="news-content-date-item">{{ activeNews.created_at | moment("from", "now") }}
                            </div>
                            <div class="news-content-date-item">{{ activeNews.country[$i18n.locale] }}</div>
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
                    </div>
                    <div class="col-lg-3">
                        <VirusStatic :virusWorldWide="virusWorldWide" :virusLocal="virusLocal"/>
                        <RightSidebar style="height: 60% !important;"/>
                    </div>
                </div>
            </div>
        </section>
        <div class="container-fluid news-cards-container">
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-7">
                    <div class="news-cards-title">
                        <span>You may also be interested in:</span>
                    </div>
                    <div class="news-cards-overlay">
                        <clink
                                :to="`/news/${item.slug}`"
                                class="news-cards-item"
                                v-for="item in newsData"
                                :key="item.id">
                            <div class="news-cards-item-image">
                                <img  :data-src="`${$imagesUrl}/${item.image}`" v-lazy-load>
                            </div>
                            <div class="news-cards-item-title">
                                <span>{{ item.title[$i18n.locale] | truncate(35)  }}</span>
                            </div>
                            <div class="news-cards-item-text">
                                <span>{{ item.description[$i18n.locale] }}</span>
                            </div>
                            <div class="news-content-date news-cards-date">
                                <div class="news-content-date-item">{{ item.created_at | moment("from", "now") }}</div>
                                <div class="news-content-date-item">Spain</div>
                            </div>
                        </clink>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="overlay-banner">
                        <img v-if="banners" :data-src="`${$imagesUrl}/${banners.image_third}`" v-lazy-load>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VirusStatic from "~/components/global/VirusStatic";
    import Spinner from "~/components/global/Spinner";

    import {mapActions, mapState} from 'vuex';
    import RightSidebar from "~/components/global/RightSidebar";
    import VideoComponent from "../../components/pages/main/VideoComponent";

    export default {
        components: {VideoComponent, RightSidebar, Spinner, VirusStatic},

        created() {
            this.getVirus();
            this.getBanners();
        },
        async fetch({store, route}) {
            await store.dispatch('news/findNews', route.params.id).then(
               async ()=>{
               await  store.dispatch('news/getPaginatedNews',
                     {
                         id: store.state.news.activeNews.news.cat_id,
                         curPage: 1,
                         perPage: 3
                     })
            });
        },
        data() {
            return {
                loading: true,
            }
        },
        head() {
            return {
                title: this.activeNews.news.title[this.$i18n.locale],
                meta: [
                    { property: 'og:title', content: `${this.activeNews.news.title[this.$i18n.locale]}` || '' } ,
                    { property: 'og:description', content: `${this.activeNews.news.description[this.$i18n.locale]}` || '' },
                    { name: 'description', content: `${this.activeNews.news.description[this.$i18n.locale]}` || '' },
                    { property: 'og:image', content: `${this.$imagesUrl}/${this.activeNews.news.image}` || '' } ,
                    { name: 'keywords', content: `${this.$t('keywords')}` || '' },
                    { property: 'og:url', content: `http://covid.az/${this.$route.fullPath}` || '' } ,
                    { property: 'twitter:card', content: `${this.$imagesUrl}/${this.activeNews.news.image}` || '' } ,
                ]
            }
        },
        methods: {
            ...mapActions('news', [ 'findNews', 'getBanners']),
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

<style scoped>

</style>
