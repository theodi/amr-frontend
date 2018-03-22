<template>
  <div id="app">
		<div class="header">
			<div class="header-content">
				<h1>AMR RESEARCH INITIATIVE</h1>
				<p>A partnership between the Open Data Institute and Wellcome Trust</p>
				<title>AMR Register</title>
			</div>
		</div>
		<div class="wrapper">
			<div class="menu">
				<div class="menu-links">
					<router-link :to="{ path: '/' }" class="link">About</router-link>
					<router-link :to="{ path: '/project-overview' }" class="link">Project overview</router-link>
					<router-link :to="{ path: '/companies' }" class="link">Companies</router-link>
					<router-link :to="{ path: '/programmes' }" class="link">Programmes</router-link>
					<router-link :to="{ path: '/antimicrobials' }" class="link">Antimicrobials</router-link>
				</div>
			</div>
			<div class="content">
				<router-view></router-view>
			</div>
		</div>
		<div class="footer">
			<p>The content of this website is licenced under a Attribution-NonCommercial 3.0 Unported <a href="https://creativecommons.org/licenses/by-nc/3.0/" title="(CC BY-NC 3.0) licence" target="_blank">(CC BY-NC 3.0)</a> licence</p>
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
