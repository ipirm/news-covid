<template>
    <div class="page__aside left">
        <div class="sidebar__advertising">
            <img v-if="banners" :src="`${$imagesUrl}/${banners.image_first}`">
        </div>
        <div class="sidebar__sticky__wrapper">
            <div class="sidebar__sticky"></div>
            <div class="sidebar__sticky">
                <div class="sidebar__videos__title">
                    <span>{{ $t('interestingVideos')}} </span>
                </div>
                <client-only>
                    <vue-scroll :ops="ops">
                        <div class="scroll-news">
                            <clink :to="`/news/${item.slug}`" class="sidebar__sticky__card" v-for="(item, index) in videoNews" :key="index">
                                <div class="sidebar__sticky__card__content">
                                    <img class="sidebar__sticky__img" :src="`${$imagesUrl}/${item.image}`">
                                    <span>{{ item.title[$i18n.locale] }}</span>
                                </div>
                                <div class="sidebar__sticky__card__bar" v-if="index != videoNews.length - 1"></div>
                            </clink>
                        </div>
                    </vue-scroll>
                </client-only>
            </div>
        </div>
    </div>

</template>

<script>
    import {mapActions, mapState} from 'vuex'
    export default {
        created() {
            this.getVideoNews();
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
        methods:{
            ...mapActions('news', ['getVideoNews']),
        },
        computed: {
            ...mapState('news', ['videoNews']),
            ...mapState('news', ['banners'])
        }
    }
</script>

<style scoped>

</style>
