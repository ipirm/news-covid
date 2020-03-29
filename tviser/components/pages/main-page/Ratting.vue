<template>
    <div class="overlay-ratting">
        <div class="container ratting-container">
            <div class="row">
                <div class="overlay-ratting-title">
                    <span>Просмотрите наш самый высокий рейтинг сотрудников</span>
                </div>
                <div v-swiper:rattingSwiper="swiperOption" class="swiper-ratting">
                    <div class="swiper-wrapper">
                        <div
                                class="swiper-slide"
                                v-for="(banner,index) in banners"
                                :key="index"
                        >
                           <RattingCard :id="index" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-navs">
                <a href="#" class="swiper-button-next" @click.prevent></a>
                <a href="#" class="swiper-button-prev" @click.prevent></a>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import RattingCard from '../../elements/RattingCard'
    export default {
    components:{RattingCard},
        data() {
            return {
                banners: [
                    '/images/swiperBg.png',
                    '/images/swiperBg.png',
                    '/images/swiperBg.png',
                    '/images/swiperBg.png',
                    '/images/swiperBg.png',
                    '/images/swiperBg.png',
                    '/images/swiperBg.png',
                    '/images/swiperBg.png',
                    '/images/swiperBg.png',
                    '/images/swiperBg.png',
                    '/images/swiperBg.png',
                    '/images/swiperBg.png',
                    '/images/swiperBg.png',
                ],
                swiperOption: {
                    loop: false,
                    slidesPerView: 4,
                    spaceBetween: 50,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                    },
                }
            }
        },
    }
</script>

<style scoped>

</style>
