<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div v-swiper:mySwiper="swiperOption" class="main-swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in slidesNews" :key="index">
                            <link-i18n :to="`/news/${item.slug}`">
                                <img :src="`http://puny2.continent.az/storage/${item.image}`">
                                <div class="swiper-desc">
                                    <div class="swiper-title">{{item.title[$i18n.locale] | truncate(50) }}</div>
                                </div>
                            </link-i18n>
                        </div>
                    </div>
                </div>
            </div>
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
          this.getNewsSlides()
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    autoplay:true
                }
            }
        },
        methods:{
            ...mapActions('news', ['getNewsSlides']),
        },
        computed: {
            ...mapState('news', ['slidesNews']),
        }
    }
</script>

<style scoped>

</style>
