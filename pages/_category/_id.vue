<template>
    <div>
        <section class="main-page-content">
            <div class="container-fluid" v-if="activeNews">
                <div class="row">
                    <div class="col-lg-2">
                    </div>
                    <div class="col-lg-7">
                        <div class="news-content-breadcumbs">
                            <link-i18n to="/">Главная</link-i18n>
                            <link-i18n to="/news/">Категория</link-i18n>
                            <a>{{ activeNews.title }}</a>
                        </div>
                        <div class="news-content-title">
                            <span>{{ activeNews.title }}</span>
                        </div>
                        <div class="news-content-image">
                            <img :src="activeNews.urlToImage">
                        </div>
                        <div class="news-content-date">
                            <div class="news-content-date-item">Источник: {{ activeNews.source.name }}</div>
                            <div class="news-content-date-item">{{ activeNews.publishedAt | moment("from", "now") }}
                            </div>
                            <div class="news-content-date-item">Spain</div>
                        </div>
                        <div class="news-content-text">
                            <b>{{ activeNews.description}}</b><br><br>
                            {{ activeNews.content }}
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <LeftSidebar :data="news"/>
                    </div>
                </div>
            </div>
        </section>
        <div class="container-fluid news-cards-container">
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-7">
                    <div class="news-cards-title">
                        <span>You may also be interested in:</span>
                    </div>
                    <div class="news-cards-overlay" v-if="news">
                        <link-i18n
                                :to="`/category/${index}`"
                                class="news-cards-item"
                                v-for="(item, index) in news.slice(0,3)"
                                :key="index">
                            <div class="news-cards-item-image">
                                <img :src="item.urlToImage">
                            </div>
                            <div class="news-cards-item-title">
                                <span>{{ item.title}}</span>
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
                    <div class="overlay-banner">
                        <img src="/images/main-page/right-advertising.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LeftSidebar from "../../components/pages/main-page/LeftSidebar";

    import {mapActions, mapState} from 'vuex'

    export default {
        components: {LeftSidebar},
        created() {
            this.getNews().then(() => this.findNews(this.$route.params.id));
        },
        data() {
            return {}
        },
        methods: {
            ...mapActions('news', ['getNews']),
            ...mapActions('news', ['findNews'])
        },
        computed: {
            ...mapState('news', ['news']),
            ...mapState('news', ['activeNews'])
        },
    }
</script>

<style scoped>

</style>
