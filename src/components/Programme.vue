<template>
	<div>
		<div v-for="p in getProgrammes()" :key="p.id">
			<h2>{{ p.name }}</h2>
			<small>{{ p.programmeName }}</small>
			<p>{{ p.yearsActive }}</p>
			<p>{{ p.countriesRegions }}</p>
			<h3>Dataset</h3>
			<p><strong>Storage: </strong>{{ p.dataset.stored }}</p>
			<p><strong>Format: </strong>{{ p.dataset.format }}</p>
			<p><strong>Access: </strong>{{ p.dataset.datasetAccessHow }}</p>
			<p><strong>Integrtion: </strong>{{ p.dataset.integration }}</p>
			<h3>Methdology</h3>
			<p>{{ p.methodology.accreditationDescription }}</p>
		</div>
	</div>
</template>

<script>
import {getAllProgrammes} from '../api/programmes'

export default {
	name: 'Programme',
	data () {
		return {
			programmes: [],
			errors: []
		}
	},
	created () {
		getAllProgrammes()
		.then(response => {
			this.programmes = response.data.programmes
		})
		.catch(e => {
			this.errors.push(e)
		})
	},
	methods: {
		getProgrammes: function () {
			var params = this.$route.params.programme
			var programme = []
			this.programmes.forEach((i) => {
				if (i.url === params) {
					programme.push(i)
				}
			})
			return programme
		}
	}
}
</script>

<style scoped>
</style>
