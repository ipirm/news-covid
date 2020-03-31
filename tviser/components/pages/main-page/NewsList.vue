<template>
    <div>
        <div v-if="data !== null">
            <link-i18n to="/" class="news-card">
                <div class="news-card-title">
                    <span>{{ data[0].title}}</span>
                </div>
                <div class="news-card-image">
                    <img :src="data[0].urlToImage"/>
                </div>
                <div class="news-card-setting">
                    <div class="news-card-comments">
                        116 Комментариев
                        <div class="news-card-date">
                            <span>{{data[0].publishedAt  | moment("from", "now") }}</span>
                            <span>Spain</span>
                        </div>
                    </div>
                </div>
                <div class="news-card-text">
                    {{ data[0].content}}
                </div>
            </link-i18n>
            <link-i18n to="/" class="news-card">
                <div class="news-card-title">
                    <span>{{ data[1].title}}</span>
                </div>
                <div class="news-card-image">
                    <img :src="data[1].urlToImage"/>
                </div>
                <div class="news-card-setting">
                    <div class="news-card-comments">
                        116 Комментариев
                        <div class="news-card-date">
                            <span>{{ data[1].publishedAt  | moment("from", "now") }}</span>
                            <span>Spain</span>
                        </div>
                    </div>
                </div>
                <div class="news-card-text">
                    {{ data[1].content}}
                </div>
            </link-i18n>
            <div class="d-flex">
                <link-i18n to="/" class="news-card">
                    <div class="news-card-title">
                        <span>{{ data[2].title}}</span>
                    </div>
                    <div class="news-card-image">
                        <img :src="data[2].urlToImage"/>
                    </div>
                    <div class="news-card-setting">
                        <div class="news-card-comments">
                            116 Комментариев
                            <div class="news-card-date">
                                <span>{{data[2].publishedAt  | moment("from", "now") }}</span>
                                <span>Spain</span>
                            </div>
                        </div>
                    </div>
                    <div class="news-card-text">
                        {{ data[2].content}}
                    </div>
                </link-i18n>
                <div class="d-flex" style="flex-direction: column">
                    <link-i18n to="/" class="news-card">
                        <div class="news-card-title">
                            <span>{{ data[3].title}}</span>
                        </div>
                        <div class="news-card-image">
                            <img :src="data[3].urlToImage"/>
                        </div>
                        <div class="news-card-setting">
                            <div class="news-card-comments">
                                116 Комментариев
                                <div class="news-card-date">
                                    <span>{{data[3].publishedAt  | moment("from", "now") }}</span>
                                    <span>Spain</span>
                                </div>
                            </div>
                        </div>
                    </link-i18n>
                    <link-i18n to="/" class="news-card">
                        <div class="news-card-title">
                            <span>{{ data[4].title}}</span>
                        </div>
                        <div class="news-card-image">
                            <img :src="data[4].urlToImage"/>
                        </div>
                    </link-i18n>
                </div>
            </div>
            <div class="d-flex">
                <link-i18n to="/" class="news-card">
                    <div class="news-card-title">
                        <span>{{ data[5].title}}</span>
                    </div>
                    <div class="news-card-image">
                        <img :src="data[5].urlToImage"/>
                    </div>
                    <div class="news-card-setting">
                        <div class="news-card-comments">
                            116 Комментариев
                            <div class="news-card-date">
                                <span>{{data[5].publishedAt  | moment("from", "now") }}</span>
                                <span>Spain</span>
                            </div>
                        </div>
                    </div>
                    <div class="news-card-text">
                        {{ data[5].content}}
                    </div>
                </link-i18n>
                <link-i18n to="/" class="news-card">
                    <div class="news-card-title">
                        <span>{{ data[6].title}}</span>
                    </div>
                    <div class="news-card-image">
                        <img :src="data[6].urlToImage"/>
                    </div>
                    <div class="news-card-setting">
                        <div class="news-card-comments">
                            116 Комментариев
                            <div class="news-card-date">
                                <span>{{data[6].publishedAt  | moment("from", "now") }}</span>
                                <span>Spain</span>
                            </div>
                        </div>
                    </div>
                    <div class="news-card-text">
                        {{ data[6].content}}
                    </div>
                </link-i18n>
            </div>
                        <div class="list-news" v-if="data">
                            <link-i18n to="/" class="list-news-card" v-for="(item,index ) in data.slice(7,dataIndex)" :key="index">
                                <img :src="item.urlToImage">
                                <div class="list-news-desc">
                                    <div class="list-news-title">{{ item.title }}</div>
                                    <div class="list-news-subtitle">{{ item.content }}</div>
                                </div>
                            </link-i18n>
                        </div>
                        <a href="#" class="news-card-btn" @click.prevent="nextNews()" v-if="parseInt(this.dataIndex) < data.length">
                            <span>Больше новостей</span>
                        </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsList",
        props: {
            data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                dataIndex: 12,
            }
        },
        methods:{
            nextNews() {
                if(parseInt(this.dataIndex) < this.data.length) {
                    this.dataIndex = parseInt(this.dataIndex) + 6;
                }
            }
        },
        computed: {}
    }
</script>

<style scoped>

</style>
