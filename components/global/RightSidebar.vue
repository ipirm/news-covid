<template>
    <client-only>
        <div class="page__aside">
            <div class="sidebar__advertising">
                <img v-if="banners" :data-src="`${$imagesUrl}/${banners.image_second}`" v-lazy-load>
            </div>
            <div class="sidebar__sticky">
                <div class="sidebar__videos__title">
                    <span>{{ $t('interestingNews')}}: </span>
                </div>
                <vue-scroll :ops="ops">
                    <div class="scroll-news sidebar__right">
                        <clink :to="`/news/${item.slug}`"
                               class="sidebar__sticky__card sidebar__sticky__card__vertical"
                               v-for="(item, index) in interestingNews" :key="index">
                            <div class="sidebar__sticky__card__content">
                                <img class="sidebar__sticky__img" :src="`${$imagesUrl}/${item.image}`">
                                <span>{{ item.title[$i18n.locale] | truncate(35)  }}</span>
                            </div>
                            <div class="sidebar__sticky__card__bar"
                                 v-if="index != interestingNews.length - 1"></div>
                        </clink>
                    </div>
                </vue-scroll>
            </div>
        </div>
    </client-only>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        props: {
            data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        created() {
            this.getInterestingNews();
        },
        data() {
            return {
                ops: {
                    vuescroll: {},
                    scrollPanel: {},
                    rail: {},
                    bar: {
                        background: '#4c4c4c',
                        // #120888
                    }
                }
            }
        },
        methods: {
            ...mapActions('news', ['getInterestingNews']),
        },
        computed: {
            ...mapState('news', ['interestingNews']),
            ...mapState('news', ['banners'])
        }
    }
</script>

<style scoped>

</style>

