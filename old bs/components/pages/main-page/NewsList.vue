<template>
    <div>
        <link-i18n :to="`/news/${i}`" class="news-card" v-for="(item, i) in firstPost" :key="i">
            <div class="news-card-title">
                <span>{{ item.title[$i18n.locale] }}</span>
            </div>
            <div class="news-card-image">
                <img :src="`${$imagesUrl}/${item.image}`"/>
            </div>
            <div class="news-card-setting">
                <div class="news-card-comments">
                    116 {{ $t('nComments')}}
                    <div class="news-card-date">
                        <span>{{ item.updated_at  | moment("from", "now") }}</span>
                        <span>{{ item.country[$i18n.locale] }}</span>
                    </div>
                </div>
            </div>
            <div class="news-card-text">
                {{ item.description[$i18n.locale]  }}
            </div>
        </link-i18n>
        <div class="news">
            <link-i18n :to="`/news/${i+1}`" class="news-card news-card-half" v-for="(item, i) in halfPosts" :key="i">
                <div class="news-card-title">
                    <span>{{ item.title[$i18n.locale] }}</span>
                </div>
                <div class="news-card-image">
                    <img :src="`${$imagesUrl}/${item.image}`"/>
                </div>
                <div class="news-card-setting">
                    <div class="news-card-comments">
                        116 {{ $t('nComments')}}
                        <div class="news-card-date">
                            <span>{{ item.updated_at | moment("from", "now") }}</span>
                            <span>{{ item.country[$i18n.locale] }}</span>
                        </div>
                    </div>
                </div>
                <div class="news-card-text">
                    {{ item.description[$i18n.locale] }}
                </div>
            </link-i18n>
        </div>
        <div class="list-news" v-if="data">
            <link-i18n :to="`/news/${index + 5}`" class="list-news-card" v-for="(item,index ) in data.slice(5,dataIndex)" :key="index">
                <img :src="`${$imagesUrl}/${item.image}`">
                <div class="list-news-desc">
                    <div class="list-news-title">{{ item.title[$i18n.locale] }}</div>
                    <div class="list-news-subtitle">{{ item.description[$i18n.locale]  }}</div>
                </div>
            </link-i18n>
        </div>
        <div class="news-card-btn" @click="nextNews()" v-if="data && parseInt(this.dataIndex) < data.length">
            <span>{{ $t('moreNews')}}</span>
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
        computed: {
            firstPost() {
                if (this.data)
                    return this.data.slice(0, 1);
                else return [];
            },

            halfPosts() {
                if (this.data)
                    return this.data.slice(1, 5);
                else return [];
            }
        }
    }
</script>

<style scoped>

</style>
