<template>
	<div>
		<h1>Programme</h1>
		<router-link :to="{ path: '/' }">Home</router-link>
	</div>
</template>

<script>
import {getAllProgrammes} from '../api/programmes';

export default {
  name: 'Programme',
  data () {
    return {
			programmes: [],
			errors: []
    }
  },
	created() {
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
