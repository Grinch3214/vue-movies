<template>
  <div id="app">
		<loader-vue />
		<app-notification />
		<poster-bg :posterProp="posterBackground" />
		<header-nav />
    <movies-list :list="moviesList" @changePoster="onChangePoster"/>
		<movies-pagination 
			:current-page="currentPage"
			:per-page="moviesPerPage"
			:total="moviesLength"
			@pageChanged="onPageChanged"
		/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import HeaderNav from './components/HeaderNav.vue'
import MoviesList from './components/MoviesList.vue'
import PosterBg from './components/PosterBg.vue'
import MoviesPagination from './components/MoviesPagination.vue'
import LoaderVue from './components/LoaderVue.vue'
import AppNotification from './components/AppNotification.vue'

export default {
  name: 'App',
  components: {
		PosterBg,
		HeaderNav,
    MoviesList,
		MoviesPagination,
    LoaderVue,
		AppNotification
  },
	data: () => ({
		posterBackground: ''
	}),
	computed: {
		...mapGetters('movies', [
			'moviesList',
			'currentPage',
			'moviesPerPage',
			'moviesLength'
			])
	},
	methods: {
		...mapActions('movies', ['changeCurrentPage']),
		onChangePoster(poster) {
			this.posterBackground = poster;
		},
		onPageChanged(page) {
			this.$router.push({ query: { page } })
			this.changeCurrentPage(page);
		}
	},
	created() {
		if(!this.$route.query.page) {
			return this.changeCurrentPage(1);
		}
		if(this.$route.query.page) {
			this.changeCurrentPage(Number(this.$route.query.page));
		}
	}
}
</script>

<style lang="scss">
#app {
	position: relative;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	min-height: 100vh;
}
</style>
