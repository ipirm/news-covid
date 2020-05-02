<template>
    <div class="main-page__main-slider">
        <div class="custom-container custom-container--main">
            <div v-swiper:mySwiper="swiperOption" class="swiper-container" v-lazy-load>
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in data" :key="item.id">
                        <clink :to="`/news/${item.slug}`">
                            <img :data-src="`${$imagesUrl}/${item.image}`" class="main-page__main-slider__pic" v-lazy-load>
                            <div class="swiper-desc">
                                <div class="swiper-title">{{item.title[$i18n.locale] }}</div>
                            </div>
                        </clink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex';

    export default {
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
                    slidesPerView: 1,
                    spaceBetween: 10,
                    autoplay: true,
                    observer: true,
                    observeParents: true,
                    breakpoints: {
                        800: {
                            slidesPerView: 2
                        }
                    }
                }
            }
        }
    }
</script>
