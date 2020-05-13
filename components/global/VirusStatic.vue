<template>
    <div class="virus-map" v-if="virusWorldWide && virusWorldWide.Global">
        <div class="virus-map-container">
            <clink to="/local-map" class="link-map">
                <div class="virus-map-title">
                    {{ $t('mapOnline')}}
                </div>
                <div class="virus-map-image">
                    <img data-src="~/static/svg/az.svg" v-lazy-load>
                </div>
            </clink>
        </div>
        <div>
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
                <div class="virus-map__info__col" v-if="notGlobal">
                    <h2 class="virus-map__info__title">RUS</h2>
                    <h3 class="virus-map__info__subtitle">{{ $t('hospitalized') }}</h3>
                    <span class="virus-map__info__number red">{{ virusWorldWide.Countries.find(v => v.Slug == 'russia').NewConfirmed | numFormat(0,0).replace(/,/g,' ') }}</span>
                    <h3 class="virus-map__info__subtitle">{{ $t('cured') }}</h3>
                    <span class="virus-map__info__number green">{{ virusWorldWide.Countries.find(v => v.Slug == 'russia').NewRecovered | numFormat(0,0).replace(/,/g,' ') }}</span>
                    <h3 class="virus-map__info__subtitle">{{ $t('died') }}</h3>
                    <span class="virus-map__info__number red">{{ virusWorldWide.Countries.find(v => v.Slug == 'russia').NewDeaths | numFormat(0,0).replace(/,/g,' ') }}</span>
                </div>
                <div class="virus-map__info__col" v-else>
                    <h2 class="virus-map__info__title">{{ $t('aze') }}</h2>
                    <h3 class="virus-map__info__subtitle">{{ $t('hospitalized') }}</h3>
                    <span class="virus-map__info__number red">{{ virusWorldWide.Countries.find(v => v.Slug == 'azerbaijan').NewConfirmed | numFormat(0,0).replace(/,/g,' ') }}</span>
                    <h3 class="virus-map__info__subtitle">{{ $t('cured') }}</h3>
                    <span class="virus-map__info__number green">{{ virusWorldWide.Countries.find(v => v.Slug == 'azerbaijan').NewRecovered | numFormat(0,0).replace(/,/g,' ') }}</span>
                    <h3 class="virus-map__info__subtitle">{{ $t('died') }}</h3>
                    <span class="virus-map__info__number red">{{ virusWorldWide.Countries.find(v => v.Slug == 'azerbaijan').NewDeaths | numFormat(0,0).replace(/,/g,' ') }}</span>
                </div>
                <div class="virus-map__info__middle-bar"></div>
            </div>
            <div class="virus-map-content">
                <span>{{$t('pandemiaOfVirus') }}</span>
                <span class="mt-1">{{ virusWorldWide.Countries.find(v => v.Slug == 'azerbaijan').Date | moment("DD/MM/YYYY") }}</span>
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
                <div class="virus-map__info__col" v-if="notGlobal">
                    <h2 class="virus-map__info__title">RUS</h2>
                    <h3 class="virus-map__info__subtitle">{{ $t('hospitalized') }}</h3>
                    <span class="virus-map__info__number red">{{ virusWorldWide.Countries.find(v => v.Slug == 'russia').TotalConfirmed | numFormat(0,0).replace(/,/g,' ') }}</span>
                    <h3 class="virus-map__info__subtitle">{{ $t('cured') }}</h3>
                    <span class="virus-map__info__number green">{{ virusWorldWide.Countries.find(v => v.Slug == 'russia').TotalRecovered | numFormat(0,0).replace(/,/g,' ') }}</span>
                    <h3 class="virus-map__info__subtitle">{{ $t('died') }}</h3>
                    <span class="virus-map__info__number red">{{ virusWorldWide.Countries.find(v => v.Slug == 'russia').TotalDeaths | numFormat(0,0).replace(/,/g,' ') }}</span>
                </div>
                <div class="virus-map__info__col" v-else>
                    <h2 class="virus-map__info__title">{{ $t('aze') }}</h2>
                    <h3 class="virus-map__info__subtitle">{{ $t('hospitalized') }}</h3>
                    <span class="virus-map__info__number red">{{ virusWorldWide.Countries.find(v => v.Slug == 'azerbaijan').TotalConfirmed | numFormat(0,0).replace(/,/g,' ') }}</span>
                    <h3 class="virus-map__info__subtitle">{{ $t('cured') }}</h3>
                    <span class="virus-map__info__number green">{{ virusWorldWide.Countries.find(v => v.Slug == 'azerbaijan').TotalRecovered | numFormat(0,0).replace(/,/g,' ') }}</span>
                    <h3 class="virus-map__info__subtitle">{{ $t('died') }}</h3>
                    <span class="virus-map__info__number red">{{ virusWorldWide.Countries.find(v => v.Slug == 'azerbaijan').TotalDeaths | numFormat(0,0).replace(/,/g,' ') }}</span>
                </div>
                <div class="virus-map__info__middle-bar"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'VirusStatic',
        props: {
            notGlobal: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            ...mapState('virus', ['virusWorldWide'])
        }
    }
</script>
