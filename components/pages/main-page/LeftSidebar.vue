<template>
    <div class="right-advertising-row" style="height: 83%;">
        <div class="right-advertising">
            <img src="/images/main-page/right-advertising.png">
        </div>
        <div class="right-videos">
            <div class="right-videos-title">
                <span>{{ $t('interestingNews')}}: </span>
            </div>
            <client-only>
                <vue-scroll :ops="ops">
                    <div class="scroll-news">
                        <link-i18n :to="`/news/${item.slug}`" class="right-videos-card main-news" v-for="(item, index) in interestingNews" :key="index">
                            <img class="left-videos-img" :src="`http://puny2.continent.az/storage/${item.image}`">
                            <span>{{ item.title[$i18n.locale] }}</span>
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
        created(){
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
        methods:{
            ...mapActions('news', ['getInterestingNews']),
        },
        computed: {
            ...mapState('news', ['interestingNews']),
        }
    }
</script>

<style scoped>

</style>

