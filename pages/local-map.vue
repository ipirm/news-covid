<template>
    <div>
        <section class="main-page-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-2">
                    </div>
                    <div class="col-lg-10">
                        <div class="news-content-breadcumbs">
                            <clink to="/">Главная</clink>
                            <a>Карта</a>
                        </div>
                        <div class="news-content-title">
                            <span>{{ $t('localMap') }}</span>
                        </div>
                        <div class="d-flex">
                            <div style="display: flex;width: 71%;height: 360px">
                            <svg
                                class="svg-content"
                                viewBox="0 0 1000 800"
                                width="1000"
                                height="800"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    :stroke="[item.active ? '#fff' : '#E5C163']"
                                    v-for="(item,index) in azeCountries"
                                    :key="index"
                                    :d="item.path"
                                    id="AZE1676"
                                    :name="item.country"
                                    @click="selectItem(item)"
                                    v-scroll-to="`#a${index}`"
                                    :fill="[parseInt(item.confirmed) > 20 && parseInt(item.confirmed) < 50 ? '#AD0000' : '#535353']"
                                >
                                </path>
                            </svg>
                            </div>
                            <div class="overlay-map-column">
                                <div class="map-statistic">
                                    <div class="map-statistic-row map-statistic-header">
                                        <div class="map-statistic-item"><span>Заболевшие:</span></div>
                                        <div class="map-statistic-item"><span>Страна/Регион:</span></div>
                                    </div>
                                    <client-only>
                                        <vue-scroll :ops="ops">
                                            <div class="overlay-map-statistic" style="height: 330px">
                                                <div
                                                        v-for="(item,index) in azeCountries"
                                                        :class="[item.active ? 'activeClass' : '', 'map-statistic-row']"
                                                        :id="`a${index}`"
                                                        :key="index"
                                                        @click="selectItem(item)"
                                                >
                                                    <div class="map-statistic-item map-statistic-red">
                                                        <span>{{ item.confirmed | numFormat(0,0).replace(/,/g,' ')}} </span>
                                                    </div>
                                                    <div class="map-statistic-item map-statistic-blue">
                                                        <span>{{ item.country.country}}</span></div>
                                                </div>
                                            </div>
                                        </vue-scroll>
                                    </client-only>
                                </div>
                                <div class="overlay-map-column-panel">
                                    <div class="overlay-map-column-header">
                                        <div class="overlay-map-column-header-item"><span>Заболевшие:</span></div>
                                        <div class="overlay-map-column-header-item"><span>Вылечились:</span></div>
                                        <div class="overlay-map-column-header-item"><span>Умерли:</span></div>
                                    </div>
                                    <div class="overlay-map-column-row">
                                        <div class="overlay-map-column-row-item"><span>
                                                     {{ this.activeCountry.confirmed | numFormat(0,0).replace(/,/g,' ') }}
                                        </span>
                                        </div>
                                        <div class="overlay-map-column-row-item"><span>

                                                 {{ this.activeCountry.recovered | numFormat(0,0).replace(/,/g,' ') }}
                                        </span>
                                        </div>
                                        <div class="overlay-map-column-row-item">
                                            <span>
                                               {{ this.activeCountry.deaths | numFormat(0,0).replace(/,/g,' ') }}
                                            </span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style="margin-top: 50px">
                    <div class="col-lg-2">
                    </div>
                    <div class="col-lg-7">
                        <div class="news-content-text" v-for="item in virusLocalData" :key="item.id">
                            <b style="font-size: 26px;">
                                {{ item.title[$i18n.locale]  }}
                            </b>
                          <p v-html="item.title[$i18n.locale]"></p>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <VirusStatic />
                        <LeftSidebar :data="news" style="height: 60% !important;"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    import LeftSidebar from "~/components/global/LeftSidebar";
    import NewsList from "~/components/global/NewsList";
    import VirusStatic from "~/components/global/VirusStatic";
    import GmapCustomMarker from 'vue2-gmap-custom-marker';
    import AnimatedNumber from "animated-number-vue";

    import {mapActions, mapState} from 'vuex';

    export default {
        components: {AnimatedNumber, VirusStatic, NewsList, LeftSidebar},
        async fetch({store}) {
            await store.dispatch('virus/getLocalMap');
        },
        created() {
            this.getNews();
            this.$store.commit('virus/SET_AZE_COUNTRIES');
        },
        head() {
            return {
                title: this.$t('localMap'),
                meta: [
                    { property: 'og:title', content: this.$t('localMap') || '' } ,
                    { property: 'og:description', content: this.virusLocalData[0].title[this.$i18n.locale] || '' } ,
                    { property: 'og:image', content: `http://covid.az/images/seo/local-img.png` || '' } ,
                    { property: 'og:url', content: `http://covid.az/${this.$route.fullPath}` || '' } ,
                    { property: 'twitter:card', content: `http://covid.az/images/seo/local-img.png` || '' } ,
                ]
            }
        },
        data() {
            return {
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
            ...mapActions('news', ['getNews']),

            selectItem(item) {
                this.$store.commit('virus/SET_AZE_ACTIVE_COUNTRIES',item);
                this.activeCountry = item;
            }
        },
        computed: {
            ...mapState('virus', ['virusWorldWide', 'virusLocal', 'countries', 'azeCountries','virusLocalData']),
        },
    }
</script>

<style scoped>

</style>
