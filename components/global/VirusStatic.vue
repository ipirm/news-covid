<template>
    <div class="virus-map">
        <div class="virus-map-container">
            <div class="virus-map-title">
                {{ $t('mapOnline')}}
            </div>
            <clink to="/local-map" class="virus-map-image">
        <img data-src="/images/seo/local-img.png" v-lazy-load>
            </clink>
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
        },

        computed: {
            ...mapState('virus', ['virusWorldWide', 'virusLocal'])
        }
    }
</script>

<style scoped>

</style>
