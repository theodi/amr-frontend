import Vue from 'vue'
import Router from 'vue-router'
import CompaniesPage from '@/components/Companies'
import ProgrammesPage from '@/components/Programmes'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Companies',
			component: CompaniesPage
		},
		{
			path: '/programmes/:programme',
			name: 'Programmes',
			component: ProgrammesPage
		}
	]
})
