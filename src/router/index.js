/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CompaniesPage from '@/components/Companies'
import AboutPage from '@/components/About'
import ProgrammesPage from '@/components/Programmes'
import ProgrammePage from '@/components/Programme'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/about',
			name: 'About',
			component: AboutPage
		},
		{
			path: '/companies',
			name: 'Companies',
			component: CompaniesPage
		},
		{
			path: '/programmes',
			name: 'Programmes',
			component: ProgrammesPage
		},
		{
			path: '/programmes/:programme',
			name: 'Programme',
			component: ProgrammePage
		}
	]
})
