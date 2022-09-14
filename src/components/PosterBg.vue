<template>
	<div class="poster-bg" :style="posterStyle"></div>
</template>

<script>
export default {
	name: 'PosterBG',
	props: {
		posterProp: {
			type: String,
			default: ''
		}
	},
	data: () => ({
		defaultPosterBg: 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(112,102,129,1) 100%)'
	}),
	computed: {
		posterStyle() {
			return {
				'background-image': this.posterBg
			};
		},
		posterBg() {
			return this.posterProp ? `url(${this.posterProp})` : this.defaultPosterBg;
		}
	}
}
</script>

<style scoped>
.poster-bg {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
	background-size: cover;
	background-position: center;
	transition: all 0.2s ease;
}
.poster-bg::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	opacity: .7;
	background-image: linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(112,102,129,1) 100%);
}
</style>