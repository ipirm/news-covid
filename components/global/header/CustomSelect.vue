<template>
	<div class="header__custom-select" :class="{ open: dropdownOpen }" v-click-outside="onBlur" v-if="options">
		<div class="header__custom-select__top" @click="dropdownOpen = !dropdownOpen">
			<span>{{ $t(`header.langs.${value}`) }}</span>
			<svg-icon name="header-dropdown" class="header__custom-select__dropdown" />
		</div>
		<div class="header__custom-select__bottom" v-show="dropdownOpen">
			<div class="header__custom-select__bottom__item" v-for="(option, i) in options" :key="i" @click="choose(i)">
				<span>{{ $t(`header.langs.${option.code}`) }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['options', 'value'],

	data() {
		return {
			chosenIndex: 0,
			dropdownOpen: false
		}
	},

	methods: {
		choose(i) {
			this.chosenIndex = i;
			this.dropdownOpen = false;
			this.$emit('input', this.options[i].code);
		},

		onBlur() {
			this.dropdownOpen = false;
		}
	}
}
</script>
