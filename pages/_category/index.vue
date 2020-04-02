<template>
    <div>
        <div class="container-fluid news-cards-container news-page">
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-7">
                    <div class="d-flex overlay-category">
                        <div class="news-cards-title">
                            <span class="mb-2" style="display: inline-block">Выберите категорию</span>
                            <v-select placeholder="Введение ЧП" v-model="selected" :options="['Vue.js','React']"/>
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
                    <div class="news-cards-overlay" v-if="news">
                        <link-i18n
                                :to="`/category/${index}`"
                                class="news-cards-item"
                                v-for="(item, index) in news.slice(0,12)"
                                :key="index">
                            <div class="news-cards-item-title" v-if="item.title">
                                <span>{{ `${item.title.substring(0,45)}...`}}</span>
                            </div>
                            <div class="news-cards-item-image">
                                <img :src="item.urlToImage">
                            </div>
                            <div class="news-cards-item-text">
                                <span>{{ item.content}}</span>
                            </div>
                            <div class="news-content-date news-cards-date">
                                <div class="news-content-date-item">{{ item.publishedAt | moment("from", "now") }}</div>
                                <div class="news-content-date-item">Spain</div>
                            </div>
                        </link-i18n>
                    </div>
                </div>
                <div class="col-lg-3">
                    <VirusStatic :virusWorldWide="virusWorldWide" :virusLocal="virusLocal"/>
                    <LeftSidebar :data="news" style="height: 60% !important;"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LeftSidebar from "../../components/pages/main-page/LeftSidebar";

    import {mapActions, mapState} from 'vuex'
    import VirusStatic from "../../components/global/VirusStatic";
    import Datepicker from 'vue-moment-datepicker';

    export default {
        components: {VirusStatic, LeftSidebar, Datepicker},
        created() {
            this.getNews().then(() => this.findNews(this.$route.params.id));
            this.getVirus();
        },
        data() {
            return {
                selected: '',
                date: Date.now()
            }
        },
        methods: {
            ...mapActions('news', ['getNews']),
            ...mapActions('news', ['findNews']),
            ...mapActions('virus', ['getVirus']),
                customFormatter(date) {
                    return this.$moment(date).format("DD/MM/YYYY");
            }
        },
        computed: {
            ...mapState('news', ['news']),
            ...mapState('news', ['activeNews']),
            ...mapState('virus', ['virusWorldWide']),
            ...mapState('virus', ['virusLocal'])
        },
    }
</script>

<style scoped>

</style>
