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
			<div class="table-box">
				<h4>About the data</h4>
				<table class="table table-striped">
					<tbody>
						<tr>
							<td class="td-title"><strong>Isolates collection method:</strong></td>
							<td>{{ p.methodology.isolateCollection }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Types of surveillance:</strong></td>
							<td>{{ p.methodology.specificToSurveillance }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Organism identification:</strong></td>
							<td>{{ p.methodology.organismIdentification }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Methodology and breakpoints:</strong></td>
							<td>{{ p.methodology.methodologyBreakpoints }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Inclusion and exclusion criteria:</strong></td>
							<td>{{ p.methodology.inclusionCriteria }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Are infections hospital or community acquired?</strong></td>
							<td>{{ p.methodology.infectionSourceIdentificationPossible }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Can isolated be identified from the community?</strong></td>
							<td>{{p.methodology.communityIdentificationPossible }}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="table-box">
				<h4>Dataset</h4>
				<table class="table table-striped">
					<tbody>
						<tr>
							<td class="td-title"><strong>Data stored:</strong></td>
							<td>{{ p.dataset.stored }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Data access:</strong></td>
							<td>{{ p.dataset.stored }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Access:</strong></td>
							<td>{{ p.dataset.datasetAccessWho }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Data curator:</strong></td>
							<td>{{ p.dataset.datasetAccessResponsible }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Isolates number:</strong></td>
							<td>{{ p.dataset.isolates }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Format:</strong></td>
							<td>{{ p.dataset.format }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>How is data from previous years added:</strong></td>
							<td>{{ p.dataset.integration }}</td>
						</tr>
					</tbody>
				</table>
			</div>
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

.table-box {
	background-color: #FAFAFA;
	padding: 1em;
	margin-bottom: 2em;
}

td {
	border-top: none;
}

.td-title {
	text-align: right;
	border-right: 2px solid black;
	padding-right: 2em;
	width: 35%;
}
</style>
