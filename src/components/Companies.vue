<template>
	<div>
		<h1 class="title-head">Companies</h1>
		<div v-for="c in companies">
			<div class="box">
				<h2>{{ c.name }}</h2>
				<h3>Programmes</h3>
				<ul v-for="p in programmeNames(c.programmes)">
					<li><a v-bind:href="'/programmes/' + p.url">{{ p.name }}</a></li>
				</ul>
				<h3>Antimicrobials</h3>
				<ul v-for="a in antimicrobialNames(c.antimicrobials)">
					<li>{{ a.name }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import {getAllCompanies} from '../api/companies'
import {getAllProgrammes} from '../api/programmes'
import {getAllAntimicrobials} from '../api/antimicrobials'

export default {
	name: 'Companies',
	data () {
		return {
			companies: [],
			programmes: [],
			antimicrobials: [],
			errors: [],
		}
	},
	created () {
		getAllCompanies()
		.then(response => {
			this.companies = response.data.companies
		})
		.catch(e => {
			this.errors.push(e)
		}),
		getAllProgrammes()
		.then(response => {
			this.programmes = response.data.programmes
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
    antimicrobialNames: function (list) {
			let array = []
			list.forEach((i) => {
				array.push(this.antimicrobials[i])
			})
			return array
    },
		programmeNames: function(list) {
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
