import 'Styles/main.scss';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.config.productionTip = false

import App from 'Components/App.vue';

const CompanyPage = {template: '<div>foo</div>'}
const CompanyData = {template: '<div>bar</div>'}

const router = new VueRouter({
	routes: [
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
	router,
	render: createEle => createEle(App)
}).$mount('#app');
