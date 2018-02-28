<template>
	<div>
		<h1 class="title-head">Companies</h1>
		<div v-for="company in companies">
			<div class="box">
				<h2>
					<a v-bind:href="'/programmes/' + company.url">{{ company.name }}</a>
				</h2>
				<h4>Programmes</h4>
				<ul v-for="programme in company.programmes">
					<li>{{ programme }}</li>
				</ul>
				<h4>Antimicrobials</h4>
				<ul v-for="antimicrobial in company.antimicrobials">
					<li>{{ antimicrobial }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import {getAllCompanies} from '../api/companies'

export default {
	name: 'Companies',
	data () {
		return {
			companies: [],
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
	}
}
</script>

<style scoped>
</style>
