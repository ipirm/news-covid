<template>
    <div class="news-page news-page-list">
        <div class="page__content custom-container custom-container--news">
            <div class="page__double-main">
                <form class="d-flex overlay-category" @submit.prevent="submitForm">
                    <div class="news-search d-flex">
                        <input class="news-cards-input" v-model="titleSearch" :placeholder="$t('search.searchNews')"/>
                        <button class="news-search-btn" type="submit"><span>{{ $t('search.searchBtn')}}</span></button>
                    </div>
                    <div class="news-search d-flex">
                        <v-select :placeholder="$t('search.country')" v-model="selectedLocation"
                                  :options="getOptionsLocations"
                        />
                        <v-select class="cats-select" :placeholder="$t('search.cats')" v-model="selected"
                                  :options="getOptions"
                                  @input="changeRoute"/>
                        <v-select :placeholder="$t('search.type')" v-model="selectedType" :options="['local','worldwide']"
                        />
                        <datepicker :format="customFormatter" :value="date"/>
                    </div>
                </form>
                <div class="news-cards-overlay">
                    {{ searchNews }}
                    <clink :to="`/news/${item.slug}`" class="news-cards-item" v-for="(item, index) in newsData"
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
                <Pagination :curPage="curPage" :perPage="perPage" :totalElems="totalElems" v-model="curPage"/>
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
    import Datepicker from 'vue-moment-datepicker';

    import {mapActions, mapState} from 'vuex';

    export default {
        components: {VirusStatic, LeftSidebar, Datepicker, Pagination},

        created() {
            this.getVirus();
            this.getCats();
            this.getLocations();
            this.queryHandler();
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
        watch: {
            curPage(n, o) {
                if (this.link)
                    this.getPaginatedNews({id: this.link.id, curPage: n, perPage: this.perPage});
                else
                    this.getPaginatedNews({curPage: n, perPage: this.perPage});
            }
        },
        watchQuery(n, o) {
            this.link = this.cats.find(i => i.slug === n.type);
            if (this.link) {
                this.selected = this.link.title[this.$i18n.locale]
                this.getPaginatedNews({id: this.link.id, curPage: this.curPage, perPage: this.perPage});
            } else {
                this.getPaginatedNews({curPage: this.curPage, perPage: this.perPage});
            }
        },
        data() {
            return {
                selected: '',
                selectedLocation: '',
                selectedType: '',
                locationsItems: '',
                date: Date.now(),
                link: {
                    id: 0
                },
                curPage: 1,
                perPage: 18,
                titleSearch: ''
            }
        },

        methods: {
            ...mapActions('news', ['getNews', 'findNews', 'getPaginatedNews', 'getCats', 'getSearchNews']),
            ...mapActions('virus', ['getVirus']),
            ...mapActions('search', ['getLocations']),
            submitForm() {
                let body = {
                    country: this.selectedLocation || '',
                    lang: this.$i18n.locale || '',
                    type: this.selectedType,
                    title: this.titleSearch,
                    cat_id: ""
                }
                console.log(body);
                this.getSearchNews(body);
            },
            customFormatter(date) {
                return this.$moment(date).format("DD/MM/YYYY");
            },
            changeRoute() {
                this.link = this.cats.find(i => i.title[this.$i18n.locale] === this.selected);
                if (this.link) {
                    this.$router.push({query: {type: this.link.slug}});
                    this.getPaginatedNews({id: this.link.id, curPage: this.curPage, perPage: this.perPage}); // getting by category
                } else {
                    this.$router.push({query: {}});
                    this.getPaginatedNews({curPage: this.curPage, perPage: this.perPage});
                }
            },
            queryHandler() {
                if (this.$route.query.type) {
                    this.link = this.cats.find(i => i.slug === this.$route.query.type);
                    this.selected = this.link.title[this.$i18n.locale]
                    this.getPaginatedNews({id: this.link.id, curPage: this.curPage, perPage: this.perPage});
                } else {
                    this.getPaginatedNews({curPage: this.curPage, perPage: this.perPage});
                }
            }
        },

        computed: {
            ...mapState('news', ['news', 'newsData', 'activeNews', 'cats', 'totalElems', 'searchNews']),
            ...mapState('virus', ['virusWorldWide', 'virusLocal']),
            ...mapState('search', ['locations']),
            getOptions() {
                const newsCats = [];
                if (this.cats) {
                    this.cats.forEach((item) => {
                        newsCats.push(item.title[this.$i18n.locale])
                    });
                }
                return newsCats;

            },
            getOptionsLocations() {
                const newsCats = [];
                if (this.locations) {
                    this.locations.forEach((item) => {
                        newsCats.push(item.title[this.$i18n.locale])
                    });
                }
                return newsCats;

            },
        },
    }

</script>
