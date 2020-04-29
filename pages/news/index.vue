<template>
    <div class="news-page news-page-list">
        <div class="page__content custom-container custom-container--news">
            <div class="page__double-main">
                <form class="d-flex overlay-category" @submit.prevent="search">
                    <div class="news-search">
                        <input class="news-cards-input" v-model="title" :placeholder="$t('search.searchNews')"/>
                        <button class="news-search-btn" type="submit"><span>{{ $t('search.searchBtn')}}</span></button>
                    </div>
                    <div class="news-search middle">
                        <client-only>
                            <v-select class="news-search-item" :placeholder="$t('search.country')" v-model="country" :options="countries" />
                            <v-select class="news-search-item" :placeholder="$t('search.cats')" v-model="cat_id" :options="categories" />
                            <v-select class="news-search-item" :placeholder="$t('search.type')" v-model="type" :options="['local','worldwide']" />
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
                <div class="news-cards-overlay">
                    <clink :to="`/news/${item.slug}`" class="news-cards-item" v-for="(item, index) in searchNews"
                           :key="index">
                        <div class="news-cards-item__inner">
                            <div class="news-cards-item-title" v-if="item.title">
                                <span>{{ item.title[$i18n.locale] | truncate(50) }}</span>
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
                                {{ item.description[$i18n.locale] | truncate(100) }}
                            </div>
                        </div>
                    </clink>
                </div>
                <Pagination :perPage="perPage" :totalElems="totalElems" v-model="curPage" :emptyText="'not-found'" />
            </div>
            <div class="page__aside news-page__aside">
                <VirusStatic :virusWorldWide="virusWorldWide" :virusLocal="virusLocal"/>
                <LeftSidebar style="height: 60% !important;"/>
            </div>
        </div>
    </div>
</template>

<script>
    import LeftSidebar from "~/components/global/LeftSidebar";
    import Pagination from "~/components/global/Pagination";
    import VirusStatic from "~/components/global/VirusStatic";
    import Toggler from "~/components/global/Toggler";
    import Datepicker from 'vue-moment-datepicker';

    import {mapActions, mapState} from 'vuex';

    export default {
        components: {VirusStatic, LeftSidebar, Datepicker, Pagination, Toggler},

        created() {
            this.getVirus();
            this.getCats();
            this.getLocations();
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
                locationsItems: '',
                date: Date.now(),

                curPage: 1,
                perPage: 18,

                country: '',
                source: '', // TODO LATER
                cat_id: '',
                updated_at: '', // TODO LATER
                type: '',
                title: '',
                video: false,
                interesting: false
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
            type(n, o) {
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
            this.$bus.$on('updateCat', (cat) => {
                this.cat_id = cat;
            })
        },

        methods: {
            ...mapActions('news', ['getNews', 'findNews', 'getPaginatedNews', 'getCats', 'getSearchNews']),
            ...mapActions('virus', ['getVirus']),
            ...mapActions('search', ['getLocations']),

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
                    this.source = this.$route.query.source;
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
                    query.source = this.source;
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
            ...mapState('search', ['locations']),

            categories() {
                const newsCats = [];
                if (this.cats) {
                    this.cats.forEach((item) => {
                        newsCats.push(item.title[this.$i18n.locale])
                    });
                }
                return newsCats;

            },

            countries() {
                const newsCats = [];
                if (this.locations) {
                    this.locations.forEach((item) => {
                        newsCats.push(item.title[this.$i18n.locale])
                    });
                }
                return newsCats;
            }
        }
    }

</script>
