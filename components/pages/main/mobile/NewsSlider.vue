<template>
	<div class="main-page__mobile__news-slider">
		<h2 class="main-page__mobile__news-slider__title" v-if="title">{{ $t(title) }}</h2>
		<div v-swiper:mySwiper="swiperOption" class="swiper-container" v-if="data">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item, i) in data" :key="i">
					<clink :to="`/news/${item.slug}`" class="main-page__mobile__news-slider__item">
						<div class="main-page__mobile__news-slider__pic-area">
							<img :src="`${$imagesUrl}/${item.image}`" class="main-page__mobile__news-slider__pic">
							<div class="news-card-image__infos">
			                    <div class="news-card-image__infos__comments">
			                        <svg-icon name="comments" />
			                        <span>{{ item.comments || 0 }}</span>
			                    </div>
			                    <div class="news-card-image__infos__bar"></div>
			                    <div class="news-card-image__infos__time">
			                        <span>{{ item.updated_at | moment("from", "now") }}</span>
			                    </div>
			                </div>
						</div>
						<h3 class="main-page__mobile__news-slider__slide__title">{{ item.title[$i18n.locale] | truncate(50) }}</h3>
						<p class="main-page__mobile__news-slider__slide__desc" v-if="item.description && item.description[$i18n.locale] && showDescriptionBlya">{{ item.description[$i18n.locale] | truncate(300) }}</p>
					</clink>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['data', 'showDescription', 'title'],

        data() {
            return {
                swiperOption: {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    loop: true,
                    autoplay: false,
                    observer: true,
					observeParents: true
                }
            }
        }
	}
</script>
