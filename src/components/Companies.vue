<template>
	<div>
		<h2 class="title-head">Companies</h2>
		<div v-for="c in companies" :key="c.id">
			<div class="box">
				<h3>{{ c.name }}</h3>
				<p>Description</p>
				<div v-for="p in getProgrammes(c.programmes)" :key="p.id">
					<h4>{{ p.name }} Programme</h4>
					<div class="programme-meta">
						<p><strong>Years active: </strong>{{ p.yearsActive }}</p>
						<p><strong>Countries: </strong>{{ p.countriesRegions.length }}</p>
						<p><strong>Studies: </strong>{{ p.numberOfStudies }}</p>
						<router-link :to="'/programmes/' + p.url" class="arrow-right"></router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {getAllCompanies} from '../api/companies'
import {getAllProgrammes} from '../api/programmes'

export default {
	name: 'Companies',
	data () {
		return {
			companies: [],
			programmes: [],
			errors: []
		}
	},
	created () {
		getAllCompanies()
		.then(response => {
			this.companies = response.data.companies
		})
		.catch(e => {
			this.errors.push(e)
		})
		getAllProgrammes()
		.then(response => {
			this.programmes = response.data.programmes
		})
		.catch(e => {
			this.errors.push(e)
		})
	},
	methods: {
		getProgrammes: function (list) {
			let array = []
			list.forEach((i) => {
				array.push(this.programmes[i])
			})
			return array
		}
	}
}
</script>

<style scoped>
	@import "../assets/stylesheets/components/companies.scss"
</style>
