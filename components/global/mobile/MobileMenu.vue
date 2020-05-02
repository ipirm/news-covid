<template>
	<div class="mobile-menu" :class="{show: show, visible: visible}">
		<div class="mobile-menu__bg" @click="hideMenu()"></div>
		<div class="mobile-menu__card">
			<div class="mobile-menu__close" @click="hideMenu()">
				<svg-icon name="mobile-menu-cross" />
			</div>
			<h2 class="mobile-menu__title">{{ $t('mobile-menu.search') }}</h2>
			<div class="mobile-menu__content">
				<form class="mobile-menu__form" @submit.prevent="search">
					<div class="mobile-menu__search-area">
	                    <input class="news-cards-input" :value="title" @input="updateTitle($event)" :placeholder="$t('search.searchNews')"/>
	                    <button class="news-search-btn" type="submit"><span>{{ $t('search.searchBtn')}}</span></button>
	                </div>
                    <default-select class="news-search-item" :placeholder="$t('search.country')" :value="country" :title="'country'" :options="countries" />
                    <default-select class="news-search-item" :placeholder="$t('search.cats')" :value="cat_id" :title="'cat'" :options="categories" />
                    <default-select class="news-search-item" :placeholder="$t('search.type')" :value="fakeType" :title="'type'" :options="types" />
                    <default-select class="news-search-item" :placeholder="$t('search.sources')" :value="source" :title="'source'" :options="srcs" />
                    <div class="mobile-menu__two-togglers">
                        <Toggler :title="'interesting'" :value="interesting" :emitToBus="true" />
                        <Toggler :title="'video'" :value="video" :emitToBus="true" />
                    </div>
                </form>
			</div>
		</div>
	</div>
</template>

<script>
	import Toggler from "~/components/global/Toggler";
	import DefaultSelect from "~/components/global/DefaultSelect";

	import {mapActions, mapState} from 'vuex';

	export default {
		props: ['value', 'countries', 'locations', 'srcs', 'categories', 'types', 'country', 'source', 'cat_id', 'updated_at', 'fakeType', 'title', 'video', 'interesting'],

		components: {
			"default-select": DefaultSelect,
			Toggler
		},

		data() {
			return {
                show: false,
                visible: false
			}
		},

		watch: {
			value(n,o) {
				if (n) {
					this.show = true;
					setTimeout(() => {
						this.visible = true;
					}, 1);
				} else {
					this.visible = false;
					setTimeout(() => {
						if (!this.visible)
							this.show = false;
					}, 210);
				}
			}
		},

		methods: {
			search() {
				this.$bus.$emit('search');
				this.hideMenu();
			},

			updateTitle(e) {
				this.$bus.$emit('update-title', e.target.value);
			},

			hideMenu() {
				this.$emit('input', false);
			}
		}
	}
</script>
