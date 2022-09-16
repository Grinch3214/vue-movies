<template>
	<div class="mov-pagination d-flex justify-content-center">
		<b-pagination
			v-model="currentPageModal"
			:per-page="perPage"
			:total-rows="total"
			prev-text="Prev"
			next-text="Next"
		/>
	</div>
</template>

<script>
export default {
	name: 'MiviesPagination',
	props: {
		currentPage: {
			type: Number,
			default: 1
		},
		total: {
			type: Number,
			default: 1
		},
		perPage: {
			type: Number,
			default: 1
		}
	},
	computed: {
		currentPageModal: {
			get() {
				return this.currentPage;
			},
			set(value) {
				this.$emit('pageChanged', value)
			}
		}
	},
}
</script>

<style scoped>
.mov-pagination >>> .pagination .page-item .page-link {
	background: transparent;
	font-size: 12px;
	color: #fff;
	box-shadow: none;
}
.mov-pagination >>> .pagination .page-item.active .page-link {
	border-color: #fff;
	background: #fff;
	color: #100;
}
.mov-pagination >>> .pagination .page-item.disabled .page-link {
	color: gray;
}
</style>