<template>
	<div>
		<h2 class="title-head">Research programmes</h2>
		<div v-for="p in programmes" :key="p.id">
			<div class="box">
				<a v-bind:href="/programmes/ + p.url">
					<h3>{{ p.name }}</h3>
				</a>
				<h4 class="title" v-for="c in getCompanies(p.companies)" :key="c.id">{{ c.name }}</h4>
				<div class="programme-meta">
					<p class="years"><strong>Years active: </strong>{{ p.yearsActive }}</p>
					<p class="countries"><strong>Countries: </strong>{{ p.countriesRegions.length }}</p>
					<p class="studies"><strong>Studies: </strong>{{ returnCount(p.numberOfStudies) }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {getAllProgrammes} from '../api/programmes'
import {getAllCompanies} from '../api/companies'

export default {
	name: 'Programme',
	data () {
		return {
			programmes: [],
			companies: [],
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
	},
	methods: {
		getCompanies: function (list) {
			let array = []
			list.forEach((i) => {
				array.push(this.companies[i])
			})
			return array
		},
		returnCount: function (number) {
			return (number === null) ? 0 : number
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "../assets/stylesheets/components/_programmes.scss"
</style>
