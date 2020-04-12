<template>
    <div>
        <section class="main-page-content">
            <div class="container-fluid" v-if="activeNews">
                <div class="row">
                    <div class="col-lg-2">
                    </div>
                    <div class="col-lg-7">
                        <div class="news-content-breadcumbs">
                            <link-i18n to="/">{{ $t('mainPage')}}</link-i18n>
                            <link-i18n to="/news/">{{ $t('mainPage')}}</link-i18n>
                            <a>{{ activeNews.title[$i18n.locale]}}</a>
                        </div>
                        <div class="news-content-title">
                            <span>{{ activeNews.title[$i18n.locale] }}</span>
                        </div>
                        <div class="news-content-image">
                            <img :src="`http://puny2.continent.az/storage/${activeNews.image}`">
                        </div>
                        <div class="news-content-date">
                            <div class="news-content-date-item">{{ $t('source')}}: {{ activeNews.source }}</div>
                            <div class="news-content-date-item">{{ activeNews.created_at | moment("from", "now") }}
                            </div>
                            <div class="news-content-date-item">{{ activeNews.country[$i18n.locale] }}</div>
                        </div>
                        <div class="news-content-text">
                            <b>{{ activeNews.description[$i18n.locale]}}</b><br><br>
                            <span v-html="activeNews.text[$i18n.locale]"></span>
                        </div>
                        <template>
                            <client-only>
                                <div
                                >
                                    <div id=fb_thread class="text-xs-center">
                                        <div class="fb-comments" :data-href="`http://covid.az/${this.$route.fullPath}`" data-numposts="100" data-width="100%"></div>
                                    </div>
                                    <div id="fb-root"></div>
                                </div>
                            </client-only>
                        </template>
                    </div>
                    <div class="col-lg-3">
                        <VirusStatic :virusWorldWide="virusWorldWide" :virusLocal="virusLocal" />
                        <LeftSidebar :data="news" style="height: 60% !important;" />
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
                    <div class="news-cards-overlay" v-if="news">
                        <link-i18n
                                :to="`/news/${index}`"
                                class="news-cards-item"
                                v-for="(item, index) in news.slice(0,3)"
                                :key="index">
                            <div class="news-cards-item-image">
                                <img :src="item.urlToImage">
                            </div>
                            <div class="news-cards-item-title">
                                <span>{{ item.title}}</span>
                            </div>
                            <div class="news-cards-item-text">
                                <span>{{ item.content}}</span>
                            </div>
                            <div class="news-content-date news-cards-date">
                                <div class="news-content-date-item">{{ item.publishedAt | moment("from", "now") }}</div>
                                <div class="news-content-date-item">Spain</div>
                            </div>
                        </link-i18n>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="overlay-banner">
                        <img v-if="banner"  :src="`http://puny2.continent.az/storage/${banner.image_third}`">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LeftSidebar from "../../components/pages/main-page/LeftSidebar";

    import {mapActions, mapState} from 'vuex'
    import VirusStatic from "../../components/global/VirusStatic";

    export default {
        components: {VirusStatic, LeftSidebar},
        created() {
            this.getNews();
            this.findNews(this.$route.params.id);
            this.getVirus();
            this.getBanners();
        },
        data() {
            return {}
        },
        methods: {
            ...mapActions('news', ['getNews', 'findNews', 'getBanners']),
            ...mapActions('virus', ['getVirus']),
            initCreationFacebookComments(){
                FB.XFBML.parse() // Refres comments the XFBML
            }
        },
        computed: {
            ...mapState('news', ['news', 'activeNews', 'banner']),
            ...mapState('virus', ['virusWorldWide', 'virusLocal'])
        },
        mounted(){
            (function(d, s, id){
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {return;}
                js = d.createElement(s); js.id = id;
                js.src = "https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v6.0";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

            setTimeout(() => {
                this.initCreationFacebookComments()
            }, 3000);
        }
    }
</script>

<style scoped>

</style>
