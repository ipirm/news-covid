<template>
    <div class="overlay-partners">
        <div class="container">
            <div class="row">
                <div v-swiper:partnersSwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="/images/main-page/microsoft.png" alt="microsoft">
                        </div>
                        <div class="swiper-slide">
                            <img src="/images/main-page/trello.png" alt="trello">
                        </div>
                        <div class="swiper-slide">
                            <img src="/images/main-page/discord.png" alt="discord">
                        </div>
                        <div class="swiper-slide">
                            <img src="/images/main-page/speed.png" alt="speed">
                        </div>
                        <div class="swiper-slide">
                            <img src="/images/main-page/microsoft.png" alt="microsoft">
                        </div>
                        <div class="swiper-slide">
                            <img src="/images/main-page/trello.png" alt="trello">
                        </div>
                        <div class="swiper-slide">
                            <img src="/images/main-page/discord.png" alt="discord">
                        </div>
                        <div class="swiper-slide">
                            <img src="/images/main-page/speed.png" alt="speed">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                    autoplay:true
                }
            }
        }
    }
</script>

<style scoped>

</style>
