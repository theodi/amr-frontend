<template>
	<div class="main">
		<h1>Company</h1>
		<a href="/">back to home</a>
	</div>
</template>

<script>
import {getAllCompanies} from '../api/companies';

export default {
  name: 'Company',
  data () {
    return {
    }
  },
	created() {
	}
}
</script>

<style scoped>
	h1, h2 {
	  font-weight: normal;
	}

	.box {
		width: 50vw;
		margin-bottom: 2em;
		border: 1px solid black;
		border-radius: 15px;
	}
</style>
