import Vuex from 'vuex';
import {getters} from './index';
import { createLocalVue } from '@vue/test-utils';
import cloneDeep from 'lodash.clonedeep';
import {activities} from "./data";

const localVue = createLocalVue();
localVue.use(Vuex);

describe('store/index.js', () => {
	describe('getters', () => {
		test('activities', () => {
			const state = {
				activities
			};
			const result = getters.activities(state);
			expect(result).toEqual(activities);
		});
	});
});
