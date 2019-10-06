import Vue from 'vue/dist/vue.min.js';
import Vuex from 'vuex';
import {activities} from "./data";

Vue.use(Vuex);

export const getters= {
	activities:  ({activities}) => {
		return activities
	}
};
export const store = new Vuex.Store({
	state: {
		activities
	},
	getters
});
