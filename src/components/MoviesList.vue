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
					@showModal="onShowMovieInfo"
				/>
			</b-col>
		</template>
		<template v-else>
			<div>Empty list</div>
		</template>
	</b-row>
	<b-modal body-class="movie-modal-body" :id="movieInfoModalInfo" size="xl" centered hide-header hide-footer>
    <!-- <p class="my-4">{{ selectedMovie }}</p> -->
		<movie-modal-info-content :movie="selectedMovie" />
  </b-modal>
</b-container>
</template>

<script>
import MovieItem from './MovieItem.vue';
import MovieModalInfoContent from './MovieInfoModalContent.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
		MovieItem,
		MovieModalInfoContent,
		},
	name: 'MoviesList',
	props: {
		list: {
			type: Object,
			default:() => ({})
		}
	},
	data: () => ({
		movieInfoModalInfo: 'movie-info',
		selectedMovieID: ''
	}),
	computed: {
		...mapGetters('movies', ['isSearch']),
		isExist() {
			return Boolean(Object.keys(this.list).length);
		},
		listTitle() {
			return this.isSearch ? 'Search result' : 'Best movies'
		},
		selectedMovie() {
			return this.selectedMovieID ? this.list[this.selectedMovieID] : null
		}
	},
	methods: {
		...mapActions('movies',['removeMovie']),
		...mapActions(['showNotify']),
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
				this.removeMovie(id);
				this.showNotify({
					msg: 'Movie deleted successful',
					variant: 'success',
					title: 'Success'
				})
			}
		},

		onShowMovieInfo(id) {
			console.log(id)
			this.selectedMovieID = id;
			this.$bvModal.show(this.movieInfoModalInfo);
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

<style>
.movie-modal-body {
		padding: 0;
	}
</style>