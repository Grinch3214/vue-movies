<template>
	<div class="movie-info-wrap">
		<header class="movie-info-header">
			<h5 class="movie-header-title">
				Movie View
			</h5>
			<b-iconX class="close-icon" @click="closeModal" />
		</header>
		<div class="movie-info-content">
			<b-row>
				<b-col sm="4">
					<div class="movie-poster-wrap">
						<div class="movie-poster" :style="posterStyle"></div>
					</div>
				</b-col>
				<b-col sm="8">
					<h3 class="movie-title">{{ movie.Title }}</h3>
					<b-form-rating
					class="movie-raiting"
						v-model="testPropMovie"
						readonly
						show-value
						precision="1"
						stars="10"
						show-value-max
						no-border
					/>
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script>
export default {
	name: "MovieModalInfoContent",
	props: {
		movie: {
			type: Object,
			requaired: true
		}
	},
	data:() => ({
		defaultPosterBg: 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(112,102,129,1) 100%)'
	}),
	computed: {
		testPropMovie() {
			return this.movie.imdbRating
		},
		posterStyle() {
			return {
				'background-image': this.posterBg
			};
		},
		posterBg() {
			return this.movie ? `url(${this.movie.Poster})` : this.defaultPosterBg;
		}
	},
	methods: {
		closeModal() {
			console.log('close')
		}
	}
}
</script>

<style scoped>
.movie-info-wrap {}
.movie-info-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background: linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82,15,117) 100%);
	color: #fff;
}
.movie-header-title {
	margin-bottom: 0;
	line-height: 1.5;
	font-size: 1.25rem;
}
.movie-info-content {
	background: #fff;
}
.movie-poster-wrap {
	position: relative;
	padding-bottom: 150%;
	border-radius: 5px;
	overflow: hidden;
	transition: all .5s ease;
}
.movie-poster {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}
.movie-title {
	font-size: 3.5rem;
	font-weight: 300;
	line-height: 1.2;
}
</style>