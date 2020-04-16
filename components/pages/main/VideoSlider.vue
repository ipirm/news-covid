<template>
    <div class="main-page__video-slider">
        <h2 class="main-page__video-slider__title">How nature reacts with the virus?</h2>
        <div class="main-page__video-slider__container">
            <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" :key="index" v-for="(item, index) in 6">
                        <VideoComponent />
                        <clink :to="'/'" class="swiper-desc">
                            <div class="swiper-title">Coronavirus pandemia over the whole world</div>
                        </clink>
                    </div>
                </div>
            </div>
            <div class="main-page__video-slider__arrow-left" @click="mySwiper.slidePrev()">
                <img data-src="~/assets/svg/video-arrow-right.svg" v-lazy-load />
            </div>
            <div class="main-page__video-slider__arrow-right" @click="mySwiper.slideNext()">
                <img data-src="~/assets/svg/video-arrow-right.svg" v-lazy-load />
            </div>
        </div>
    </div>
</template>

<script>
    import VideoComponent from "~/components/pages/main/VideoComponent";

    export default {
        name: 'VideoSlider',
        components: {VideoComponent},
        data() {
            return {
                swiperOption: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    observer: true,
                    observeParents: true
                }
            }
        }
    }
</script>

<style scoped>

</style>
