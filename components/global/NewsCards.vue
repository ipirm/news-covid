<template>
    <div class="news-cards-overlay">
        <clink
                :to="`/news/${item.slug}`"
                class="news-cards-item"
                v-for="item in data"
                :key="item.id">
            <div class="news-cards-overlay__inner">
                <div class="news-cards-item-image">
                    <img :data-src="`${$imagesUrl}/${item.image}`" v-lazy-load>
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
                <div class="news-cards-overlay__info" v-if="item.title && item.title[$i18n.locale] && item.description && item.description[$i18n.locale]">
                    <div class="news-cards-item-title">
                        <span>{{ $mq  == 'mobile' ? item.title[$i18n.locale] : customTruncate(item.title[$i18n.locale], 35) }}</span>
                    </div>
                    <div class="news-cards-item-text">
                        <span>{{ $mq  == 'mobile' ? item.description[$i18n.locale] : customTruncate(item.description[$i18n.locale], 85) }}</span>
                    </div>
                </div>
            </div>
        </clink>
    </div>
</template>

<script>
	export default {
		props: ['data'],

        methods: {
            customTruncate(text, length) {
                if (text.length > length) {
                    return text.slice(0, length) + '...';
                }
                return text;
            }
        }
	}
</script>
