<template>
    <section class="main-page-content  map-page">
        <MapPopup :maps="['world', 'az']" />
        <div class="custom-container" style="margin-top: 40px">
            <div class="news-content-breadcumbs">
                <clink to="/">{{ $t('mainPage')}}</clink>
                <a>{{ $t('mapRussia.link')}}</a>
            </div>
            <div class="news-content-title">
                <span>{{ $t('mapRussia.title') }}</span>
            </div>
            <div class="d-flex">
                <div class="russia-map"  style="display: flex;width: 100%;height: 400px">
                    <client-only v-if="$mq === 'mobile'">
                        <pinch-zoom disableZoomControl="disable" backgroundColor="transparent">
                            <svg class="svg-content" viewBox="0 0 1000 590"  width="1000" height="590"
                                 xmlns="http://www.w3.org/2000/svg" v-lazy-load>
                                <path  v-for="item in russianJson"
                                       :d="item.d"
                                       v-tooltip="$t('tooltip.map')"
                                       :key="item.id"
                                       @click="SelectMarker(item)"
                                       :fill="[item.active ? '#9E0000' : '#4E4E4E']"
                                       v-scroll-to="{ el: `#${item.id}`, offset: -150}"
                                       :stroke="[item.active ? 'red' : '#5E5D5D']"
                                       stroke-width="0.5" >
                                </path>
                            </svg>
                        </pinch-zoom>
                    </client-only>
                    <svg class="svg-content" viewBox="0 0 1000 590"  width="1000" height="590"
                         xmlns="http://www.w3.org/2000/svg" v-lazy-load v-else>
                        <path  v-for="item in russianJson"
                               :d="item.d"
                               v-tooltip="$t('tooltip.map')"
                               :key="item.id"
                               @click="SelectMarker(item)"
                               :fill="[item.active ? '#9E0000' : '#4E4E4E']"
                               v-scroll-to="{ el: `#${item.id}`, offset: -150}"
                               :stroke="[item.active ? 'red' : '#5E5D5D']"
                               stroke-width="0.5" >
                        </path>
                    </svg>
                </div>
                <div class="overlay-map-column">
                    <div class="map-statistic">
                        <div class="map-statistic-row map-statistic-header">
                            <div class="map-statistic-item"><span>{{ $t('hospitalized') }}:</span></div>
                            <div class="map-statistic-item"><span>{{ $t('mapRegion')}}:</span></div>
                        </div>
                        <client-only>
                            <vue-scroll :ops="ops">
                                <div class="overlay-map-statistic" style="height: 330px">
                                    <div
                                            v-for="item in russiaMap"
                                            :class="[item.active ? 'activeClass' : '', 'map-statistic-row']"
                                            :id="item.IsoCode"
                                            :key="item.IsoCode"
                                            v-if=" item.LocationName !== 'No region speified'"
                                            @click="selectItem(item)">
                                        <div class="map-statistic-item map-statistic-red">
                                            <span>{{ item.Confirmed | numFormat(0,0).replace(/,/g,' ')}} </span>
                                        </div>
                                        <div class="map-statistic-item map-statistic-blue">
                                            <span>{{ item.LocationName }}</span></div>
                                    </div>
                                </div>
                            </vue-scroll>
                        </client-only>
                    </div>
                    <div class="overlay-map-column-panel">
                        <div class="overlay-map-column-header">
                            <div class="overlay-map-column-header-item"><span>{{ $t('hospitalized') }}</span></div>
                            <div class="overlay-map-column-header-item"><span>{{ $t('cured') }}</span></div>
                            <div class="overlay-map-column-header-item"><span>{{ $t('died') }}</span></div>
                        </div>
                        <div class="overlay-map-column-row">
                            <div class="overlay-map-column-row-item"><span>
                    {{ this.activeCountry.Confirmed | numFormat(0,0).replace(/,/g,' ') }}
                  </span>
                            </div>
                            <div class="overlay-map-column-row-item"><span>
                    {{ this.activeCountry.Recovered | numFormat(0,0).replace(/,/g,' ') }}
                  </span>
                            </div>
                            <div class="overlay-map-column-row-item">
                  <span>
                    {{ this.activeCountry.Deaths | numFormat(0,0).replace(/,/g,' ') }}
                  </span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile" v-if="$mq === 'mobile'">
            <CoronaInfoTabs :notGlobal="true" style="margin-top: 20px" />
        </div>
        <div class="page__content custom-container" style="margin-top: 50px">
            <main class="page__double-main">
                <client-only>
                    <div class="news-content-text" v-for="(item,i) in russiaMapText" :key="i">
                        <b style="font-size: 26px">
                            {{ item.title[$i18n.locale] }}
                        </b>
                        <br>
                        <p v-html="item.text[$i18n.locale]"></p>
                    </div>
                        <Spinner v-show="loading"/>
                        <div v-show="!loading">
                            <div id=fb_thread class="text-xs-center">
                              <div class="fb-comments" :data-href="`http://covid.az/${$route.fullPath}`"
                                   data-numposts="100" data-width="100%"></div>
                            </div>
                        <div id="fb-root"></div>
                        </div>
                    <div class="news-cards-title">
                        <span>{{ $t('newsPageinterestiong')}}</span>
                    </div>
                    <NewsCards :data="newsData" />
                </client-only>
            </main>
            <aside class="page__aside">
                <VirusStatic  :notGlobal="true" />
                <RightSidebar style="height: 60% !important;"/>
            </aside>
        </div>
    </section>
