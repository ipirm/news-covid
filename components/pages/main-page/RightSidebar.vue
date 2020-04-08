<template>
    <div class="right-advertising-row">
        <div class="right-advertising">
            <img v-if="banner" :src="`http://puny2.continent.az/storage/${banner.image_first}`">
        </div>
        <div class="right-videos">
            <div class="right-videos-title">
                <span>{{ $t('interestingVideos')}} </span>
            </div>
            <client-only>
                <vue-scroll :ops="ops">
                    <div class="scroll-news">
                        <link-i18n :to="`/news/${item.slug}`" class="right-videos-card" v-for="(item, index) in videoNews" :key="index">
                            <img class="right-videos-img" :src="`http://puny2.continent.az/storage/${item.image}`">
                            <span>{{ item.title[$i18n.locale]  }}</span>
                        </link-i18n>
                    </div>
                </vue-scroll>
            </client-only>
        </div>
    </div>

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
            this.getVideoNews();
            this.getBanners();
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
            ...mapActions('news', ['getBanners'])
        },
        computed: {
            ...mapState('news', ['videoNews']),
            ...mapState('news', ['banner'])
        }
    }
</script>

<style scoped>

</style>
