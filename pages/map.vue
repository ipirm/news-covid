<template>
    <div>
        <section class="main-page-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-2">
                    </div>
                    <div class="col-lg-10">
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
                                    style="width: 71%; height: 460px;"
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
                                                        v-for="(item,index) in countries"
                                                        :class="[item.active ? 'activeClass' : '', 'map-statistic-row']"
                                                        :id="`a${index}`"
                                                        :key="index"
                                                        @click="selectItem(item)"
                                                >
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
<!--                                           <span> <animated-number :value="this.activeCountry.deaths"-->
<!--                                                                   :formatValue="formatToPrice"-->
<!--                                                                   :duration="300"/>-->
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
                        <div class="news-content-text">
                            <b style="font-size: 26px;">
                                Согласно этим данным, в <br> пятерку стран по количеству<br> подтвержденных <br>
                                заболевания входят:<br><br><br>
                            </b>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et.
                            Et netus et malesuada fames ac turpis egestas. Sit amet consectetur adipiscing elit.
                            Suspendisse interdum consectetur libero id faucibus nisl. Id velit ut tortor pretium. Dis
                            parturient montes nascetur ridiculus. Vel quam elementum pulvinar etiam non. Nullam vehicula
                            ipsum a arcu cursus vitae congue mauris rhoncus. Pulvinar sapien et ligula ullamcorper
                            malesuada proin libero nunc. Pellentesque sit amet porttitor eget. Ac odio tempor orci
                            dapibus ultrices in. Quis varius quam quisque id diam vel quam elementum. Blandit massa enim
                            nec dui nunc mattis enim ut tellus.

                            A diam maecenas sed enim ut sem viverra. Sit amet commodo nulla facilisi nullam vehicula
                            ipsum. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. At
                            urna condimentum mattis pellentesque. Tristique et egestas quis ipsum suspendisse ultrices
                            gravida dictum fusce. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Mauris
                            sit amet massa vitae tortor condimentum. Et tortor at risus viverra adipiscing at in tellus.
                            Amet commodo nulla facilisi nullam vehicula ipsum. Maecenas ultricies mi eget mauris
                            pharetra. Fusce id velit ut tortor pretium viverra. Mauris nunc congue nisi vitae suscipit.
                            Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Mattis aliquam faucibus purus
                            in massa tempor. Quam nulla porttitor massa id neque aliquam vestibulum. Convallis aenean et
                            tortor at.

                            Urna molestie at elementum eu facilisis sed odio. Quam quisque id diam vel quam. Vestibulum
                            lectus mauris ultrices eros in cursus turpis massa tincidunt. A diam maecenas sed enim ut.
                            Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Sit amet nulla facilisi
                            morbi tempus iaculis urna id. Scelerisque in dictum non consectetur a erat. Risus pretium
                            quam vulputate dignissim suspendisse in. Vestibulum lectus mauris ultrices eros in cursus
                            turpis. Nisi quis eleifend quam adipiscing. Lorem ipsum dolor sit amet consectetur. Enim
                            lobortis scelerisque fermentum dui. Diam vulputate ut pharetra sit amet. Etiam erat velit
                            scelerisque in dictum non consectetur. Ullamcorper sit amet risus nullam. Facilisi etiam
                            dignissim diam quis enim lobortis. Id porta nibh venenatis cras sed felis eget.

                            Enim facilisis gravida neque convallis a cras semper. At volutpat diam ut venenatis tellus
                            in metus vulputate. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Egestas
                            fringilla phasellus faucibus scelerisque eleifend. Lacus vel facilisis volutpat est velit
                            egestas dui. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Augue lacus
                            viverra vitae congue. Turpis nunc eget lorem dolor sed viverra ipsum. Bibendum neque egestas
                            congue quisque egestas diam in. Cursus turpis massa tincidunt dui ut ornare lectus. Arcu non
                            odio euismod lacinia at quis risus sed vulputate. Elit duis tristique sollicitudin nibh sit.
                            Erat pellentesque adipiscing commodo elit at imperdiet dui. Ut etiam sit amet nisl.

                            Vestibulum lectus mauris ultrices eros in cursus. Condimentum vitae sapien pellentesque
                            habitant. Eu volutpat odio facilisis mauris. Neque vitae tempus quam pellentesque nec nam
                            aliquam sem. Cras fermentum odio eu feugiat pretium nibh. Aliquet sagittis id consectetur
                            purus ut faucibus. At in tellus integer feugiat scelerisque varius morbi enim. Mi proin sed
                            libero enim sed faucibus. Lacinia quis vel eros donec ac odio tempor orci dapibus. Ultrices
                            vitae auctor eu augue. Orci dapibus ultrices in iaculis nunc sed. Sed ullamcorper morbi
                            tincidunt ornare. In dictum non consectetur a erat nam at lectus. Imperdiet sed euismod nisi
                            porta lorem mollis aliquam. Sed nisi lacus sed viverra tellus. Eget mauris pharetra et
                            ultrices neque ornare aenean euismod. Vitae semper quis lectus nulla at volutpat diam ut. Id
                            ornare arcu odio ut sem nulla pharetra diam.

                            Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Iaculis nunc sed
                            augue lacus viverra vitae congue eu consequat. Auctor eu augue ut lectus arcu bibendum at
                            varius. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.
                            Ipsum dolor sit amet consectetur adipiscing elit ut. Fames ac turpis egestas maecenas
                            pharetra convallis posuere morbi. Dapibus ultrices in iaculis nunc sed. Integer vitae justo
                            eget magna. Quis commodo odio aenean sed adipiscing diam donec. Nisl suscipit adipiscing
                            bibendum est ultricies integer quis auctor. Non enim praesent elementum facilisis leo vel
                            fringilla est. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Dui nunc mattis
                            enim ut tellus elementum sagittis vitae. Purus sit amet luctus venenatis lectus magna
                            fringilla urna porttitor. Arcu non odio euismod lacinia at. Odio aenean sed adipiscing diam
                            donec adipiscing tristique. Urna nunc id cursus metus aliquam. Augue lacus viverra vitae
                            congue eu consequat ac felis. Elit duis tristique sollicitudin nibh sit amet commodo nulla
                            facilisi.

                            Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Suscipit tellus mauris a
                            diam maecenas sed. Accumsan lacus vel facilisis volutpat est. Nunc faucibus a pellentesque
                            sit amet. Ligula ullamcorper malesuada proin libero nunc. Sed arcu non odio euismod lacinia.
                            Maecenas pharetra convallis posuere morbi leo urna molestie. Sit amet justo donec enim diam
                            vulputate ut. Cum sociis natoque penatibus et magnis dis. Turpis egestas sed tempus urna et
                            pharetra pharetra. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Vitae
                            congue eu consequat ac felis donec et odio. Eros donec ac odio tempor orci dapibus ultrices.
                            Tortor vitae purus faucibus ornare. Vitae auctor eu augue ut.

                            Sed viverra ipsum nunc aliquet bibendum enim facilisis. Pellentesque id nibh tortor id
                            aliquet lectus proin. Nunc sed blandit libero volutpat sed cras ornare arcu. Felis bibendum
                            ut tristique et. Tempor orci dapibus ultrices in iaculis nunc. Vulputate odio ut enim
                            blandit. Nunc sed augue lacus viverra vitae. Tellus in metus vulputate eu scelerisque felis.
                            Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Quam pellentesque nec
                            nam aliquam sem et tortor. Nisl nisi scelerisque eu ultrices vitae. Lectus mauris ultrices
                            eros in cursus turpis massa. Ut tellus elementum sagittis vitae et leo. Diam in arcu cursus
                            euismod quis viverra nibh cras. In dictum non consectetur a erat nam at. Id donec ultrices
                            tincidunt arcu non sodales neque. Condimentum vitae sapien pellentesque habitant morbi
                            tristique senectus. Morbi quis commodo odio aenean.
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <VirusStatic :virusWorldWide="virusWorldWide" :virusLocal="virusLocal"/>
                        <LeftSidebar :data="news" style="height: 60% !important;"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    import LeftSidebar from "../components/pages/main-page/LeftSidebar";
    import NewsList from "../components/pages/main-page/NewsList";
    import {mapActions, mapState} from 'vuex'
    import VirusStatic from "../components/global/VirusStatic";
    import GmapCustomMarker from 'vue2-gmap-custom-marker';
    import AnimatedNumber from "animated-number-vue";

    export default {
        components: {AnimatedNumber, VirusStatic, NewsList, LeftSidebar, 'gmap-custom-marker': GmapCustomMarker},
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
            this.getNews();
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
            ...mapActions('news', ['getNews']),

            myMarker(item) {
                this.$store.commit('virus/SET_ACTIVE_FALSE', item);
                this.activeCountry = item;
            },

            selectItem(item) {
                this.$refs.mapRef.panTo({lat: parseFloat(item.latitude), lng: parseFloat(item.longitude)});
                this.$store.commit('virus/SET_ACTIVE_FALSE', item);
                this.activeCountry = item;
                this.zoom = 5;
            },

            formatToPrice(value) {
                return `${value.toFixed(0)} `;
            }
        },
        computed: {
            ...mapState('virus', ['virusWorldWide', 'virusLocal', 'countries']),
            ...mapState('news', ['news'])
        },
    }
</script>
