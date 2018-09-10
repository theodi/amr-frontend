<template>
	<div>
		<h2 class="title-head">Antimicrobials</h2>
		<p>An antimicrobial is any substance of natural, semisynthetic or synthetic
		origin that kills microorganisms or inhibits their growth. Antimicrobials
		that target bacteria are called antibiotics. In some cases, antibiotics are
		combined with an additional agent that prevents degradation of the
		antibiotic. Antimicrobials often have a 'generic' name (e.g. amikacin) but
		are sometimes referred to by other names including brand names (e.g. Amikin
		or Amiglyde-V).</p>
		<div v-for="a in sortedArray" :key="a.id">
			<div class="box">
				<a v-bind:href="/antimicrobials/ + a.url">
					<h3>{{ a.name }}</h3>
				</a>
				<div class="programme-meta">
					<p class="years"><strong>Programmes: </strong>{{ a.programmes.length }}</p>
					<p class="years"><strong>In Development: </strong>{{ returnBoolean(a.inDevelopment) }}</p>
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
	},
	methods: {
		returnBoolean: function (i) {
			return (i === true) ? 'Yes' : 'No'
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "../assets/stylesheets/components/_antimicrobials.scss"
</style>
