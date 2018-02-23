import Vue from 'vue'
import Router from 'vue-router'
import Amr from '@/components/Amr'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Amr',
			component: Amr
		}
	]
})
