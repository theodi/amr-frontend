<template>
	<div>
		<div v-for="a in getAntimicrobials()" :key="a.id">
			<div class="head-content-box">
				<h2>{{ a }}</h2>
			</div>
		</div>
	</div>
</template>

<script>
import {getAllProgrammes} from '../api/programmes'
import {getAllCompanies} from '../api/companies'
import {getAllAntimicrobials} from '../api/antimicrobials'

export default {
	name: 'Antimicrobial',
	data () {
		return {
			programmes: [],
			companies: [],
			antimicrobials: [],
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
		getAllCompanies()
		.then(response => {
			this.companies = response.data.companies
		})
		.catch(e => {
			this.errors.push(e)
		})
		getAllAntimicrobials()
		.then(response => {
			this.antimicrobials = response.data.antimicrobials
		})
		.catch(e => {
			this.errors.push(e)
		})
	},
	methods: {
		getAntimicrobials: function () {
			var params = this.$route.params.antimicrobial
			var antimicrobial = []
			this.antimicrobials.forEach((i) => {
				if (i.url === params) {
					antimicrobial.push(i)
				}
			})
			return antimicrobial
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "../assets/stylesheets/components/_antimicrobial.scss"
</style>
