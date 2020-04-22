<template>
	<div class="mobile-banner">
		<img :src="`${$imagesUrl}/${this.data}`">
	</div>
</template>

<script>
	export default {
		props: ['data']
	}
</script>