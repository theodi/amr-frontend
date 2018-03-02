<template>
  <div id="app">
		<div class="header">
			<h1 style="text-align: center;">AMR RESEARCH INITIATIVE</h1>
		</div>
		<div class="wrapper">
			<div class="menu">
				<!-- <a href="/" class="link">Welcome</a>
				<a href="/about" class="link">About</a>
				<a href="/companies" class="link">Companies</a>
				<a href="/programmes" class="link">Programmes</a> -->
				<router-link :to="{ path: '/' }" class="link">Welcome</router-link>
				<router-link :to="{ path: '/about' }" class="link">About this research</router-link>
				<router-link :to="{ path: '/companies' }" class="link">Companies</router-link>
				<router-link :to="{ path: '/programmes' }" class="link">Programmes</router-link>
			</div>
			<div class="content">
				<router-view></router-view>
			</div>
			<!-- <div class="footer">Footer</div> -->
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
