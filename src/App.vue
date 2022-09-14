<template>
  <div id="app">
		<poster-bg :posterProp="posterBackground" />
    <movies-list :list="moviesList" @changePoster="onChangePoster"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MoviesList from './components/MoviesList.vue'
import PosterBg from './components/PosterBg.vue'

export default {
  name: 'App',
  components: {
		PosterBg,
    MoviesList,
  },
	data: () => ({
		posterBackground: ''
	}),
	computed: {
		...mapGetters('movies', ['moviesList'])
	},
	methods: {
		...mapActions('movies', ['fetchMovies']),
		onChangePoster(poster) {
			this.posterBackground = poster;
		}
	}
}
</script>

<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
