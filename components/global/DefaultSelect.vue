<template>
	<div class="default-select">
		<!--  style="position: absolute" onclick="size=(size!=1)?1:10;" -->
		<div class="default-select__dropdown">
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" role="presentation" class="vs__open-indicator"><path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path></svg>
		</div>
		<select @input="updateValue($event)" :value="value" :class="{ placeholder: value == '' }"> 
			<option value="" selected class="placeholder">{{ placeholder }}</option>
			<option v-for="(o,i) in options" :key="i" :value="o">{{ o }}</option>
		</select>
	</div>
</template>

<script>
export default {
	props: ['options', 'value', 'title', 'placeholder'],

	methods: {
		updateValue(e) {
			this.$bus.$emit(`update-${this.title}`, e.target.value);
		}
	}
}
</script>
