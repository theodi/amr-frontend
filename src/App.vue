<template>
  <div id="app">
		<div class="main">
	    <router-view/>
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
	  color: #2c3e50;
	  margin-top: 60px;
	}

	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

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
