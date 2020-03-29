<template>
    <div class="container scope-container">
        <div class="row">
            <div v-swiper:scopeSwiper="swiperOption">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="index in 24" :key="index">
                        <ScopeCard :id="index" />
                    </div>
                </div>
                <!-- Add Pagination -->
                <!--                <div class="swiper-pagination"></div>-->
            </div>
        </div>
        <div class="scope-swiper-navs">
            <a href="#" @click.prevent class="scope-button-next"></a>
            <a href="#" @click.prevent class="scope-button-prev"></a>
        </div>
    </div>
</template>

<script>
    import ScopeCard from "../../elements/ScopeCard";

    export default {
        components: {ScopeCard},
        data() {
            return {
                banners: [
                    '/images/swiperBg.png',
                    '/images/swiperBg.png',
                    '/images/swiperBg.png',
                ],
                swiperOption: {
                    slidesPerView: 4,
                    slidesPerColumn: 3,
                    spaceBetween: 50,
                    navigation: {
                        nextEl: '.scope-button-next',
                        prevEl: '.scope-button-prev',
                    },
                }
            }
        },
    }
</script>

