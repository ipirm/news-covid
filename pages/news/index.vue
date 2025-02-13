<template>
    <div class="news-page news-page-list">
        <div class="page__content custom-container custom-container--news">
            <div class="page__double-main">
                <form class="d-flex overlay-category desktop-search" @submit.prevent="updateQuery">
                    <div class="news-search">
                        <input class="news-cards-input" v-model="title" :placeholder="$t('search.searchNews')"/>
                        <button class="news-search-btn" type="submit"><span>{{ $t('search.searchBtn')}}</span></button>
                    </div>
                    <div class="news-search middle">
                        <client-only>
                            <v-select class="news-search-item" :placeholder="$t('search.country')" v-model="country" :options="countries" />
                            <v-select class="news-search-item" :placeholder="$t('search.cats')" v-model="cat_id" :options="categories" />
                            <v-select class="news-search-item" :placeholder="$t('search.type')" v-model="fakeType" :options="types" />
                            <v-select class="news-search-item" :placeholder="$t('search.sources')" v-model="source" :options="srcs" />
                            <datepicker class="news-search-item" :format="customFormatter" :value="date" v-if="false" />
                        </client-only>
                    </div>
                    <div class="news-search">
                        <div class="news-search__togglers">
                            <Toggler :title="'interesting'" v-model="interesting" />
                            <Toggler :title="'video'" v-model="video" />
                        </div>
                    </div>
                </form>
                <div class="mobile-search">
                    <div class="mobile-search__cat">
                        <default-select class="news-search-item" :placeholder="$t('search.cats')" :value="cat_id" :title="'cat'" :options="categories" />
                    </div>
                    <button class="mobile-search__open" @click="isMobileMenuActive = true">
                        <img src="~/static/svg/mobile/mobile-menu-plus.svg" />
                    </button>
                </div>
                <div class="news-cards-overlay desktop-news">
                    <clink :to="`/news/${item.slug}`" class="news-cards-item" v-for="(item, index) in searchNews"
                           :key="index">
                        <div class="news-cards-item__inner">
                            <div class="news-cards-item-title" v-if="item.title">
                                <span>{{ item.title[$i18n.locale] }}</span>
                            </div>
                            <div class="news-cards-item-image">
                                <img :data-src="`${$imagesUrl}/${item.image}`" v-lazy-load>
                                <div class="news-card-image__infos">
                                    <div class="news-card-image__infos__comments">
                                        <svg-icon name="comments"/>
                                        <span>{{ item.comments || 0 }}</span>
                                    </div>
                                    <div class="news-card-image__infos__bar"></div>
                                    <div class="news-card-image__infos__time">
                                        <span>{{ item.updated_at | moment("from", "now") }}</span>
                                    </div>
                                    <div class="news-card-image__infos__bar"></div>
                                    <div class="news-card-image__infos__country">
                                        <span>{{ item.country[$i18n.locale] }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="news-cards-item-text">
                                {{ item.description[$i18n.locale] }}
                            </div>
                        </div>
                    </clink>
                </div>
                <div class="mobile-news">
                    <template v-for="(item, index) in searchNews">
                        <clink :to="`/news/${item.slug}`" class="news-cards-item" :key="index + 'x'">
                            <div class="news-cards-item__inner">
                                <div class="news-cards-item-image">
                                    <img :data-src="`${$imagesUrl}/${item.image}`" v-lazy-load>
                                    <div class="news-card-image__infos">
                                        <div class="news-card-image__infos__comments">
                                            <svg-icon name="comments"/>
                                            <span>{{ item.comments || 0 }}</span>
                                        </div>
                                        <div class="news-card-image__infos__bar"></div>
                                        <div class="news-card-image__infos__time">
                                            <span>{{ item.updated_at | moment("from", "now") }}</span>
                                        </div>
                                        <div class="news-card-image__infos__bar"></div>
                                        <div class="news-card-image__infos__country">
                                            <span>{{ item.country[$i18n.locale] }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="news-cards-item-info">
                                    <div class="news-cards-item-title" v-if="item.title">
                                        <span>{{ item.title[$i18n.locale] }}</span>
                                    </div>
                                    <div class="news-cards-item-text">
                                        {{ item.description[$i18n.locale] }}
                                    </div>
                                </div>
                            </div>
                        </clink>
                    </template>
                </div>
                <Pagination :perPage="perPage" :totalElems="totalElems" v-model="curPage" :emptyText="'not-found'" />
            </div>
            <div class="page__aside news-page__aside">
                <VirusStatic :virusWorldWide="virusWorldWide" :virusLocal="virusLocal"/>
                <LeftSidebar style="height: 60% !important;"/>
            </div>
        </div>
        <MobileMenu
            v-model="isMobileMenuActive"
            :locations="locations"
            :srcs="srcs"
            :categories="categories"
            :countries="countries"
            :types="types"
            :country="country"
            :source="source"
            :cat_id="cat_id"
            :updated_at="updated_at"
            :fakeType="fakeType"
            :title="title"
            :video="video"
            :interesting="interesting"
        />
    </div>
</template>

<script>
    import LeftSidebar from "~/components/global/LeftSidebar";
    import Pagination from "~/components/global/Pagination";
    import VirusStatic from "~/components/global/VirusStatic";
    import Toggler from "~/components/global/Toggler";
    import MobileMenu from "~/components/global/mobile/MobileMenu";
    import DefaultSelect from "~/components/global/DefaultSelect";
    import Datepicker from 'vue-moment-datepicker';

    import {mapActions, mapState} from 'vuex';

    export default {
        components: {VirusStatic, LeftSidebar, Datepicker, Pagination, Toggler, MobileMenu, "default-select": DefaultSelect},

        created() {
            this.getVirus();
            this.getCats();
            this.getLocations();
            this.getSources();
            this.readURLQuery();
            this.search();
        },

        head() {
            return {
                title: `${this.$t('MetaTitle')}`,
                meta: [
                    {name: 'description', content: `${this.$t('metaDescription')}` || ''},
                    {name: 'keywords', content: `${this.$t('keywords')}` || ''},
                    {property: 'og:title', content: `${this.$t('MetaTitle')}` || ''},
                    {property: 'og:description', content: `${this.$t('metaDescription')}` || ''},
                    {property: 'og:image', content: '/images/main-page/slide1.png' || ''},
                    {property: 'og:url', content: `https://covid.az/${this.$route.fullPath}` || ''},
                    {property: 'twitter:card', content: '/images/main-page/slide1.png' || ''},
                ]
            }
        },

        data() {
            return {
                date: Date.now(),

                curPage: 1,
                perPage: 18,

                country: '',
                source: '',
                cat_id: '',
                updated_at: '', // TODO LATER
                type: '',
                title: '',
                video: false,
                interesting: false,

                fakeType: '',

                isMobileMenuActive: false
            }
        },

        watch: {
            curPage(n, o) {
                this.updateQuery(true);
            },
            country(n, o) {
                this.updateQuery();
            },
            source(n, o) {
                this.updateQuery();
            },
            cat_id(n, o) {
                this.updateQuery();
            },
            updated_at(n, o) {
                this.updateQuery();
            },
            fakeType(n, o) {
                if (n == this.types[0]) this.type = 'local';
                else if (n == this.types[1]) this.type = 'worldwide';
                else this.type = '';

                this.updateQuery();
            },
            video(n, o) {
                this.updateQuery();
            },
            interesting(n, o) {
                this.updateQuery();
            }
        },

        watchQuery(n, o) {
            this.search();
        },

        mounted() {
            this.$bus.$on('update-search', (title) => {
                this.title = title;
                this.updateQuery();
            })
            this.$bus.$on('update-cat', (v) => {
                this.cat_id = v;
            })
            this.$bus.$on('update-title', (v) => {
                this.title = v;
            })
            this.$bus.$on('update-interesting', (v) => {
                this.interesting = v;
            })
            this.$bus.$on('update-video', (v) => {
                this.video = v;
            })
            this.$bus.$on('update-country', (v) => {
                this.country = v;
            })
            this.$bus.$on('update-cats', (v) => {
                this.cats = v;
            })
            this.$bus.$on('update-type', (v) => {
                this.fakeType = v;
            })
            this.$bus.$on('update-source', (v) => {
                this.source = v;
            })
            this.$bus.$on('search', () => {
                this.updateQuery();
            })
        },

        methods: {
            ...mapActions('news', ['getNews', 'findNews', 'getPaginatedNews', 'getCats', 'getSearchNews']),
            ...mapActions('virus', ['getVirus']),
            ...mapActions('search', ['getLocations', 'getSources']),

            customFormatter(date) {
                return this.$moment(date).format("DD/MM/YYYY");
            },

            search() {
                this.getSearchNews(this.getSearchQuery());
            },

            updateQuery(savePage) {
                if (!savePage)
                    this.curPage = 1;
                this.$router.push({ query: this.getURLQuery() });
            },

            readURLQuery() {
                if (this.$route.query.country) {
                    this.country = this.$route.query.country;
                }
                if (this.$route.query.source) {
                    let source;
                    if (this.sources)
                    source = this.sources.find(v => v.title == this.$route.query.source);
                    if (source)
                        this.source = source.title;
                }
                if (this.$route.query.cat_id) {
                    let cat = this.cats.find(v => v.id == this.$route.query.cat_id);
                    if (cat && this.$i18n)
                        this.cat_id = cat.title[this.$i18n.locale];
                }
                if (this.$route.query.updated_at) {
                    this.updated_at = this.$route.query.updated_at;
                }
                if (this.$route.query.type) {
                    this.type = this.$route.query.type;
                    if (this.type == 'local') this.fakeType = this.types[0];
                    else if (this.type == 'worldwide') this.fakeType = this.types[1];
                }
                if (this.$route.query.title) {
                    this.title = this.$route.query.title;
                }
                if (this.$route.query.video) {
                    this.video = true;
                }
                if (this.$route.query.interesting) {
                    this.interesting = true;
                }
            },

            getURLQuery() {
                let query = {};

                if (this.country) {
                    query.country = this.country;
                }
                if (this.source) {
                    let source = this.sources.find(v => v.title == this.source);
                    if (source)
                        query.source = source.title;
                }
                if (this.cat_id && this.$i18n) {
                    let cat = this.cats.find(v => v.title[this.$i18n.locale] == this.cat_id);
                    if (cat)
                        query.cat_id = cat.id;
                }
                if (this.updated_at) {
                    query.updated_at = this.updated_at;
                }
                if (this.type) {
                    query.type = this.type;
                }
                if (this.title) {
                    query.title = this.title;
                }
                if (this.video) {
                    query.video = this.video;
                }
                if (this.interesting) {
                    query.interesting = this.interesting;
                }

                query.page = this.curPage;

                return query;
            },

            getSearchQuery() {
                let query = this.getURLQuery();

                if (this.$i18n)
                    query.lang = this.$i18n.locale;
                query.per_page = this.perPage;

                return query;
            }
        },

        computed: {
            ...mapState('news', ['news', 'newsData', 'activeNews', 'cats', 'totalElems', 'searchNews']),
            ...mapState('virus', ['virusWorldWide', 'virusLocal']),
            ...mapState('search', ['locations', 'sources']),

            categories() {
                const newsCats = [];
                if (this.cats) {
                    this.cats.forEach((item) => {
                        newsCats.push(item.title[this.$i18n.locale]);
                    });
                }
                return newsCats;

            },

            countries() {
                const newsCats = [];
                if (this.locations) {
                    this.locations.forEach((item) => {
                        newsCats.push(item.title[this.$i18n.locale]);
                    });
                }
                return newsCats;
            },

            srcs() {
                const sources = [];
                if (this.sources) {
                    this.sources.forEach((item) => {
                        sources.push(item.title);
                    });
                }
                return sources;
            },

            types() {
                return [this.$t('local'),this.$t('worldwide')];
            }
        }
    }

</script>
