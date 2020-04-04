<template>
    <div>
        <section class="main-page-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-2">
                    </div>
                    <div class="col-lg-9">
                        <div class="news-content-breadcumbs">
                            <link-i18n to="/">Главная</link-i18n>
                            <a>Карта</a>
                        </div>
                        <div class="news-content-title">
                            <span>Карта распространения коронавируса</span>
                        </div>
                        <div class="d-flex">
                            <GmapMap
                                    ref="mapRef"
                                    :center="{lat:10, lng:10}"
                                    :zoom="zoom"
                                    :options="options"
                                    style="width: 100%; max-width: 820px; height: 460px;"
                            >
                                <gmap-custom-marker
                                        :key="index"
                                        v-for="(item, index) in countries"
                                        :marker="{ lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) }"
                                        v-scroll-to="`#a${index}`"
                                        @click.native="myMarker(item)"
                                >
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
                            <div class="map-statistic">
                                <div class="map-statistic-row map-statistic-header">
                                    <div class="map-statistic-item"><span>Заболевшие:</span></div>
                                    <div class="map-statistic-item"><span>Страна/Регион:</span></div>
                                </div>
                                <client-only>
                                    <vue-scroll :ops="ops">
                                        <div class="overlay-map-statistic" style="height: 300px">
                                        <div
                                             v-for="(item,index) in countries"
                                             :class="[item.active ? 'activeClass' : '', 'map-statistic-row']"
                                             :id="`a${index}`"
                                             :key="index"
                                             @click="selectItem(item)"
                                        >
                                            <div class="map-statistic-item map-statistic-red">
                                                <span>{{ item.confirmed}}</span>
                                            </div>
                                            <div class="map-statistic-item map-statistic-blue">
                                                <span>{{ item.country}}</span></div>
                                        </div>
                                        </div>
                                    </vue-scroll>
                                </client-only>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!--        <div v-if="activeCountry">-->
        <!--            Название Страны: {{ this.activeCountry.country }}-->
        <!--            Случаев: {{ this.activeCountry.confirmed }}-->
        <!--            Вылечилось: {{ this.activeCountry.recovered }}-->
        <!--            Критическое состояние: {{ this.activeCountry.critical }}-->
        <!--            Умерло: {{ this.activeCountry.deaths }}-->
        <!--        </div>-->
    </div>
</template>

<script>

    import LeftSidebar from "../components/pages/main-page/LeftSidebar";
    import NewsList from "../components/pages/main-page/NewsList";
    import {mapActions, mapState} from 'vuex'
    import VirusStatic from "../components/global/VirusStatic";
    import GmapCustomMarker from 'vue2-gmap-custom-marker';

    export default {
        components: {VirusStatic, NewsList, LeftSidebar, 'gmap-custom-marker': GmapCustomMarker},
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
                    styles: [
                        {
                            "featureType": "all",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
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
                            "stylers": [
                                {
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
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "hue": "#ff0000"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
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
                            "stylers": [
                                {
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
                            "stylers": [
                                {
                                    "color": "#e5c163"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.locality",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#c4c4c4"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.neighborhood",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#e5c163"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [
                                {
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
                            "stylers": [
                                {
                                    "color": "#e3bbbb"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural.landcover",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "color": "#353535"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural.terrain",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "hue": "#ff0000"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
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
                            "stylers": [
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
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
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#e5c163"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [
                                {
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
                            "stylers": [
                                {
                                    "color": "#575757"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#2c2c2c"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [
                                {
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
                            "stylers": [
                                {
                                    "color": "#999999"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "geometry",
                            "stylers": [
                                {
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
                            "stylers": [
                                {
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
                            "stylers": [
                                {
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
                            "stylers": [
                                {
                                    "hue": "#ff0000"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
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
                            "stylers": [
                                {
                                    "hue": "#ff0000"
                                }
                            ]
                        }
                    ]
                }
            }
        },
        created() {
            this.getVirus();
            this.getCountries();

        },
        data() {
            return {
                ops: {
                    vuescroll: {},
                    scrollPanel: {},
                    rail: {},
                    bar: {
                        background: '#4c4c4c',
                        // #120888
                    }
                },
                zoom: 2,
            }
        },
        methods: {
            ...mapActions('virus', ['getVirus']),
            ...mapActions('virus', ['getCountries']),
            myMarker(item) {
                this.$store.commit('virus/SET_ACTIVE_FALSE',item);
            },
            selectItem(item){
                this.$refs.mapRef.panTo({ lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) });
                this.$store.commit('virus/SET_ACTIVE_FALSE',item);
                this.zoom = 5;
            },
            getId(item){
                var letters = '\\w+$';
                let countryId = item.split(' ').join('').toLowerCase().match(letters);
                console.log(countryId)
                // console.log(item)
                return item
            }
        },
        computed: {
            ...mapState('virus', ['virusWorldWide']),
            ...mapState('virus', ['virusLocal']),
            ...mapState('virus', ['countries']),
        },
    }
</script>

<style scoped>

</style>
