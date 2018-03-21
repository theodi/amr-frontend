<template>
	<div>
		<h2 class="title-head">Project overview</h2>
		<p>The aim of this project was to carry out a landscape analysis of current
		surveillance programmes conducted by the pharmaceutical industry.
		Surveillance programmes are routinely performed for pre-regulatory approval
		to show efficacy of the new agent and for post-regulatory governance to monitor
		the susceptibility of clinical isolates to marketed products. Programmes are
		usually global in scope and are conducted via experienced vendors within three
		years of expected filing of the new antibiotic. These may continue post-approval
		to monitor changes in antibiotic resistance patterns and trends at a global,
		regional and local level and to provide healthcare practitioners with
		susceptibility data to support the appropriate use of antibiotics.</p>
		<p>To collect information on current surveillance programmes and their
		methodologies, we drafted a questionnaire with experts’ input from the
		project’s steering group and our partner pharmaceutical companies. The
		questionnaire was then used to survey twelve major pharmaceutical companies.</p>
		<p>Representatives from the following companies were approached and asked to
		fill out the questionnaire: Achaogen, Allergan, GlaxoSmithKline, Johnson &
		Johnson, Merck, The Medicines Company, Melinta Therapeutics, Novartis, Pfizer,
		Roche, Sanofi, and Shionogi.</p>
		<p>Initial responses were reviewed and clarified where necessary, in some
		cases involving ongoing discussion. All companies engaged positively with the
		project. The register currently contains AMR surveillance programmes from six
		companies, as not all companies had relevant activities to report on at the
		time of the survey.</p>
		<p>The information collected may not be comprehensive. Some information was
		omitted for future consideration.</p>
		<p>The responses were then cleaned and converted into JSON format. The data
		structure of the register consists of three types of objects: companies,
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
