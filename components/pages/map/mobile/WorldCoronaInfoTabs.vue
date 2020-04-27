<template>
	<div class="main-page__mobile__corona-info">
		<div class="main-page__mobile__corona-info__tabs">
			<div class="main-page__mobile__corona-info__tabs__button" :class="{ active: tabShown == 'world' }" @click="tabShown = 'world'">
				<span>{{ $t('world') }}</span>
			</div>
			<div class="main-page__mobile__corona-info__tabs__button" :class="{ active: tabShown == 'AZE' }" @click="tabShown = 'AZE'">
				<span>AZE</span>
			</div>
			<div class="main-page__mobile__corona-info__tabs__button" :class="{ active: tabShown == 'RUS' }" @click="tabShown = 'RUS'">
				<span>RUS</span>
			</div>
		</div>
		<div class="main-page__mobile__corona-info__tab" v-if="tabShown == 'world'">
			<div class="virus-map__info">
	            <div class="virus-map__info__col">
	                <h2 class="virus-map__info__title">{{ $t('corona-info.all-time') }}</h2>
	                <h3 class="virus-map__info__subtitle">{{ $t('hospitalized') }}</h3>
	                <span class="virus-map__info__number red">{{ virusWorldWide.Global.TotalConfirmed | numFormat(0,0).replace(/,/g,' ') }}</span>
	                <h3 class="virus-map__info__subtitle">{{ $t('cured') }}</h3>
	                <span class="virus-map__info__number green">{{ virusWorldWide.Global.TotalRecovered | numFormat(0,0).replace(/,/g,' ') }}</span>
	                <h3 class="virus-map__info__subtitle">{{ $t('died') }}</h3>
	                <span class="virus-map__info__number red">{{ virusWorldWide.Global.TotalDeaths | numFormat(0,0).replace(/,/g,' ') }}</span>
	            </div>
	            <div class="virus-map__info__col">
	                <h2 class="virus-map__info__title">{{ $t('corona-info.today') }}</h2>
	                <h3 class="virus-map__info__subtitle">{{ $t('hospitalized') }}</h3>
	                <span class="virus-map__info__number red">{{ virusWorldWide.Global.NewConfirmed | numFormat(0,0).replace(/,/g,' ') }}</span>
	                <h3 class="virus-map__info__subtitle">{{ $t('cured') }}</h3>
	                <span class="virus-map__info__number green">{{ virusWorldWide.Global.NewRecovered | numFormat(0,0).replace(/,/g,' ') }}</span>
	                <h3 class="virus-map__info__subtitle">{{ $t('died') }}</h3>
	                <span class="virus-map__info__number red">{{ virusWorldWide.Global.NewDeaths | numFormat(0,0).replace(/,/g,' ') }}</span>
	            </div>
	            <div class="virus-map__info__middle-bar"></div>
	        </div>
	    </div>
        <div class="main-page__mobile__corona-info__tab" v-if="tabShown == 'AZE'">
	        <div class="virus-map__info" >
				<div class="virus-map__info__col">
					<h2 class="virus-map__info__title">{{ $t('corona-info.all-time') }}</h2>
					<h3 class="virus-map__info__subtitle">{{ $t('hospitalized') }}</h3>
					<span class="virus-map__info__number red">{{ virusWorldWide.Countries.find(v => v.Slug == 'azerbaijan').TotalConfirmed | numFormat(0,0).replace(/,/g,' ') }}</span>
					<h3 class="virus-map__info__subtitle">{{ $t('cured') }}</h3>
					<span class="virus-map__info__number green">{{ virusWorldWide.Countries.find(v => v.Slug == 'azerbaijan').TotalRecovered | numFormat(0,0).replace(/,/g,' ') }}</span>
					<h3 class="virus-map__info__subtitle">{{ $t('died') }}</h3>
					<span class="virus-map__info__number red">{{ virusWorldWide.Countries.find(v => v.Slug == 'azerbaijan').TotalDeaths | numFormat(0,0).replace(/,/g,' ') }}</span>
				</div>
	            <div class="virus-map__info__col">
	                <h2 class="virus-map__info__title">{{ $t('corona-info.today') }}</h2>
	                <h3 class="virus-map__info__subtitle">{{ $t('hospitalized') }}</h3>
	                <span class="virus-map__info__number red">{{ virusWorldWide.Countries.find(v => v.Slug == 'azerbaijan').NewConfirmed | numFormat(0,0).replace(/,/g,' ') }}</span>
	                <h3 class="virus-map__info__subtitle">{{ $t('cured') }}</h3>
	                <span class="virus-map__info__number green">{{ virusWorldWide.Countries.find(v => v.Slug == 'azerbaijan').NewRecovered | numFormat(0,0).replace(/,/g,' ') }}</span>
	                <h3 class="virus-map__info__subtitle">{{ $t('died') }}</h3>
	                <span class="virus-map__info__number red">{{ virusWorldWide.Countries.find(v => v.Slug == 'azerbaijan').NewDeaths | numFormat(0,0).replace(/,/g,' ') }}</span>
	            </div>
	            <div class="virus-map__info__middle-bar"></div>
	        </div>
	    </div>
        <div class="main-page__mobile__corona-info__tab" v-if="tabShown == 'RUS'">
	        <div class="virus-map__info" >
				<div class="virus-map__info__col">
					<h2 class="virus-map__info__title">{{ $t('corona-info.all-time') }}</h2>
					<h3 class="virus-map__info__subtitle">{{ $t('hospitalized') }}</h3>
					<span class="virus-map__info__number red">{{ virusWorldWide.Countries.find(v => v.Slug == 'russia').TotalConfirmed | numFormat(0,0).replace(/,/g,' ') }}</span>
					<h3 class="virus-map__info__subtitle">{{ $t('cured') }}</h3>
					<span class="virus-map__info__number green">{{ virusWorldWide.Countries.find(v => v.Slug == 'russia').TotalRecovered | numFormat(0,0).replace(/,/g,' ') }}</span>
					<h3 class="virus-map__info__subtitle">{{ $t('died') }}</h3>
					<span class="virus-map__info__number red">{{ virusWorldWide.Countries.find(v => v.Slug == 'russia').TotalDeaths | numFormat(0,0).replace(/,/g,' ') }}</span>
				</div>
	            <div class="virus-map__info__col">
	                <h2 class="virus-map__info__title">{{ $t('corona-info.today') }}</h2>
	                <h3 class="virus-map__info__subtitle">{{ $t('hospitalized') }}</h3>
	                <span class="virus-map__info__number red">{{ virusWorldWide.Countries.find(v => v.Slug == 'russia').NewConfirmed | numFormat(0,0).replace(/,/g,' ') }}</span>
	                <h3 class="virus-map__info__subtitle">{{ $t('cured') }}</h3>
	                <span class="virus-map__info__number green">{{ virusWorldWide.Countries.find(v => v.Slug == 'russia').NewRecovered | numFormat(0,0).replace(/,/g,' ') }}</span>
	                <h3 class="virus-map__info__subtitle">{{ $t('died') }}</h3>
	                <span class="virus-map__info__number red">{{ virusWorldWide.Countries.find(v => v.Slug == 'russia').NewDeaths | numFormat(0,0).replace(/,/g,' ') }}</span>
	            </div>
	            <div class="virus-map__info__middle-bar"></div>
	        </div>
	    </div>
	</div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
		props: {
			notGlobal: {
				type: Boolean,
				default: false
			}
		},
        data() {
        	return {
        		tabShown: 'world'
        	}
        },

        computed: {
            ...mapState('virus', ['virusWorldWide'])
        }
    }
</script>
