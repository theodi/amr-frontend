<template>
	<div>
		<h1 class="title-head">Companies</h1>
		<div v-for="c in companies" :key="c.id">
			<div class="box">
				<h2>{{ c.name }}</h2>
				<div v-for="p in getProgrammes(c.programmes)" :key="p.id" class="programme-box">
					<h3>{{ p.name }} Programme</h3>
					<p><strong>Years active: </strong>{{ p.yearsActive }}</p>
					<p><strong>Countries: </strong>{{ p.countriesRegions }}</p>
					<a v-bind:href="'/programmes/' + p.url">Find out more...</a>
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
</style>
