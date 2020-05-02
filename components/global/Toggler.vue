<template>
  <div class="toggler">
    <button class="toggler__button" type="button" @click="toggle()" :class="{ active: value }">
      <div class="toggler__button__toggler"></div>
    </button>
    <span class="toggler__text">{{ $t(title) }}</span>
  </div>
</template>

<script>
	export default {
		props: ['value', 'title', 'emitToBus'],

		methods: {
			toggle() {
				this.$emit('input', !this.value);
				if (this.emitToBus === true)
					this.$bus.$emit(`update-${this.title}`, !this.value);
			}
		}
	}
</script>
