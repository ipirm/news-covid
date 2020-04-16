<template>
    <div class="main-page__main-slider">
        <div class="custom-container custom-container--main">
            <div v-swiper:mySwiper="swiperOption" class="swiper-container" v-lazy-load>
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in slidesNews" :key="item.id">
                        <clink :to="`/news/${item.slug}`">
                            <img :data-src="`${$imagesUrl}/${item.image}`" class="main-page__main-slider__pic" v-lazy-load>
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
                    slidesPerView: 1,
                    spaceBetween: 10,
                    autoplay: true,
                    breakpoints: {
                        800: {
                            slidesPerView: 2
                        }
                    }
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
