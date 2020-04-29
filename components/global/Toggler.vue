<template>
  <div class="toggler">
    <button class="toggler__button" @click="toggle()" :class="{ active: value }">
      <div class="toggler__button__toggler"></div>
    </button>
    <span class="toggler__text">{{ $t(title) }}</span>
  </div>
</template>

<script>
	export default {
		props: ['value', 'title'],

		methods: {
			toggle() {
				this.$emit('input', !this.value);
			}
		}
	}
</script>
