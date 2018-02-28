<template>
	<div>
		<h1 class="title-head">Programmes:</h1>
		<h3 style="color:red; text-align: left;">Data shown below is not exhaustive<br />Programmes will have individual pages<br />Data source can be found <a href="https://odi-amr.herokuapp.com/api/programmes">here</a></h3>
		<div v-for="programme in programmes" :key="programme.id">
			<div class="box">
				<h3>{{ programme.name }}</h3>
				<small>{{ programme.programmeName }}</small>
				<p><strong>Years active: </strong> {{ programme.yearsActive }}</p>
				<p>{{ programme.primaryObjective }}</p>
				<h4>Dataset</h4>
				<p><strong>Storage: </strong>{{ programme.dataset.stored }}</p>
				<p><strong>Format: </strong>{{ programme.dataset.format }}</p>
				<p><strong>Responsibility: </strong>{{ programme.dataset.datasetAccessResponsible }}</p>
				<h4>Methodology</h4>
				<p><strong>Active: </strong>{{ programme.methodology.activeSurveillance }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import {getAllProgrammes} from '../api/programmes'

export default {
	name: 'Programme',
	data () {
		return {
			programmes: [],
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
	}
}
</script>

<style scoped>
</style>
