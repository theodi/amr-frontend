<template>
	<div>
		<h2 class="title-head">Methodology</h2>
		<p>We initially compiled a list of fields that it would be desirable to
		collect information on and discussed surveillance methodology with experts
		from partner pharmaceutical companies. We then drafted a questionnaire based
		on these discussions and the project’s aims. After multiple rounds of feedback
		from experts on the project’s steering group, including those from partner
		pharmaceutical companies, we finalised a short eight-page questionnaire.
		Many were omitted for future consideration rather than risk overloading the
		companies with requests for information.</p>
		<p>We contacted representatives from twelve major pharmaceutical companies
		explaining the project and asking them to fill out this questionnaire. Initial
		responses were reviewed and clarified where necessary, in some cases involving
		ongoing discussion. The register currently contains AMR surveillance programmes
		from six companies, as not all companies had relevant activities to report
		at this point in time.</p>
		<p>The responses were then cleaned and converted into JSON format. The data
		structure of the register consists of three types of object: companies,
		surveillance programmes, and antimicrobials. Companies can have multiple
		programmes; programmes can collect data on multiple antimicrobials; which
		themselves can sit within multiple programmes and companies.</p>
	</div>
</template>

<script>

export default {
	name: 'About'
}
</script>

<style scoped>
</style>
