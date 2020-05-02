<template>
	<div class="default-select">
		<!--  style="position: absolute" onclick="size=(size!=1)?1:10;" -->
		<select @input="updateValue($event)" :value="value"> 
			<option value="" selected>{{ placeholder }}</option>
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
