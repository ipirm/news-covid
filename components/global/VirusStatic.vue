<template>
    <div class="virus-map">
        <div class="virus-map-container">
            <div class="virus-map-title">
                {{ $t('mapOnline')}}
            </div>
            <div class="virus-map-image">
                <svg
                    class="svg-content"
                    viewBox="0 0 1000 800"
                    width="1000"
                    height="800"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        v-for="(item,index) in azeCountries"
                        :key="index"
                        :d="item.path"
                        :stroke="[item.active ? '#fff' : '#E5C163']"
                        :name="item.country"
                        :fill="[parseInt(item.confirmed) > 20 && parseInt(item.confirmed) < 50 ? '#AD0000' : '#535353']"
                    >
                    </path>
                </svg>
            </div>
        </div>
        <div class="virus-map-content">
            <span>{{$t('pandemiaOfVirus') }}</span>
            <span class="mt-1">{{ Date.now() | moment("DD/MM/YYYY") }}</span>
        </div>
        <div class="virus-map__info" v-if="virusLocal && virusWorldWide">
            <div class="virus-map__info__col">
                <h2 class="virus-map__info__title">{{ $t('world') }}</h2>
                <h3 class="virus-map__info__subtitle">{{ $t('hospitalized') }}</h3>
                <span class="virus-map__info__number red">{{ virusWorldWide[0].confirmed | numFormat(0,0).replace(/,/g,' ') }}</span>
                <h3 class="virus-map__info__subtitle">{{ $t('cured') }}</h3>
                <span class="virus-map__info__number green">{{ virusWorldWide[0].recovered | numFormat(0,0).replace(/,/g,' ') }}</span>
                <h3 class="virus-map__info__subtitle">{{ $t('died') }}</h3>
                <span class="virus-map__info__number red">{{ virusWorldWide[0].deaths | numFormat(0,0).replace(/,/g,' ') }}</span>
            </div>
            <div class="virus-map__info__col">
                <h2 class="virus-map__info__title">{{ $t('aze') }}</h2>
                <h3 class="virus-map__info__subtitle">{{ $t('hospitalized') }}</h3>
                <span class="virus-map__info__number red">{{ virusLocal[0].confirmed | numFormat(0,0).replace(/,/g,' ') }}</span>
                <h3 class="virus-map__info__subtitle">{{ $t('cured') }}</h3>
                <span class="virus-map__info__number green">{{ virusLocal[0].recovered | numFormat(0,0).replace(/,/g,' ') }}</span>
                <h3 class="virus-map__info__subtitle">{{ $t('died') }}</h3>
                <span class="virus-map__info__number red">{{ virusLocal[0].deaths | numFormat(0,0).replace(/,/g,' ') }}</span>
            </div>
            <div class="virus-map__info__middle-bar"></div>
        </div>
        <div class="virus-map-content">
            <span>{{$t('last24hrs') }}</span>
        </div>
        <div class="virus-map__info" v-if="virusLocal && virusWorldWide">
            <div class="virus-map__info__col">
                <h2 class="virus-map__info__title">{{ $t('world') }}</h2>
                <h3 class="virus-map__info__subtitle">{{ $t('hospitalized') }}</h3>
                <span class="virus-map__info__number red">{{ virusWorldWide[0].confirmed | numFormat(0,0).replace(/,/g,' ') }}</span>
                <h3 class="virus-map__info__subtitle">{{ $t('cured') }}</h3>
                <span class="virus-map__info__number green">{{ virusWorldWide[0].recovered | numFormat(0,0).replace(/,/g,' ') }}</span>
                <h3 class="virus-map__info__subtitle">{{ $t('died') }}</h3>
                <span class="virus-map__info__number red">{{ virusWorldWide[0].deaths | numFormat(0,0).replace(/,/g,' ') }}</span>
            </div>
            <div class="virus-map__info__col">
                <h2 class="virus-map__info__title">{{ $t('aze') }}</h2>
                <h3 class="virus-map__info__subtitle">{{ $t('hospitalized') }}</h3>
                <span class="virus-map__info__number red">{{ virusLocal[0].confirmed | numFormat(0,0).replace(/,/g,' ') }}</span>
                <h3 class="virus-map__info__subtitle">{{ $t('cured') }}</h3>
                <span class="virus-map__info__number green">{{ virusLocal[0].recovered | numFormat(0,0).replace(/,/g,' ') }}</span>
                <h3 class="virus-map__info__subtitle">{{ $t('died') }}</h3>
                <span class="virus-map__info__number red">{{ virusLocal[0].deaths | numFormat(0,0).replace(/,/g,' ') }}</span>
            </div>
            <div class="virus-map__info__middle-bar"></div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'VirusStatic',

        created() {
            this.$store.commit('virus/SET_AZE_COUNTRIES');
        },

        computed: {
            ...mapState('virus', ['virusWorldWide', 'virusLocal', 'azeCountries'])
        }
    }
</script>

<style scoped>

</style>
