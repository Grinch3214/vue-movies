<template>
	<div class="notification"></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'AppNotification',
	computed: {
		...mapGetters(['messagePool'])
	},
	watch: {
		messagePool: 'showNotification',
	},
	methods: {
		showNotification({ variant, msg, title }) {
			this.$bvToast.toast(msg, {
          title: title,
          variant: variant,
          solid: true
        })
		}
	}
}
</script>