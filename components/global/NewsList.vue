<template>
    <div>
        <clink :to="`/news/${i}`" class="news-card" v-for="(item, i) in firstPosts" :key="i">
            <div class="news-card-title">
                <span>{{ item.title[$i18n.locale] }}</span>
            </div>
            <div class="news-card-image">
                <img :src="`${$imagesUrl}/${item.image}`"/>
                <div class="news-card-image__infos">
                    <div class="news-card-image__infos__comments">
                        <svg-icon name="comments" />
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
            <div class="news-card-text">
                {{ item.description[$i18n.locale]  }}
            </div>
        </clink>
        <div class="news">
            <clink :to="`/news/${i+1}`" class="news-card news-card-half" v-for="(item, i) in halfPosts" :key="i">
                <div class="news-card-title">
                    <span>{{ item.title[$i18n.locale] }}</span>
                </div>
                <div class="news-card-image">
                    <img :src="`${$imagesUrl}/${item.image}`"/>
                    <div class="news-card-image__infos">
                    <div class="news-card-image__infos__comments">
                        <svg-icon name="comments" />
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
                <div class="news-card-text">
                    {{ item.description[$i18n.locale] }}
                </div>
            </clink>
        </div>
        <div class="list-news" v-if="data">
            <clink :to="`/news/${index + 5}`" class="list-news-card" v-for="(item,index ) in data.slice(5,this.data.length)" :key="index">
                <img :src="`${$imagesUrl}/${item.image}`">
                <div class="list-news-desc">
                    <div class="list-news-title">{{ item.title[$i18n.locale] }}</div>
                    <div class="list-news-subtitle">{{ item.description[$i18n.locale]  }}</div>
                </div>
            </clink>
        </div>
        <div class="news-card-btn" @click="nextNews()" v-if="data && curPostCount < maxPosts">
            <span>{{ $t('moreNews')}}</span>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

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

        watch: {
            data(n,o) {
                if (n && n.length)
                    if (o && n.length != o.length) {
                        this.curPostCount = n.length;
                    } else if (o) {
                        this.maxPosts = n.length;
                    }
            }
        },

        data() {
            return {
                maxPosts: 20,
                curPostCount: this.data && this.data.length || 0
            }
        },

        methods: {
            ...mapActions('news', ['getPaginatedNews']),

            nextNews() {
                if(this.curPostCount < this.maxPosts) {
                    this.getPaginatedNews({curPage: 1, perPage: this.maxPosts})
                }
            }
        },
        
        computed: {
            firstPosts() {
                if (this.data)
                    return this.data.slice(0, 2);
                else return [];
            },

            halfPosts() {
                if (this.data)
                    return this.data.slice(2, 6);
                else return [];
            }
        }
    }
</script>
