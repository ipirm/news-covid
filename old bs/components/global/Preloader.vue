<template>
	<div class="preloader" v-body-scroll-lock="show" v-if="show">
		<h2 class="preloader__title">COVID-19</h2>
		<div class="preloader__world">
			<h3 class="preloader__subtitle">{{ $t('world') }}</h3>
			<div class="preloader__confirmed">
				<h4 class="preloader__subsubtitle">{{ $t('confirmed') }}</h4>
				<span class="preloader__numbers">{{ confirmedNumberWorld }}</span>
			</div>
			<div class="preloader__recovered">
				<h4 class="preloader__subsubtitle">{{ $t('recovered') }}</h4>
				<span class="preloader__numbers">{{ recoveredNumberWorld }}</span>
			</div>
			<div class="preloader__deaths">
				<h4 class="preloader__subsubtitle">{{ $t('deaths') }}</h4>
				<span class="preloader__numbers">{{ deathsNumberWorld }}</span>
			</div>
		</div>
		<div class="preloader__local">
			<h3 class="preloader__subtitle">{{ $t('local') }}</h3>
			<div class="preloader__confirmed">
				<h4 class="preloader__subsubtitle">{{ $t('confirmed') }}</h4>
				<span class="preloader__numbers">{{ confirmedNumberLocal }}</span>
			</div>
			<div class="preloader__recovered">
				<h4 class="preloader__subsubtitle">{{ $t('recovered') }}</h4>
				<span class="preloader__numbers">{{ recoveredNumberLocal }}</span>
			</div>
			<div class="preloader__deaths">
				<h4 class="preloader__subsubtitle">{{ $t('deaths') }}</h4>
				<span class="preloader__numbers">{{ deathsNumberLocal }}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		props: ['pageReady'],

		data() {
			return {
				show: true,
				confirmedNumberWorld: 0,
				recoveredNumberWorld: 0,
				deathsNumberWorld: 0,
				confirmedNumberLocal: 0,
				recoveredNumberLocal: 0,
				deathsNumberLocal: 0
			}
		},

		watch: {
			pageReady(n,o) {

			}
		},

		computed: {
			...mapState('virus', ['virusWorldWide', 'virusLocal'])
		}
	}
</script>
