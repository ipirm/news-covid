<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div v-swiper:mySwiper="swiperOption" class="main-swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in data" :key="index">
                            <img :src="item.urlToImage">
                            <div class="swiper-desc">
                                <div class="swiper-title">{{ `${item.title.substring(0,60)}...` }}</div>
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
        props: {
            data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    autoplay:true
                }
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
