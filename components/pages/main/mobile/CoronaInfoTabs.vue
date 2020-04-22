<template>
	<div class="main-page__mobile__corona-info">
		<div class="main-page__mobile__corona-info__tabs">
			<div class="main-page__mobile__corona-info__tabs__button" :class="{ active: tabShown == 'today' }" @click="tabShown = 'today'">
				<span>{{ $t('corona-info.today') }}</span>
			</div>
			<div class="main-page__mobile__corona-info__tabs__button" :class="{ active: tabShown == 'all-time' }" @click="tabShown = 'all-time'">
				<span>{{ $t('corona-info.all-time') }}</span>
			</div>
		</div>
		<div class="main-page__mobile__corona-info__tab" v-if="tabShown == 'today'">
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
	    </div>
        <div class="main-page__mobile__corona-info__tab" v-if="tabShown == 'all-time'">
	        <div class="virus-map__info" >
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
	</div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data() {
        	return {
        		tabShown: 'today'
        	}
        },

        computed: {
            ...mapState('virus', ['virusWorldWide'])
        }
    }
</script>
