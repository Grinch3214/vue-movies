<template>
	<div class="movie-item mb-3">
		<div class="movie-item-poster" :style="posterImage"></div>
		<div class="movie-item-wrap d-flex flex-column justify-content-between p-3">
			<div class="movie-item-info">
				<h3 class="movie-item-title text-white">{{ movie.Title }}</h3>
				<span class="movie-item-year text-white">{{ movie.Year }}</span>
			</div>
			<div class="movie-item-controls row no-gutters">
				<div class="col pr-2">
					<b-button size="md" block variant="outline-light" @click="showInfoModalEvent">Info</b-button>
				</div>
				<div class="col pl-2">
					<b-button
						size="md"
						block
						variant="outline-light"
						@click="emitRemoveEvent"
					>Remove</b-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MovieItem',
	props: {
		movie: {
			type: Object,
			required: true
		}
	},
	computed: {
		posterImage() {
			return { 'background-image': `url(${this.movie.Poster})` };
		}
	},
	methods: {
		emitRemoveEvent() {
			this.$emit('removeItem', { 
				id: this.movie.imdbID,
				title: this.movie.Title
				})
		},
		showInfoModalEvent() {
			this.$emit('showModal', this.movie.imdbID);
		}
	}
}
</script>

<style scoped>
	.movie-item {
		position: relative;
		cursor: pointer;
		border-radius: 5px;
		overflow: hidden;
		transition: all 0.2s ease;
		height: 375px;
	}
	.movie-item:hover {
		box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
		scale: 1.01;
	}
	.movie-item-poster {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
	.movie-item-wrap {
		height: 100%;
		opacity: 0;
		transition: all .2s ease;
		background: rgba(0,0,0,0.8);
	}
	.movie-item:hover .movie-item-wrap {
		opacity: 1;
	}
	.movie-item-title {
		font-size: 24px;
	}
	.movie-item-year {
		font-size: 14px;
	}
</style>