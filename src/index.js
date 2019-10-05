import 'Styles/main.scss';
import Vue from 'vue/dist/vue.min.js';

import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.config.productionTip = false;

import TopNav from 'Components/TopNav.vue';
import Breadcrumbs from 'Components/Breadcrumbs.vue';
import LeftNav from 'Components/LeftNav.vue';

const CompanyPage = {template: '<div>foo</div>'};
const CompanyData = {template: '<div>bar</div>'};



const router = new VueRouter({
	routes: [
		{
			path: '/',
			name: 'Company Page',
			component: CompanyPage
		},
		{
			path: '/company-page',
			name: 'Company Page',
			component: CompanyPage
		},
		{
			path: '/company-data',
			name: 'Company Data',
			component: CompanyData
		}
	]

});

const app = new Vue({
	components: {
		TopNav,
		Breadcrumbs,
		LeftNav
	},
	name: 'App',
	router,
}).$mount('#app');
