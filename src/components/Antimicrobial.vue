<template>
	<div>
		<div v-for="a in getAntimicrobials()" :key="a.id">
			<h2>{{ a.name }}</h2>
			<div class="content-box">
				<a v-bind:href="'https://www.whocc.no/atc_ddd_index/?code=' + a.ATC" target="_blank">{{ a.name}} on the WHO website</a>
				<table class="table table-striped">
					<tbody>
						<tr>
							<td class="td-title"><strong>Generic name:</strong></td>
							<td>{{ a.genericName }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Other names:</strong></td>
							<td>{{ removeComma(a.tradeName) }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Class of Agent:</strong></td>
							<td>{{ a.classOfAgent }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>In development?</strong></td>
							<td>{{ returnBoolean(a.inDevelopment) }}</td>
						</tr>
						<tr>
							<td class="td-title"><strong>Currently marketed?</strong></td>
							<td>{{ returnBoolean(a.currentlyMarketed) }}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<h3>Programmes:</h3>
			<div class="content-box">
				<div v-for="p in getProgrammes(a.programmes)" :key="p.id">
					<ul>
						<li>
							<a v-bind:href='"/programmes/" + p.url'>{{ p.name }}</a>
						</li>
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
		},
		returnBoolean: function (i) {
			return (i === true) ? 'Yes' : 'No'
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
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "../assets/stylesheets/components/_antimicrobial.scss"
</style>
