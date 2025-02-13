<template>
    <section class="main-page-content map-page">
        <MapPopup :maps="['az', 'ru']" />
        <div class="custom-container" style="margin-top: 40px" v-if="map && map.virusLocalData">
            <div class="news-content-breadcumbs">
                <clink to="/">{{ $t('mainPage')}}</clink>
                <a>{{ $t('header.world-map')}}</a>
            </div>
            <div class="news-content-title">
                <span>{{ $t('worldMap')}}</span>
            </div>
            <div class="d-flex">
                <GmapMap ref="mapRef" :center="{lat:10, lng:10}" :zoom="zoom" :options="options"
                         style="width: 100%; height: 460px;" v-lazy-load>
                    <gmap-custom-marker :key="index" v-for="(item, index) in countries"
                                        v-tooltip="$t('tooltip.map')"
                                        :marker="{ lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) }"
                                        v-scroll-to="{ el: `#a${index}`, offset: -100}" @click.native="myMarker(item)">
                        <div class="map-round" style="width: 40px;height: 40px;"
                             v-if="parseInt(item.confirmed) > 150000"></div>
                        <div class="map-round" style="width: 25px;height: 25px;"
                             v-if="parseInt(item.confirmed) > 100000 && parseInt(item.confirmed) < 150000"></div>
                        <div class="map-round" style="width: 20px;height: 20px;"
                             v-if="parseInt(item.confirmed) > 50000 && parseInt(item.confirmed) < 100000"></div>
                        <div class="map-round" style="width: 15px;height: 15px;"
                             v-if="parseInt(item.confirmed) > 20000 && parseInt(item.confirmed) < 50000"></div>
                        <div class="map-round" style="width: 10px;height: 10px;"
                             v-if="parseInt(item.confirmed) < 20000"></div>
                    </gmap-custom-marker>
                </GmapMap>
                <div class="overlay-map-column">
                    <div class="map-statistic">
                        <div class="map-statistic-row map-statistic-header">
                            <div class="map-statistic-item"><span>{{ $t('hospitalized') }}:</span></div>
                            <div class="map-statistic-item"><span>{{ $t('mapRegion')}}:</span></div>
                        </div>
                        <client-only>
                            <vue-scroll :ops="ops">
                                <div class="overlay-map-statistic" style="height: 330px">
                                    <div v-for="(item,index) in countries"
                                         :class="[item.active ? 'activeClass' : '', 'map-statistic-row']"
                                         :id="`a${index+1}`" :key="index" @click="selectItem(item)">
                                        <div class="map-statistic-item map-statistic-red">
                                            <span>{{ item.confirmed | numFormat(0,0).replace(/,/g,' ')}} </span>
                                        </div>
                                        <div class="map-statistic-item map-statistic-blue">
                                            <span>{{ item.country}}</span></div>
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
        <div class="mobile" v-if="$mq === 'mobile'">
            <WorldCoronaInfoTabs style="margin-top: 50px" />
        </div>
        <div class="page__content custom-container" style="margin-top: 50px">
            <div class="page__double-main">
                <client-only>
                    <div class="news-content-text" v-for="item in map" :key="item.id">
                        <b style="font-size: 26px;">
                            {{ item.title[$i18n.locale] }}
                        </b>
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
            </div>
            <div class="page__aside">
                <VirusStatic :virusWorldWide="virusWorldWide" :virusLocal="virusLocal"/>
                <RightSidebar style="height: 60% !important;"/>
            </div>
        </div>
    </section>
</template>

