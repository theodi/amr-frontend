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
		<h2>Summary of data in the register</h2>
		<h3>Scope of datasets</h3>
		<p>A total of twelve programmes are currently included in the register.
		Datasets held by pharmaceutical companies covers hundreds of thousands of
		isolates collected from local laboratories in 93 countries across the world.
		While there is underrepresentation of certain regions (e.g. sub-Saharan Africa)
		and some countries are represented by only a single site, companies are making
		a significant contribution to global AMR surveillance by successfully
		collecting high-quality data on clinical isolates from settings where
		currently other robust surveillance data is not available.</p>
		<div class="image-box">
			<img src="../assets/img/overview-1.png" alt="">
			<i>Countries covered by programmes. Size of circle indicates number of programmes.</i>
		</div>
		<p>Regulatory requirements mean that surveillance programmes focusing on a
		company’s own antimicrobials (whether in development or post approval) also
		include a large number of comparator antimicrobials: in total, programmes
		covered 85 antimicrobials. Companies publish multiple scientific papers based
		on data from their programmes. Generally, data published with papers is
		summary data (i.e. reporting percentages susceptible/resistant to
		antimicrobials or showing an MIC distribution) rather than 'raw' MIC data
		for each isolate. Furthermore, it is currently a considerable challenge to
		integrate disparate sources of data together on an ad hoc basis. </p>
		<h3>Programme methodologies</h3>
		<p>Overall, surveillance methods used have more similarities than differences.
		This reflects the standardisation due to regulatory requirements and guidance.
		Furthermore, third parties are often contracted to conduct surveillance by
		pharmaceutical companies, further driving this standardisation.</p>
		<div class="image-box">
			<img src="../assets/img/overview-2.png" alt="">
			<i>A 'surveillance pyramid'. Isolates collected for surveillance by
			pharmaceutical companies represent the top of this pyramid. </i>
		</div>
		<p><strong>Isolate collection:</strong> The majority of programmes actively
		collect bacterial isolates from local labs. These participating labs submit
		isolates from infected patients originally collected as part of routine
		clinical practice. An alternative method is to use a sub-contractor’s stock
		of isolates (e.g. IHMA). All companies included use a straightforward
		laboratory-based surveillance approach, without detailed follow-up such as
		visits to wards.</p>
		<p><strong>Testing methods:</strong> Organism identification and MIC
		methodology are all standardised. Systems are accredited and validated,
		with central laboratories validating all organism identification from
		local labs. Where MIC breakpoints exist for antimicrobials i.e. those not in
		development, companies use CLSI and/or EUCAST breakpoints.</p>
		<p><strong>Infections covered:</strong> Typically organisms come from sites
		that are dependent on the indications for an antimicrobial. Some programmes
		limit the proportion of isolates from a particular site (e.g. urinary tract
		up to 10% of isolates) and some by organism (e.g. 50 isolates of Klebsiella spp.).
		Definitions of infection are left to local clinicians.</p>
		<p><strong>Inclusion and exclusion criteria:</strong> Duplicate isolates are
		excluded from surveillance, but the exact details of this were not explored
		further so the nature of this exclusion may not be the same.</p>
		<h3>About the datasets listed</h3>
		<p><strong>Format and management:</strong> Datasets are stored as databases
		and/or spreadsheets. Databases tended to be managed by external specialised
		companies, whereas pharmaceutical companies use spreadsheets internally.</p>
		<p><strong>Access:</strong> The majority of companies do not currently make
		their datasets widely accessible to the public. Participating investigators
		in surveillance programmes are given access to the relevant part of datasets,
		either by being sent their data on a disc, emailed a spreadsheet, or given
		access to a secure website. Two companies have websites that provide MIC
		distributions that are accessible to the public to some extent at the level of
		country. Data down to site level is not provided, and data is generally not
		downloadable in machine-readable format by members of the public.</p>
		<p><strong>Relationship to other surveillance data:</strong> The data
		collected by pharmaceutical surveillance programmes is based on priority
		specimens sent routinely to laboratories and therefore aligns most closely
		with the following metric included in WHO’s GLASS protocol: "Proportion of
		samples with growth of non-susceptible bacteria of the species and antibiotic
		under surveillance per specimen type" <a href="goo.gl/nQiCiw">(WHO, 2015)</a></p>
	</div>
</template>

<script>

export default {
	name: 'About'
}
</script>

<style scoped>

</style>
