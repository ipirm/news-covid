<template>
	<div class="custom-new-select" :class="{ open: dropdownOpen }" v-click-outside="onBlur" v-if="options">
		<div class="custom-new-select__top" @click="dropdownOpen = !dropdownOpen">
			<span>{{ value }}</span>
			<img src="~/static/svg/dropdown-white.svg">
		</div>
		<div class="custom-new-select__bottom" v-show="dropdownOpen">
			<div class="custom-new-select__bottom__item" v-for="(option, i) in options" :key="i" @click="choose(i)">
				<span>{{ option }}</span>
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
			this.$emit('input', this.options[i]);
		},

		onBlur() {
			this.dropdownOpen = false;
		}
	}
}
</script>