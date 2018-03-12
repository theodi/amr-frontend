<template>
	<div>
		<h2 class="title-head">Methodology</h2>
		<p>The goal of the first phase of this project was to establish a register
		of information about AMR surveillance datasets held by pharmaceutical companies.</p>
		<p>The scope of the register in terms of the information it could contain
		was informed by the timescale of the project. Initial conversations with
		representatives from pharmaceutical companies suggested that gathering the
		kind of information we wanted on their surveillance datasets would not always
		be a simple process.</p>
		<p>We initially compiled a list of fields that it would be desirable to collect
		information on and discussed surveillance methodology with experts from
		partner pharmaceutical companies. We then drafted a questionnaire based on
		these discussions and the project’s aims. After multiple rounds of feedback
		from experts on the project’s steering group, including those from partner
		pharmaceutical companies, we finalised a short eight-page questionnaire.</p>
		<p>We contacted representatives from twelve major pharmaceutical companies
		explaining the project and asking them to fill out this questionnaire.
		Initial responses were reviewed and clarified where necessary, in some cases
		involving ongoing discussion. The register contains AMR surveillance programmes
		from six companies, as not all companies had relevant activities to report.</p>
		<p>The responses were then cleaned and converted into JSON format. The data
		structure of the register consists of three types of object: companies,
		surveillance programmes, and antimicrobials. Companies can have multiple
		programmes; programmes can collect data on multiple antimicrobials; and
		antimicrobials can sit within multiple programmes and companies.</p>
		<p>The register was built by the tech team at the Open Data Institute with
		feedback from the project’s steering group.</p>
	</div>
</template>

<script>

export default {
	name: 'About'
}
</script>

<style scoped>
</style>
