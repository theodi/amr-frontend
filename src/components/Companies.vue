<template>
	<div>
		<h2 class="title-head">Companies</h2>
		<div v-for="c in sortedArray" :key="c.id">
			<div class="box">
				<h3>{{ c.name }}</h3>
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
			return (number === null) ? 0 : number
		}
	},
	computed: {
		sortedArray: function () {
			function compare (a, b) {
				if (a.name < b.name) {
					return -1
				} if (a.name > b.name) {
					return 1
				}
				return 0
			}
			var array = []
			for (var i = 0; i < this.companies.length; i++) {
				if (this.companies[i].id !== 2 && this.companies[i].id !== 3 && this.companies[i].id !== 5) {
					array.push(this.companies[i])
				}
			}
			return array.sort(compare)
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "../assets/stylesheets/components/_companies.scss"
</style>
