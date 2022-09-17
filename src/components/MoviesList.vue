<template>
	<b-container>
  <h3 class="list-title">{{ listTitle }}</h3>
	<b-row>
		<template v-if="isExist">
			<b-col cols="3" v-for="(movie, key) in list" :key="key">
				<movie-item 
					:movie="movie"
					@mouseover.native="onMouseOver(movie.Poster)"
					@removeItem="onRemoveItem"
				/>
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
import { mapActions, mapGetters } from 'vuex'

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
		...mapGetters('movies', ['isSearch']),
		isExist() {
			return Boolean(Object.keys(this.list).length);
		},
		listTitle() {
			return this.isSearch ? 'Search result' : 'Best movies'
		}
	},
	methods: {
		...mapActions('movies',['removeMovie']),
		onMouseOver(poster) {
			this.$emit('changePoster', poster)
		},
		async onRemoveItem({id, title}) {
			const isConfirm = await this.$bvModal.msgBoxConfirm(
				`Do you want delete ${title}?`,
			{
				centered: true,
				okVariant: 'danger',
				buttonSize: 'sm',
				size: 'sm',
			});
			if (isConfirm) {
				this.removeMovie(id)
			}
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