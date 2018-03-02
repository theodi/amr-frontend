<template>
	<div>
		<div v-for="p in getProgrammes()" :key="p.id">
			<h2>{{ p.name }} Programme</h2>
			<div v-for="c in getCompanies(p.companies)" :key="c.id">
				<strong>Conducted by {{ c.name }}</strong>
			</div>
			<div class="">
				<p>Active: {{ p.yearsActive }}</p>
				<p>Regions: {{ p.countriesRegions }}</p>
				<p>Studies: {{ p.numberOfStudies }}</p>
			</div>
			<h4>Primary objective</h4>
			<p>{{ p.primaryObjective }}</p>
			<h4>Antimicrobials used in this programme</h4>
			<div v-for="a in getAntimicrobials(p.antimicrobials)" :key="a.id">
				<p>Trade name: {{ a.genericName }}</p>
				<p>Class of agent: {{ a.classOfAgent }}</p>
			</div>
			<h4>About the data</h4>
			<p>Isolates collection method: {{ p.methodology.isolateCollection }}</p>
			<p>Types of surveillance: {{ p.methodology.specificToSurveillance }}</p>
			<p>Organism identification: {{ p.methodology.organismIdentification }}</p>
			<p>Methodology and breakpoints: {{ p.methodology.methodologyBreakpoints }}</p>
			<p>Inclusion and exclusion criteria: {{ p.methodology.inclusionCriteria }}</p>
			<p>Are infections hospital or community acquired? {{ p.methodology.infectionSourceIdentificationPossible }}</p>
			<p>Can isolated be identified from the community? {{p.methodology.communityIdentificationPossible }}</p>
			<h4>Dataset</h4>
			<p>Data stored: {{ p.dataset.stored }}</p>
			<p>Data access: {{ p.dataset.stored }}</p>
			<p>Access: {{ p.dataset.datasetAccessWho }}</p>
			<p>Data curator: {{ p.dataset.datasetAccessResponsible }}</p>
			<p>Isolates number: {{ p.dataset.isolates }}</p>
			<p>Format: {{ p.dataset.format }}</p>
			<p>How is data from previous years added: {{ p.dataset.integration }}</p>
			<p></p>
		</div>
	</div>
</template>

<script>
import {getAllProgrammes} from '../api/programmes'
import {getAllCompanies} from '../api/companies'
import {getAllAntimicrobials} from '../api/antimicrobials'

export default {
	name: 'Programme',
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
		}),
		getAllCompanies()
		.then(response => {
			this.companies = response.data.companies
		})
		.catch(e => {
			this.errors.push(e)
		}),
		getAllAntimicrobials()
		.then(response => {
			this.antimicrobials = response.data.antimicrobials
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
		},
		getCompanies: function (list) {
			let array = []
			list.forEach((i) => {
				array.push(this.companies[i])
			})
			return array
		},
		getAntimicrobials: function (list) {
			let array = []
			list.forEach((i) => {
				array.push(this.antimicrobials[i])
			})
			console.log(array)
			return array
		}
	}
}
</script>

<style scoped>
</style>
