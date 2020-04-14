<template>
	<header class="header">
		<div class="header__content">
			<div class="custom-container">
				<div class="header__top">
					<button class="header__menu-button">
						<div class="header__menu-button__top-bar"></div>
						<div class="header__menu-button__bottom-bar"></div>
					</button>
					<a class="header__logo-text">
						<svg-icon name="logo-text" />
					</a>
					<div class="header__right">
						<clink class="header__right__link" :to="'/sign-in'">{{ $t('header.sign-in') }}</clink>
						<div class="header__right__bar"></div>
						<clink class="header__right__link" :to="'/sign-in'">{{ $t('header.subscribe') }}</clink>
						<div class="header__right__bar"></div>
						<div class="header__langs" :class="{ active: langsOpen }" @click="langsOpen = !langsOpen">
							<span class="header__langs__lang">{{ curLang }}</span>
							<template v-for="(lang, i) in availableLangs">
								<div class="header__langs__bar" :key="`bar-${i}`"></div>
								<span class="header__langs__lang" :key="`lang-${i}`" @click="chooseLang(lang['code'])">{{ lang['code'] }}</span>
							</template>
						</div>
						<div class="header__search">
							<svg-icon name="search" class="header__search__icon" />
							<!-- TODO: add active search -->
						</div>
					</div>
				</div>
			</div>
			<div class="header__bottom">
				<div class="custom-container">
					<div v-swiper:mySwiper="swiperOption">
						<div class="swiper-wrapper">
							<div class="swiper-slide header__bottom__slide" v-for="(item, i) in headerBottomItems" :key="i">
								<clink :to="item.link" class="header__bottom__link">{{ $t(`header.${item.title}`) }}</clink>
								<div class="header__bottom__bar"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		data() {
			return {
				swiperOption: {
					slidesPerView: 'auto',
					init: false
				},
				showLeftArrow: false,
				showRightArrow: false,
				langsOpen: false,
				curLang: this.$i18n.locale
			}
		},

		mounted() {
			this.mySwiper.on('transitionStart', () => {
				this.updateArrows();
			});

			this.mySwiper.init(this.swiperOption);
			this.updateArrows();
		},

		computed: {
			...mapState('mockData', ['headerBottomItems']),

			availableLangs() {
				return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
			}
		},

		methods: {
			updateArrows() {
				if (this.mySwiper) {
					this.showLeftArrow = !this.mySwiper.isBeginning;
					this.showRightArrow = !this.mySwiper.isEnd;
				}
			},

			chooseLang(code) {
				this.switchLocalePath(code);
                this.$moment.locale(code);
			}
		}
	}
</script>