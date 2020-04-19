<template>
  <header class="header">
    <div class="header__content">
      <div class="header__top">
        <div class="custom-container custom-container--main header__top__container">
          <clink :to="'/'" class="header__logo__link">
            <svg-icon name="header-new-logo" class="header__logo" />
          </clink>
          <div class="header__running-text">
            <client-only>
              <marquee-text :repeat="10" :duration="40" v-if="banners && banners.running">
                {{ banners.running[$i18n.locale] }}
              </marquee-text>
            </client-only>
          </div>
        </div>
      </div>
      <div class="header__bottom">
        <div class="custom-container custom-container--main header__bottom__container">
          <div class="header__bottom__left">
            <clink to="/local-map" class="header__bottom__link">{{ $t('header.local-map') }}</clink>
            <clink to="/map" class="header__bottom__link">{{ $t('header.world-map') }}</clink>
            <clink to="/news" class="header__bottom__link">{{ $t('header.news') }}</clink>
          </div>
          <div class="header__bottom__right">
            <div class="header__bottom__slider" style="max-width: 500px;">
              <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                  <div class="swiper-slide header__bottom__slide" v-for="(item, i) in cats" :key="i">
                    <div class="header__bottom__bar"></div>
                    <clink :to="`/news?type=${item.slug}`" class="header__bottom__link">{{ item.title[$i18n.locale] }}</clink>
                    <div class="header__bottom__bar"></div>
                  </div>
                </div>
              </div>
              <div class="header__bottom__slider__arrow-left" :class="{ active: leftArrowActive }" @click="mySwiper.slidePrev()">
                <svg-icon name="header-slider-arrow-right" />
                <div class="transparency"></div>
              </div>
              <div class="header__bottom__slider__arrow-right" :class="{ active: rightArrowActive }" @click="mySwiper.slideNext();">
                <svg-icon name="header-slider-arrow-right" />
                <div class="transparency"></div>
              </div>
            </div>
            <div class="header__search" v-click-outside="hideSearch">
              <div class="header__search__input-area" :class="{ active: searchActive }">
                <input type="text" name="search">
              </div>
              <svg-icon name="search-icon" class="header__search__icon" @click="toggleSearch" />
            </div>
            <custom-select class="header__langs" :options="availableLangs" @input="changeLang" v-model="curLang" />
            <clink :to="'/login'" class="header__login">{{ $t('header.login') }}</clink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import CustomSelect from '~/components/global/header/CustomSelect';

import { mapActions, mapState } from 'vuex';

export default {
  components: {
    'custom-select': CustomSelect
  },
 created(){
   console.log(this.$route.name)
 },
  data() {
    return {
      active: false,
      curLang: this.$i18n.locale,
      searchActive: false,
      swiperOption: {
        slidesPerView: 2,
        init: false,
        observer: true,
        observeParents: true,
        breakpoints: {
          1000: {
            slidesPerView: 'auto',
          }
        }
      },
      leftArrowActive: false,
      rightArrowActive: false,
      langsOpen: false
    }
  },

  mounted() {
    this.$moment.locale(this.curLang);

    this.mySwiper.on('transitionStart', () => {
      this.updateArrows();
    });

    this.mySwiper.init(this.swiperOption);
    this.updateArrows();
  },

  methods: {
    updateArrows() {
      if (this.mySwiper) {
        this.leftArrowActive = !this.mySwiper.isBeginning;
        this.rightArrowActive = !this.mySwiper.isEnd;
      }
    },

    changeLang() {
      this.$router.push(this.switchLocalePath(this.curLang));
      this.$moment.locale(this.curLang);
    },

    toggleSearch() {
      this.searchActive = !this.searchActive;
    },

    hideSearch() {
      this.searchActive = false;
    }
  },

  computed: {
    ...mapState('news', ['banners', 'cats']),

    availableLangs() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }
  }
}

</script>
