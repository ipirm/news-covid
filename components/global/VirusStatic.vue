<template>
    <div class="virus-map">
        <div class="virus-map-container">
            <clink to="/local-map" class="link-map">
                <div class="virus-map-title">
                    {{ $t('mapOnline')}}
                </div>
                <div class="virus-map-image">
                    <img data-src="/images/seo/local-img.png" v-lazy-load>
                </div>
            </clink>
        </div>
        <div class="virus-map-content">
            <span>{{$t('last24hrs') }}</span>
            <span class="mt-1">{{ Date.now() | moment("DD/MM/YYYY") }}</span>
        </div>
        <div class="virus-map__info">
            <div class="virus-map__info__col">
                <h2 class="virus-map__info__title">{{ $t('world') }}</h2>
                <h3 class="virus-map__info__subtitle">{{ $t('hospitalized') }}</h3>
                <span class="virus-map__info__number red">{{ virusWorldWide.Global.NewConfirmed | numFormat(0,0).replace(/,/g,' ') }}</span>
                <h3 class="virus-map__info__subtitle">{{ $t('cured') }}</h3>
                <span class="virus-map__info__number green">{{ virusWorldWide.Global.NewRecovered | numFormat(0,0).replace(/,/g,' ') }}</span>
                <h3 class="virus-map__info__subtitle">{{ $t('died') }}</h3>
                <span class="virus-map__info__number red">{{ virusWorldWide.Global.NewDeaths | numFormat(0,0).replace(/,/g,' ') }}</span>
            </div>
            <div class="virus-map__info__col">
                <h2 class="virus-map__info__title">{{ $t('aze') }}</h2>
                <h3 class="virus-map__info__subtitle">{{ $t('hospitalized') }}</h3>
                <span class="virus-map__info__number red">{{ virusWorldWide.Countries[15].NewConfirmed | numFormat(0,0).replace(/,/g,' ') }}</span>
                <h3 class="virus-map__info__subtitle">{{ $t('cured') }}</h3>
                <span class="virus-map__info__number green">{{ virusWorldWide.Countries[15].NewRecovered | numFormat(0,0).replace(/,/g,' ') }}</span>
                <h3 class="virus-map__info__subtitle">{{ $t('died') }}</h3>
                <span class="virus-map__info__number red">{{ virusWorldWide.Countries[15].NewDeaths | numFormat(0,0).replace(/,/g,' ') }}</span>
            </div>
            <div class="virus-map__info__middle-bar"></div>
        </div>
        <div class="virus-map-content">
            <span>{{$t('pandemiaOfVirus') }}</span>
            <span class="mt-1">{{ virusWorldWide.Countries[15].Date | moment("DD/MM/YYYY") }}</span>
        </div>
        <div class="virus-map__info">
            <div class="virus-map__info__col">
                <h2 class="virus-map__info__title">{{ $t('world') }}</h2>
                <h3 class="virus-map__info__subtitle">{{ $t('hospitalized') }}</h3>
                <span class="virus-map__info__number red">{{ virusWorldWide.Global.TotalConfirmed | numFormat(0,0).replace(/,/g,' ') }}</span>
                <h3 class="virus-map__info__subtitle">{{ $t('cured') }}</h3>
                <span class="virus-map__info__number green">{{ virusWorldWide.Global.TotalRecovered | numFormat(0,0).replace(/,/g,' ') }}</span>
                <h3 class="virus-map__info__subtitle">{{ $t('died') }}</h3>
                <span class="virus-map__info__number red">{{ virusWorldWide.Global.TotalDeaths | numFormat(0,0).replace(/,/g,' ') }}</span>
            </div>
            <div class="virus-map__info__col">
                <h2 class="virus-map__info__title">{{ $t('aze') }}</h2>
                <h3 class="virus-map__info__subtitle">{{ $t('hospitalized') }}</h3>
                <span class="virus-map__info__number red">{{ virusWorldWide.Countries[15].TotalConfirmed | numFormat(0,0).replace(/,/g,' ') }}</span>
                <h3 class="virus-map__info__subtitle">{{ $t('cured') }}</h3>
                <span class="virus-map__info__number green">{{ virusWorldWide.Countries[15].TotalRecovered | numFormat(0,0).replace(/,/g,' ') }}</span>
                <h3 class="virus-map__info__subtitle">{{ $t('died') }}</h3>
                <span class="virus-map__info__number red">{{ virusWorldWide.Countries[15].TotalDeaths | numFormat(0,0).replace(/,/g,' ') }}</span>
            </div>
            <div class="virus-map__info__middle-bar"></div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'VirusStatic',

        computed: {
            ...mapState('virus', ['virusWorldWide'])
        }
    }
</script>