<script>
    import VirusStatic from "../components/global/VirusStatic";
    import GmapCustomMarker from 'vue2-gmap-custom-marker';
    import AnimatedNumber from "animated-number-vue";
    import Spinner from "~/components/global/Spinner";
    import {mapActions, mapState} from 'vuex';
    import RightSidebar from "~/components/global/RightSidebar";
    import NewsCards from "~/components/global/NewsCards";
    import MapPopup from "~/components/global/MapPopup";
    import WorldCoronaInfoTabs from "~/components/pages/map/mobile/WorldCoronaInfoTabs";

    export default {
        components: {RightSidebar, AnimatedNumber, VirusStatic, 'gmap-custom-marker': GmapCustomMarker, Spinner, NewsCards, MapPopup, WorldCoronaInfoTabs},
        asyncData(context) {
            return {
                options: {
                    zoomControl: true,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: true,
                    disableDefaultUi: false,
                    styles: [{
                        "featureType": "all",
                        "elementType": "labels",
                        "stylers": [{
                            "visibility": "on"
                        }]
                    },
                        {
                            "featureType": "all",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "saturation": 36
                            },
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 40
                                }
                            ]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.text.stroke",
                            "stylers": [{
                                "visibility": "on"
                            },
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.icon",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "all",
                            "stylers": [{
                                "hue": "#ff0000"
                            }]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#000000"
                            },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [{
                                "color": "#000000"
                            },
                                {
                                    "lightness": 17
                                },
                                {
                                    "weight": 1.2
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.country",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#e5c163"
                            }]
                        },
                        {
                            "featureType": "administrative.locality",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#c4c4c4"
                            }]
                        },
                        {
                            "featureType": "administrative.neighborhood",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#e5c163"
                            }]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#000000"
                            },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "all",
                            "stylers": [{
                                "color": "#e3bbbb"
                            }]
                        },
                        {
                            "featureType": "landscape.natural.landcover",
                            "elementType": "all",
                            "stylers": [{
                                "color": "#353535"
                            }]
                        },
                        {
                            "featureType": "landscape.natural.terrain",
                            "elementType": "all",
                            "stylers": [{
                                "hue": "#ff0000"
                            }]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#000000"
                            },
                                {
                                    "lightness": 21
                                },
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.business",
                            "elementType": "geometry",
                            "stylers": [{
                                "visibility": "on"
                            }]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#e5c163"
                            },
                                {
                                    "lightness": "0"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#ffffff"
                            }]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.stroke",
                            "stylers": [{
                                "color": "#e5c163"
                            }]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#000000"
                            },
                                {
                                    "lightness": 18
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#575757"
                            }]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#ffffff"
                            }]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.stroke",
                            "stylers": [{
                                "color": "#2c2c2c"
                            }]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#000000"
                            },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#999999"
                            }]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#000000"
                            },
                                {
                                    "lightness": 19
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "all",
                            "stylers": [{
                                "hue": "#ff0000"
                            },
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#b6b6b6"
                            },
                                {
                                    "lightness": 17
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels",
                            "stylers": [{
                                "hue": "#ff0000"
                            }]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "hue": "#ff0000"
                            },
                                {
                                    "lightness": "-24"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.icon",
                            "stylers": [{
                                "hue": "#ff0000"
                            }]
                        }
                    ]
                }
            }
        },
        async fetch({store}) {
            await store.dispatch('virus/getVirus');
            await store.dispatch('virus/getCountries');
            await store.dispatch('virus/getWorldMap');
            await store.dispatch('news/getPaginatedNews', { curPage: 1, perPage: 3 });
        },
        head() {
            return {
                title: this.$t('worldMap'),
                meta: [
                    {property: 'og:title', content: this.$t('worldMap') || ''},
                    {property: 'og:description', content: this.map[0].title[this.$i18n.locale] || ''},
                    {name: 'description', content: this.map[0].title[this.$i18n.locale] || ''},
                    {property: 'og:image', content: `https://covid.az/images/seo/world-img.png` || ''},
                    {property: 'og:url', content: `https://covid.az/${this.$route.fullPath}` || ''},
                    {name: 'keywords', content: `${this.$t('keywords')}` || ''},
                    {property: 'twitter:card', content: `https://covid.az/images/seo/world-img.png` || ''},
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
                zoom: 2,
                activeCountry: {
                    confirmed: 0,
                    recovered: 0,
                    deaths: 0
                }
            }
        },
        methods: {
            ...mapActions('virus', ['getVirus', 'getCountries']),

            myMarker(item) {
                this.$store.commit('virus/SET_ACTIVE_FALSE', item);
                this.activeCountry = item;
            },

            selectItem(item) {
                if (item.country !== 'World')
                    this.$refs.mapRef.panTo({lat: parseFloat(item.latitude), lng: parseFloat(item.longitude)});
                this.$store.commit('virus/SET_ACTIVE_FALSE', item);
                this.activeCountry = item;
                this.zoom = 5;
            },

            formatToPrice(value) {
                return `${value.toFixed(0)} `;
            },
            initCreationFacebookComments() {
                FB.XFBML.parse()
                this.loading = !this.loading
            },
        },
        mounted() {
            if (this.countries)
                this.activeCountry = this.countries.find(item => item.active);
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
            ...mapState('virus', ['virusWorldWide', 'virusLocal', 'countries', 'map']),
            ...mapState('news', ['newsData'])
        },
    }

</script>
