<template>
	<header class="header">
		<b-navbar class="navbar" type="dark" variant="dark">
			<b-container>
				<b-navbar-brand href="#">OMDb Movie</b-navbar-brand>
				<b-nav-form>
					<b-form-input 
						class="mr-sm-2 search-input"
						placeholder="Search"
						v-model="searchValue"
						debounce="500"
					></b-form-input>
				</b-nav-form>
			</b-container>
		</b-navbar>
	</header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'HeaderNav',
	data:() => ({
		searchValue: ''
	}),
	watch: {
		searchValue: 'onSearchValueChanged'
	},
	methods: {
		...mapActions('movies', ['searchMovies', 'fetchMovies', 'toggleSearchState']),
		onSearchValueChanged(val) {
			console.log(val)
			if (val) {
				this.searchMovies(val)
				this.toggleSearchState(true)
			} else {
				this.fetchMovies()
				this.toggleSearchState(false)
			}
			
		}
	}
}
</script>

<style scoped>
.header {
	margin-bottom: 30px;
}
.navbar {
	background: rgba(0,0,0,0.7) !important;
}
.search-input {
	color: #fff;
	background: rgba(255, 255, 255, 0.1);
	border-color: rgba(0,0,0,0.6);
}
.search-input:focus {
	box-shadow: none;
	color: #fff;
	background: rgba(255, 255, 255, 0.2);
	border-color: rgba(0,0,0,0.6);
}
</style>