<template>
	<div class="subheader-dropdown" @mouseenter="open = true" @mouseleave="open = false;">
		<div class="subheader-dropdown-title">
			<span :style="{ color: color }">{{ $t(title) }}</span>
			<svg class="subheader-dropdown-icon" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M9.84016 0.540354L9.5126 0.210514C9.40951 0.107506 9.27235 0.0507571 9.12577 0.0507571C8.97926 0.0507571 8.84194 0.107506 8.73885 0.210514L5.00224 3.94729L1.26131 0.206368C1.15838 0.103359 1.02107 0.0466919 0.87456 0.0466919C0.728055 0.0466919 0.590655 0.103359 0.487646 0.206368L0.160001 0.534176C-0.0533338 0.747348 -0.0533338 1.09459 0.160001 1.30776L4.61402 5.77779C4.71695 5.88072 4.8541 5.95324 5.00191 5.95324H5.00362C5.1502 5.95324 5.28736 5.88064 5.39029 5.77779L9.84016 1.31987C9.94325 1.21695 9.99984 1.07564 10 0.929138C10 0.782552 9.94325 0.643201 9.84016 0.540354Z" :fill="color"/>
			</svg>
		</div>
		<div class="subheader-dropdown-content" v-show="open" v-if="links">
			<ul>
				<li v-for="(item, i) in links" :key="i">
					<link-i18n :to="item.link">{{ $t(item.title) }}</link-i18n>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'links', 'red'],

		data() {
			return {
				open: false
			}
		},

		computed: {
			color() {
				return this.red ? '#CD0909' : '#000000';
			}
		}
	}
</script>