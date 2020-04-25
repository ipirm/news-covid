<template>
    <div class="main-page__video-slider">
        <h2 class="main-page__video-slider__title main-page__mobile__news-slider__title" v-if="title">{{ $t(title) }}</h2>
        <div class="main-page__video-slider__container">
            <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" :key="index" v-for="(item, index) in data">
                        <VideoComponent width="100%" height="350" :data="item" />
                        <clink :to="`/news/${item.slug}`" class="swiper-desc" style="text-align: left;" v-if="item.title">
                            <div class="swiper-title">{{ item.title[$i18n.locale] }}</div>
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
    import { mapState, mapActions} from 'vuex';
    import VideoComponent from "~/components/pages/main/VideoComponent";

    export default {
        props: ['data', 'title'],

        name: 'VideoSlider',

        components: {VideoComponent},

        data() {
            return {
                swiperOption: {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    loop: false,
                    observer: true,
                    observeParents: true,
                    breakpoints: {
                        761: {
                            slidesPerView: 2,
                            loop: false
                        }
                    }
                },
                videos: []
            }
        }
    }
</script>

<style scoped>

</style>
