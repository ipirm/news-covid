<template>
    <section class="main-page-content">
      <div class="custom-container">
        <div class="news-content-breadcumbs">
          <clink to="/">Главная</clink>
          <a>Карта</a>
        </div>
        <div class="news-content-title">
          <span>{{ $t('localMap') }}</span>
        </div>
        <div class="d-flex">
          <div style="display: flex;width: 100%;height: 360px">
            <svg class="svg-content" viewBox="0 0 1000 800" width="1000" height="800" xmlns="http://www.w3.org/2000/svg" v-lazy-load>
              <path v-for="(item,index) in dataPaths" :stroke="[item.active ? '#fff' : '#5E5D5D']" :key="item.id" :d="item.path" :name="item.name[$i18n.locale]" @click="selectItem(item)" :fill="[parseInt(item.confirmed) > 5 ? '#AD0000' : '#4E4E4E']" v-scroll-to="`#a${index}`">
              </path>
            </svg>
          </div>
          <div class="overlay-map-column">
            <div class="map-statistic">
              <div class="map-statistic-row map-statistic-header">
                <div class="map-statistic-item"><span>Заболевшие:</span></div>
                <div class="map-statistic-item"><span>Страна/Регион:</span></div>
              </div>
              <client-only>
                <vue-scroll :ops="ops">
                  <div class="overlay-map-statistic" style="height: 330px">
                    <div v-for="(item,index) in dataPaths" :class="[item.active ? 'activeClass' : '', 'map-statistic-row']" :id="`a${index}`" :key="item.id" @click="selectItem(item)">
                      <div class="map-statistic-item map-statistic-red">
                        <span>{{ item.confirmed | numFormat(0,0).replace(/,/g,' ')}} </span>
                      </div>
                      <div class="map-statistic-item map-statistic-blue">
                        <span>{{ item.name[$i18n.locale] }}</span></div>
                    </div>
                  </div>
                </vue-scroll>
              </client-only>
            </div>
            <div class="overlay-map-column-panel">
              <div class="overlay-map-column-header">
                <div class="overlay-map-column-header-item"><span>Заболевшие:</span></div>
                <div class="overlay-map-column-header-item"><span>Вылечились:</span></div>
                <div class="overlay-map-column-header-item"><span>Умерли:</span></div>
              </div>
              <div class="overlay-map-column-row">
                <div class="overlay-map-column-row-item"><span>
                    {{ this.activeCountry.confirmed | numFormat(0,0).replace(/,/g,' ') }}
                  </span>
                </div>
                <div class="overlay-map-column-row-item"><span>
                    {{ this.activeCountry.help | numFormat(0,0).replace(/,/g,' ') }}
                  </span>
                </div>
                <div class="overlay-map-column-row-item">
                  <span>
                    {{ this.activeCountry.death | numFormat(0,0).replace(/,/g,' ') }}
                  </span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page__content custom-container" style="margin-top: 50px">
        <main class="page__double-main">
          <div class="news-content-text" v-for="item in virusLocalData" :key="item.id">
            <b style="font-size: 26px;">
              {{ item.title[$i18n.locale] }}
            </b>
            <p v-html="item.title[$i18n.locale]"></p>
          </div>
        </main>
        <aside class="page__aside">
          <VirusStatic />
          <RightSidebar style="height: 60% !important;" />
        </aside>
      </div>
  </section>
</template>

<script>
import VirusStatic from "~/components/global/VirusStatic";
import AnimatedNumber from "animated-number-vue";

import { mapState } from 'vuex';
import RightSidebar from "~/components/global/RightSidebar";

export default {
  components: { RightSidebar, AnimatedNumber, VirusStatic },
  async fetch({ store }) {
    await store.dispatch('virus/getLocalMap');
    await store.dispatch('virus/getPathMap');
  },
  head() {
    return {
      title: this.$t('localMap'),
      meta: [
        { property: 'og:title', content: this.$t('localMap') || '' },
        { property: 'og:description', content: this.virusLocalData[0].title[this.$i18n.locale] || '' },
        { name: 'description', content: this.virusLocalData[0].title[this.$i18n.locale] || '' },
        { property: 'og:image', content: `http://covid.az/images/seo/local-img.png` || '' },
        { property: 'og:url', content: `http://covid.az/${this.$route.fullPath}` || '' },
        { property: 'twitter:card', content: `http://covid.az/images/seo/local-img.png` || '' },
      ]
    }
  },
  data() {
    return {
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {},
        bar: {
          background: '#4c4c4c',
          onlyShowBarOnScroll: false
        }
      },
      mappedData: null,
      activeCountry: {
        confirmed: 0,
        recovered: 0,
        deaths: 0
      }
    }
  },
  methods: {
    selectItem(item) {
      this.$store.commit('virus/SET_AZE_ACTIVE_COUNTRIES', item);
      this.activeCountry = item;
    }
  },
  computed: {
    ...mapState('virus', ['virusWorldWide', 'virusLocal', 'countries', 'virusLocalData', 'dataPaths']),
  },
}

</script>
<style scoped>
</style>
