<template>
	<div>
		<h1 class="title-head">Programmes</h1>
		<div v-for="programme in programmes">
			<div class="box">
				<h2>{{ programme.name }}</h2>
				<p>{{ programme }}</p>
			</div>

		</div>

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
