<template>
	<div
		class="loader d-flex justify-content-center align-items-center" v-if="isShowLoader"
	>
		<b-spinner 
			style="width: 5rem; height: 5rem;"
			type="grow"
			variant="light"
			label="Loading..."
		></b-spinner>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'LoaderVue',
	computed: {
		...mapGetters(['isShowLoader'])
	}
}
</script>

<style scoped>
.loader {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .7);
	z-index: 100;
}
</style>