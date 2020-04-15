<template>
    <div class="main-page__main-slider">
        <div class="custom-container custom-container--main">
            <div v-swiper:mySwiper="swiperOption" class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item, index) in slidesNews" :key="index">
                        <clink :to="`/news/${item.slug}`">
                            <img :src="`${$imagesUrl}/${item.image}`" class="main-page__main-slider__pic">
                            <div class="swiper-desc">
                                <div class="swiper-title">{{item.title[$i18n.locale] | truncate(50) }}</div>
                            </div>
                        </clink>
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
