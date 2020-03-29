<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div v-swiper:mySwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" :key="banner" v-for="banner in banners">
                            <img :src="banner">
                            <div class="swiper-desc">
                                <div class="swiper-title">Coronavirus pandemia over the whole world</div>
                                <link-i18n to="/">read more</link-i18n>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainSlider',
        data() {
            return {
                banners: ['/images/main-page/slide1.jpg', '/images/main-page/slide1.jpg', '/images/main-page/slide1.jpg', '/images/main-page/slide1.jpg'],
                swiperOption: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                }
            }
        },
        mounted() {
            console.log('Current Swiper instance object', this.mySwiper)
            this.mySwiper.slideTo(3, 1000, false)
        }
    }
</script>

<style scoped>

</style>
