<template>
	<b-container>
  <h3 class="list-title">Best movies</h3>
	<b-row>
		<template v-if="isExist">
			<b-col cols="3" v-for="(movie, key) in list" :key="key">
				<movie-item :movie="movie" @mouseover.native="onMouseOver(movie.Poster)" />
			</b-col>
		</template>
		<template v-else>
			<div>Empty list</div>
		</template>
	</b-row>
</b-container>
</template>

<script>
import MovieItem from './MovieItem.vue';


export default {
  components: { MovieItem },
	name: 'MoviesList',
	props: {
		list: {
			type: Object,
			default:() => ({})
		}
	},
	computed: {
		isExist() {
			return Boolean(Object.keys(this.list).length);
		}
	},
	methods: {
		onMouseOver(poster) {
			this.$emit('changePoster', poster)
		}
	}
}
</script>

<style scoped>
	.list-title {
		font-size: 50px;
		margin-bottom: 20px;
		text-align: center;
		color: #fff;
	}
</style>