</template>

<script>
    import VirusStatic from "~/components/global/VirusStatic";
    import CoronaInfoTabs from '~/components/pages/main/mobile/CoronaInfoTabs';
    import {mapState} from 'vuex';
    import RightSidebar from "~/components/global/RightSidebar";
    import Spinner from "~/components/global/Spinner";
    import NewsCards from "~/components/global/NewsCards";
    import MapPopup from "~/components/global/MapPopup";

    export default {
        components: {Spinner, RightSidebar,CoronaInfoTabs, VirusStatic, NewsCards, MapPopup},
        async fetch({store}) {
            await store.dispatch('virus/getLocalMap');
            await store.dispatch('virus/getRussiaMap');
            await store.dispatch('virus/getRussiaData');
            await store.dispatch('news/getPaginatedNews', { curPage: 3, perPage: 3 });
        },
        head() {
            return {
                title: this.$t('mapRussia.title'),
                meta: [
                    {property: 'og:title', content: this.$t('mapRussia.title') || ''},
                    {property: 'og:description', content: this.russiaMapText[0].title[this.$i18n.locale] || ''},
                    {name: 'description', content: this.russiaMapText[0].title[this.$i18n.locale] || ''},
                    {property: 'og:image', content: `https://covid.az/images/seo/russia-map.png` || ''},
                    {name: 'keywords', content: `${this.$t('keywords')}` || ''},
                    {property: 'og:url', content: `https://covid.az/${this.$route.fullPath}` || ''},
                    {property: 'twitter:card', content: `https://covid.az/images/seo/russia-map.png` || ''},
                ]
            }
        },
        data() {
            return {
                loading: true,
                url: `https://covid.az${this.$route.fullPath}`,
                ops: {
                    vuescroll: {},
                    scrollPanel: {},
                    rail: {},
                    bar: {
                        background: '#4c4c4c',
                        onlyShowBarOnScroll: false
                    }
                },
                mappedData: null,
                activeCountry: {
                    confirmed: 0,
                    recovered: 0,
                    deaths: 0
                }
            }
        },
        methods: {
            selectItem(item) {
                this.$store.commit('virus/SET_RUSSIA_ACTIVE_COUNTRIES', item);
                this.activeCountry = item;
            },
            SelectMarker(item){
               const RussianActive =  this.russiaMap.find(i=> i.IsoCode === item.id);
                this.activeCountry = RussianActive;
                this.$store.commit('virus/SET_RUSSIA_ACTIVE_COUNTRIES', RussianActive);
                this.$store.commit('virus/SET_RUSSIA_ACTIVE_MARKER_COUNTRIES', item);
            },
            initCreationFacebookComments() {
                FB.XFBML.parse()
                this.loading = !this.loading
            }
        },
        mounted() {
            this.activeCountry = this.russiaMap.find(item => item.active);
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
        },
        computed: {
            ...mapState('news', ['newsData']),
            ...mapState('virus', ['virusWorldWide', 'virusLocal',  'virusLocalData','russiaMap','russianJson','russiaMapText']),
        },
    }

</script>
<style scoped>
    .pinch-zoom-wrapper{
        height: 195px !important;
    }
</style>
