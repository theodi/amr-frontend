<template>
	<div>
		<h1 class="title-head">Programmes:</h1>
		<h3 style="color:red; text-align: left;">Data source can be found <a href="https://odi-amr.herokuapp.com/api/programmes">here</a></h3>
		<div v-for="p in programmes" :key="p.id">
			<div class="box">
				<h3>{{ p.name }}</h3>
				<small>{{ p.programmeName }}</small>
				<p><strong>Years active: </strong> {{ p.yearsActive }}</p>
				<p>{{ p.primaryObjective }}</p>
				<router-link :to="'/programmes/' + p.url">More on {{ p.name }}</router-link>
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
