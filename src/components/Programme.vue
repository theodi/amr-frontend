<template>
	<div>
		<div v-for="p in getProgrammes()" :key="p.id">
			<div class="head-content-box">
				<h2>{{ p.name }} Programme</h2>
				<h4 v-for="c in getCompanies(p.companies)" :key="c.id">Conducted by {{ c.name }}</h4>
				<div class="meta-box">
					<div class="meta-content-box">
						<p class="active"><strong>Active: </strong> {{ p.yearsActive }}</p>
						<p class="studies"><strong>Studies: </strong> {{ returnCount(p.numberOfStudies) }}</p>
					</div>
					<p><strong>Regions: </strong>{{ removeComma(p.countriesRegions) }}</p>
					<p></p>
				</div>
				<h3>Primary objective</h3>
				<p>{{ p.primaryObjective }}</p>
			</div>
			<div class="content-box">
				<h3>About the data</h3>
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
			<div class="content-box">
				<h3>Dataset</h3>
				<table class="table table-striped">
					<tbody>
						<tr>
							<td class="td-title"><strong>Data stored:</strong></td>
							<td>{{ p.dataset.stored }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Data access method:</strong></td>
							<td>{{ p.dataset.datasetAccessHow}}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Who can access:</strong></td>
							<td>{{ p.dataset.datasetAccessWho }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Data curator:</strong></td>
							<td>{{ p.dataset.datasetAccessResponsible }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Isolates per year:</strong></td>
							<td>{{ p.dataset.isolates }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Total Isolates:</strong></td>
							<td>{{ p.dataset.totalIsolates }}</td>
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
			<div class="content-box">
				<h3>Antimicrobials used in this programme</h3>
				<div class="anti-box" v-for="a in getAntimicrobials(p.antimicrobials)" :key="a.id">
					<a v-bind:href='"/antimicrobials/" + a.url'>
						<h4>{{ a.genericName }}</h4>
					</a>
					<div class="anti-meta flex-start">
						<p class="trade-name"><strong>Other names: </strong>{{ removeComma(a.tradeName) }}</p>
						<p class="class-name"><strong>Class of agent: </strong>{{ a.classOfAgent }}</p>
					</div>
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
			return array
		},
		removeComma: function (regions) {
			var string = ''
			for (var i = 0; i < regions.length; i++) {
				if (i === (regions.length - 1)) {
					string += regions[i]
				} else {
					string += regions[i] + ', '
				}
			}
			return string
		},
		returnCount: function (number) {
			return (number === null) ? 0 : number
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "../assets/stylesheets/components/_programme.scss"
</style>
