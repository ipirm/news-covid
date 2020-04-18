<template>
    <div class="main-page__video-slider">
        <h2 class="main-page__video-slider__title">How nature reacts with the virus? </h2>
        <div class="main-page__video-slider__container">
            <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" :key="index" v-for="(item, index) in naturalVideos">
                        <VideoComponent width="100%" height="300px" :data="item" />
                        <clink :to="'/'" class="swiper-desc">
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
        name: 'VideoSlider',
        components: {VideoComponent},
        created(){
          this.getNaturalVideos();
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    observer: true,
                    observeParents: true
                },
                videos: []
            }
        },
        methods:{
            ...mapActions('news', ['getNaturalVideos']),
        },
        computed: {
            ...mapState('news', ['naturalVideos'])
        }
    }
</script>

<style scoped>

</style>
