<template>
    <div class="container-fluid" style="margin-top: 50px">
        <div class="video-title" style="margin-left: 30px">How nature reacts the virus? </div>
        <div class="row">
            <div class="col-12">
                <div v-swiper:mySwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" :key="index" v-for="index in 6">
                            <VideoComponent />
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
    import VideoComponent from "../../elements/VideoComponent";
    export default {
        name: 'VideoSlider',
        components: {VideoComponent},
        data() {
            return {
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
