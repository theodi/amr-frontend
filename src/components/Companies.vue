<template>
	<div>
		<h2 class="title-head">Companies</h2>
		<div v-for="c in companies" :key="c.id">
			<div class="box">
				<h3>{{ c.name }}</h3>
				<!-- <p>Description</p> -->
				<div v-for="p in getProgrammes(c.programmes)" :key="p.id">
					<a v-bind:href="/programmes/ + p.url">
						<h4 class="title">{{ p.name }} Programme</h4>
					</a>
					<div class="programme-meta">
						<p class="years"><strong>Years active: </strong>{{ p.yearsActive }}</p>
						<p class="countries"><strong>Countries: </strong>{{ returnCount(p.countriesRegions.length) }}</p>
						<p class="studies"><strong>Studies: </strong>{{ returnCount(p.numberOfStudies) }}</p>
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
			console.log(response.data.companies)
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
		},
		returnCount: function (number) {
			return (number > 0) ? number : 0
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "../assets/stylesheets/components/_companies.scss"
</style>
