<template>
	<div>
		<div v-for="a in getAntimicrobials()" :key="a.id">
			<div class="head-content-box">
				<h2>{{ a.name }}</h2>
				<div class="meta-box">
					<p><strong>Generic name: </strong>{{ a.genericName }}</p>
					<p><strong>Class of Agent: </strong>{{ a.classOfAgent }}</p>
					<p><strong>Trade names: </strong>{{ a.tradeName }}</p>
					<p><strong>Currently marketed? </strong>{{ a.currentlyMarketed }}</p>
					<p><strong>In development?: </strong>{{ a.inDevelopment }}</p>
					<a v-bind:href="'https://www.whocc.no/atc_ddd_index/?code=' + a.ATC">{{ a.name}} on the WHO website</a>
				</div>
				<h3>Programmes:</h3>
				<div v-for="p in getProgrammes(a.programmes)" :key="p.id">
					<ul>
						<li>{{ p.name }}</li>
					</ul>
				</div>
				<h3>Companies:</h3>
				<div v-for="c in getCompanies(a.companies)" :key="c.id">
					<ul>
						<li>{{ c.name }}</li>
					</ul>
				</div>
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
		},
		getProgrammes: function (list) {
			let array = []
			list.forEach((i) => {
				array.push(this.programmes[i])
			})
			return array
		},
		getCompanies: function (list) {
			let array = []
			list.forEach((i) => {
				array.push(this.companies[i])
			})
			return array
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "../assets/stylesheets/components/_antimicrobial.scss"
</style>
