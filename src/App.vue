<template>
  <div id="app">
		<div class="header">
			<div class="header-content">
				<h1>AMR RESEARCH INITIATIVE</h1>
				<p>A partnership between the Open Data Institute and Wellcome Trust</p>
			</div>
		</div>
		<div class="wrapper">
			<div class="menu">
				<div class="menu-links">
					<router-link :to="{ path: '/' }" class="link">About</router-link>
					<router-link :to="{ path: '/methodology' }" class="link">Methodology</router-link>
					<router-link :to="{ path: '/companies' }" class="link">Companies</router-link>
					<router-link :to="{ path: '/programmes' }" class="link">Programmes</router-link>
					<router-link :to="{ path: '/antimicrobials' }" class="link">Antimicrobials</router-link>
				</div>
			</div>
			<div class="content">
				<router-view></router-view>
			</div>
			<div class="footer">
			</div>
		</div>
  </div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style lang="scss">
	@import "./assets/stylesheets/application.scss"
</style>
