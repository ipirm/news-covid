<template>
	<div class="mobile-menu">
		<div class="mobile-menu__bg"></div>
		<div class="mobile-menu__card">
			<h2 class="mobile-menu__title">{{ $t('mobile-menu.search') }}</h2>
			<div class="mobile-menu__content">
				<form class="d-flex overlay-category" @submit.prevent="search">
                    <div class="news-search">
                        <input class="news-cards-input" v-model="title" :placeholder="$t('search.searchNews')"/>
                        <button class="news-search-btn" type="submit"><span>{{ $t('search.searchBtn')}}</span></button>
                    </div>
                    <div class="news-search middle">
                        <client-only>
                            <v-select class="news-search-item" :placeholder="$t('search.country')" v-model="country" :options="countries" />
                            <v-select class="news-search-item" :placeholder="$t('search.cats')" v-model="cat_id" :options="categories" />
                            <v-select class="news-search-item" :placeholder="$t('search.type')" v-model="fakeType" :options="types" />
                            <v-select class="news-search-item" :placeholder="$t('search.sources')" v-model="source" :options="srcs" />
                            <datepicker class="news-search-item" :format="customFormatter" :value="date" v-if="false" />
                        </client-only>
                    </div>
                    <div class="news-search">
                        <div class="news-search__togglers">
                            <Toggler :title="'interesting'" v-model="interesting" />
                            <Toggler :title="'video'" v-model="video" />
                        </div>
                    </div>
                </form>
			</div>
		</div>
	</div>
</template>

<script>
	import Toggler from "~/components/global/Toggler";

	import {mapActions, mapState} from 'vuex';

	export default {
		created() {
			this.getCats();
            this.getLocations();
            this.getSources();
		},

		data() {
			return {
				country: '',
                source: '',
                cat_id: '',
                updated_at: '', // TODO LATER
                type: '',
                title: '',
                video: false,
                interesting: false,

                fakeType: ''
			}
		},

		computed: {
			...mapState('search', ['locations', 'sources']),
			...mapState('news', ['cats']),

			categories() {
                const newsCats = [];
                if (this.cats) {
                    this.cats.forEach((item) => {
                        newsCats.push(item.title[this.$i18n.locale]);
                    });
                }
                return newsCats;

            },

            countries() {
                const newsCats = [];
                if (this.locations) {
                    this.locations.forEach((item) => {
                        newsCats.push(item.title[this.$i18n.locale]);
                    });
                }
                return newsCats;
            },

            srcs() {
                const sources = [];
                if (this.sources) {
                    this.sources.forEach((item) => {
                        sources.push(item.title);
                    });
                }
                return sources;
            },

            types() {
                return [this.$t('local'),this.$t('worldwide')];
            }
		},

		methods: {
			...mapActions('search', ['getLocations', 'getSources']),
			...mapActions('news', ['getCats']),

			search() {

			}
		}
	}
</script>
