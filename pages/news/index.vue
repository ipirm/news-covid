<template>
    <div>
        <div class="container-fluid news-cards-container news-page">
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-7">
                    <div class="d-flex overlay-category">
                        <div class="news-cards-title">
                            <span class="mb-2" style="display: inline-block">Выберите категорию</span>
                            <v-select
                                placeholder="Введение ЧП"
                                v-model="selected"
                                :options="getOptions"
                                @input="changeRoute"
                            />
                        </div>
                        <div class="news-cards-title">
                            <span class="mb-2" style="display: inline-block">Поиск статьи</span>
                            <input class="news-cards-input" placeholder="Введение текст"/>
                        </div>
                        <div class="news-cards-title" style="margin-right: 20px">
                            <span class="mb-2" style="display: inline-block">Выберите промежуток даты</span>
                            <datepicker :format="customFormatter" :value="date" />
                        </div>
                    </div>
                    <div class="news-cards-overlay">
                        <link-i18n
                                :to="`/news/${item.slug}`"
                                class="news-cards-item"
                                v-for="(item, index) in newsData"
                                :key="index">
                            <div class="news-cards-item-title" v-if="item.title">
                                <span>{{ item.title[$i18n.locale] | truncate(35) }}</span>
                            </div>
                            <div class="news-cards-item-image">
                                <img :src="`${$imagesUrl}/${item.image}`">
                            </div>
                            <div class="news-cards-item-text">
                                {{ item.description[$i18n.locale] }}
                            </div>
                            <div class="news-content-date news-cards-date">
                                <div class="news-content-date-item">{{ item.created_at | moment("from", "now") }}</div>
                                <div class="news-content-date-item">{{ item.country[$i18n.locale]}}</div>
                            </div>
                        </link-i18n>
                    </div>
                    <Pagination :curPage="curPage" :perPage="perPage" :totalElems="totalElems" v-model="curPage" />
                </div>
                <div class="col-lg-3">
                    <VirusStatic :virusWorldWide="virusWorldWide" :virusLocal="virusLocal"/>
                    <LeftSidebar  style="height: 60% !important;"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LeftSidebar from "../../components/pages/main-page/LeftSidebar";
    import Pagination from "../../components/elements/Pagination";

    import {mapActions, mapState} from 'vuex'
    import VirusStatic from "../../components/global/VirusStatic";
    import Datepicker from 'vue-moment-datepicker';

    export default {
        components: {VirusStatic, LeftSidebar, Datepicker, Pagination},

        created() {
            this.getVirus();
            this.getCats().then(()=>{
                if(this.$route.query.type) {
                    this.link = this.cats.find(i => i.slug === this.$route.query.type);
                    this.selected = this.link.title[this.$i18n.locale]
                    this.getPaginatedNews({id: this.link.id, curPage: this.curPage, perPage: this.perPage});
                } else {
                    this.getPaginatedNews({curPage: this.curPage, perPage: this.perPage});
                }
            });
        },
        watch: {
            curPage(n,o) {
                if (this.link.id)
                    this.getPaginatedNews({id: this.link.id, curPage: n, perPage: this.perPage});
                else
                    this.getPaginatedNews({curPage: n, perPage: this.perPage});
            }
        },

        data() {
            return {
                selected: '',
                link: {},
                date: Date.now(),
                curPage: 1,
                perPage: 9
            }
        },

        methods: {
            ...mapActions('news', ['getNews', 'findNews', 'getPaginatedNews', 'getCats']),
            ...mapActions('virus', ['getVirus']),

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
            }
        },

        computed: {
            ...mapState('news', ['news', 'newsData', 'activeNews', 'cats', 'totalElems']),
            ...mapState('virus', ['virusWorldWide', 'virusLocal']),

            getOptions() {
                const newsCats = [];
                if(this.cats) {
                    this.cats.forEach((item) => {
                        newsCats.push(item.title[this.$i18n.locale])
                    });
                }
                return newsCats;
            }
        },
    }
</script>
