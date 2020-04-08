<template>
    <div class="right-advertising-row">
        <div class="right-advertising">
            <img src="/images/main-page/right-advertising.png">
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
            ...mapActions('news', ['getVideoNews'])
        },
        computed: {
            ...mapState('news', ['videoNews'])
        }
    }
</script>

<style scoped>

</style>
