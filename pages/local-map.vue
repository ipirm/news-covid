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
        components: {AnimatedNumber, VirusStatic, NewsList, LeftSidebar},
        created() {
            this.getVirus();
            this.getCountries();
            this.getNews();
            this.$store.commit('virus/SET_AZE_COUNTRIES');
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
            ...mapActions('virus', ['getVirus']),
            ...mapActions('virus', ['getCountries']),
            ...mapActions('news', ['getNews']),
            selectItem(item) {
                this.$store.commit('virus/SET_AZE_ACTIVE_COUNTRIES',item);
                this.activeCountry = item;
            }
        },
        computed: {
            ...mapState('virus', ['virusWorldWide']),
            ...mapState('virus', ['virusLocal']),
            ...mapState('virus', ['countries']),
            ...mapState('virus', ['azeCountries']),
            ...mapState('news', ['news']),
        },
    }
</script>

<style scoped>

</style>
