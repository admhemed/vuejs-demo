import 'Styles/main.scss';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.config.productionTip = false

import App from 'Components/App.vue';

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const router = new VueRouter({
  routes: [{
    path: '/foo',
    name: 'foo',
    component: Foo
  }]

});

const app = new Vue({
  router,
  render: createEle => createEle(App)
}).$mount('#app');
