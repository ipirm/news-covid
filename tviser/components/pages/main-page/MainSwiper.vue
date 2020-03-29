<template>
    <div class="container-fluid main-swiper">
        <div class="row">
            <div v-swiper:mainSwiper="swiperOption">
                <div class="swiper-wrapper">
                    <div
                            class="swiper-slide"
                            v-for="(banner,index) in banners"
                            :key="index"
                            :style="{ backgroundImage: `url('${banner}')` }"
                    >
                    </div>
                </div>
            </div>
            <div class="main-swiper-card">
                <div class="main-swiper-card-header">
                    <span>Tviser - Найди работу своей мечты!</span>
                </div>
                <div class="main-swiper-card-body mb-1">
                    <v-select
                            placeholder="Услуга или специалист"
                            :options ="scopes"
                    />
                    <a href="#" class="main-swiper-btn">
                        <span>Приступить</span>
                    </a>
                </div>
                <span class="left-col-footer-text ml-1">Пример: <b>Услуга или специалист</b></span>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                banners: [
                    '/images/main-page/bgMainPage.png',
                    '/images/main-page/bgMainPage.png',
                    '/images/main-page/bgMainPage.png',
                ],
                swiperOption: {
                    loop: true,
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 30,
                    effect: 'fade',
                },
                options:[
                    {id: 100, title: 'title1'},
                    {id: 101, title: 'title2'},
                    {id: 102, title: 'title3'},
                    {id: 103, title: 'title4'},
                    {id: 104, title: 'title5'},
                ]
            }
        },
        computed:{
            scopes(){
                return this.options.map(item => item.title)
            }
        }
    }
</script>

