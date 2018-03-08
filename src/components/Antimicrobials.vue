<template>
	<div>
		{{ antimicrobialList }}
		<h2 class="title-head">Antimicrobials</h2>
		<div v-for="a in sortedArray" :key="a.id">
			<div class="box">
				<a v-bind:href="/antimicrobials/ + a.url">
					<h3>{{ a.name }}</h3>
				</a>
				<p>{{ a }}</p>
				<div class="programme-meta">
					<!-- <p class="years"><strong>Years active: </strong>{{ p.yearsActive }}</p>
					<p class="countries"><strong>Countries: </strong>{{ p.countriesRegions.length }}</p>
					<p class="studies"><strong>Studies: </strong>{{ returnCount(p.numberOfStudies) }}</p> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {getAllAntimicrobials} from '../api/antimicrobials'

export default {
	name: 'Antimicrobials',
	data () {
		return {
			antimicrobials: [],
			errors: []
		}
	},
	created () {
		getAllAntimicrobials()
		.then(response => {
			this.antimicrobials = response.data.antimicrobials
		})
		.catch(e => {
			this.errors.push(e)
		})
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
			return this.antimicrobials.sort(compare)
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "../assets/stylesheets/components/_programmes.scss"
</style>
