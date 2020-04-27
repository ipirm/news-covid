<template>
	<div class="map-popup" v-if="show">
		<div class="map-popup__bg" @click="show=false"></div>
		<div class="map-popup__card">
			<div class="map-popup__card__top">
				<span>{{ $t('mobile.popup.check-out-interesting-maps') }}</span>
				<div @click="show=false">
					<svg-icon name="mobile/popup-cross" />
				</div>
			</div>
			<div class="map-popup__card__content">
				<clink :to="$store.state.popup.mapPageFirstTimeVisitData[item].link" class="map-popup__card__item" v-for="(item, i) in maps" :key="i">
					<h2>{{ $t($store.state.popup.mapPageFirstTimeVisitData[item].title) }}</h2>
					<img :src="`/svg/${$store.state.popup.mapPageFirstTimeVisitData[item].svg}.svg`">
				</clink>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['maps'],

		data() {
			return {
				show: false
			}
		},

		mounted() {
			setTimeout(() => {
				if (this.$mq == 'mobile') {
					this.show = this.$cookies.get('visitedBefore') ? false : true;

					if (this.show) {
						this.$cookies.set('visitedBefore', true, {
							maxAge: 24 * 60 * 60 * 30 * (3) // three months
						});
					}
				}
			}, 13000);
		}
	}
</script>
