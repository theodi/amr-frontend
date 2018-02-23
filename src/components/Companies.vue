<template>
	<div class="main">
		<div v-for="company in companies">
			<div class="box">
				<h1>{{ company.name }}</h1>
				<a v-bind:href="'/#/programmes/' + company.url">{{ company.name }}</a>
				<h3>Programmes</h3>
				<ul v-for="programme in company.programmes">
					<li>{{ programme }}</li>
				</ul>
				<h3>Antimicrobials</h3>
				<ul v-for="antimicrobial in company.antimicrobials">
					<li>{{ antimicrobial }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import {getAllCompanies} from '../api/companies';

export default {
  name: 'Companies',
  data () {
    return {
			companies: [],
			errors: []
    }
  },
	created() {
		getAllCompanies()
		.then(response => {
      this.companies = response.data.companies
    })
    .catch(e => {
      this.errors.push(e)
    })
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
