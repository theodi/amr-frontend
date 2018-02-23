<template>
	<div class="main">
		<div v-for="company in companies">
			<div class="box">
				<h1>{{ company.name }}</h1>
				<a v-bind:href="company.url">{{ company.name }}</a>
				<h2>Programmes</h2>
				<ul v-for="programme in company.programmes">
					<li>{{ programme }}</li>
				</ul>
				<h2>Antimicrobials</h2>
				<ul v-for="antimicrobial in company.antimicrobials">
					<li>{{ antimicrobial }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Api',
  data () {
    return {
			companies: [],
			errors: []
    }
  },
	created() {
		axios.get('https://odi-amr.herokuapp.com/api/companies')
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

	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.box {
		width: 50vw;
		margin-bottom: 2em;
		border: 1px solid black;
		border-radius: 15px;
	}
</style>
