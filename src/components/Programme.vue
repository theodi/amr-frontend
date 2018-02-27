<template>
	<div>
		<h1 class="title-head">Programme</h1>
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
