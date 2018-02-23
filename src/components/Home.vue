<template>
	<div class="main">
		<h1>Home</h1>
		<router-link :to="{ path: '/companies' }">Companies</router-link>
	</div>
</template>

<script>

export default {
  name: 'Home',
  data () {
  }
}
</script>

<style scoped>
</style>
