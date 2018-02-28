<template>
  <div id="app">
		<div class="header">
			<h2>Antimicrobial Resistance Register</h2>
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
			<div class="footer">Footer</div>
		</div>
  </div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #000000;
	}

	.wrapper {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: 40px 100px 40px;
	}

	.header {
		grid-column: span 12;
		background: #f6f6f6;
		padding: 1em;
	}

	.menu {
		grid-column: span 4;
		grid-row: span 12;
		padding: 2em;
		margin-left: 10vw;
		text-align: right;
	}

	.content {
		grid-column: span 8;
		grid-row: span 12;
		padding: 2em;
		margin-right: 10vw;
	}

	.footer {
		grid-column: span 12;
		background: #f6f6f6;
		padding: 1em;
	}

	.box {
		background-color: #f6f6f6;
		text-align: left;
		margin-bottom: 2em;
		margin-top: 2em;
		padding: 1em;
	}

	.link {
		display: block;
		color: #000000;
		margin-bottom: 1em;
	}

	.title-head {
		text-align: left;
	}

	.small {
		margin-bottom: 5em;
	}
</style>
