import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import {getters} from "../store/index";
import Activities from "../components/Activities"
import {activities} from "../store/data";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Activities Component", () => {
	describe("calling store getter", () => {
		it("it calls getters.activities", () => {
			const mockCallback = jest.fn(({activities}) => activities);
			const store = new Vuex.Store({
				state: {
					activities
				},
				getters: {
					activities:  mockCallback
				}
			});

			const wrapper = shallowMount(Activities, {
				methods: { getImgUrl: pick => '' },
				store,
				localVue
			});
			expect(mockCallback).toHaveBeenCalled()
		});
	});
	describe("component method callings", () => {
		let store;
		beforeEach(() => {
			store = new Vuex.Store({
				state: {
					activities
				},
				getters
			});
		});
		it("it calls getImgUrl method 3 times as the activity.length", () => {
			const mockCallback = jest.fn(pick => '');
			const wrapper = shallowMount(Activities, {
				methods: { getImgUrl: mockCallback },
				store,
				localVue
			});
			expect(mockCallback.mock.calls.length).toBe(activities.length * 3);
		});
		it("it calls activityFirstPhrase 1 time for each activity", () => {
			const mockCallback = jest.fn(() => {});
			const wrapper = shallowMount(Activities, {
				methods: { activityFirstPhrase: mockCallback, getImgUrl: pick => '' },
				store,
				localVue
			});
			expect(mockCallback.mock.calls.length).toBe(activities.length);
		});
		it("it calls activitySecondPhrase 1 time for each activity", () => {
			const mockCallback = jest.fn(() => {});
			const wrapper = shallowMount(Activities, {
				methods: { activitySecondPhrase: mockCallback, getImgUrl: pick => '' },
				store,
				localVue
			});
			expect(mockCallback.mock.calls.length).toBe(activities.length);
		});
	});
	it("it renders as expected", () => {
		const store = new Vuex.Store({
			state: {
				activities: [{
					numberOfDays: 8,
					iconSrc: 'video-platform',
					srcset2: 'video-platform@2x',
					srcset3: 'video-platform@3x',
					subjectCompany: 'cloud orchestration',
					subjectCompanyUrl: '#',
					verb: 'replaced',
					objectCompany: 'microsoft',
					objectCompanyStyle: 'strike-through',
					numberOfProperties: 1
				}]
			},
			getters
		});
		const mockCallback = jest.fn(pick => '');
		const wrapper = shallowMount(Activities, {
			methods: { getImgUrl: mockCallback },
			store,
			localVue
		});

		expect(wrapper.find(".activities").text().replace(/(\r\n|\n|\r)/gm, " ").replace(/\s{2,}/g, ' ')).toBe("8 days ago cloud orchestration replaced microsoft on 1 property")
	})
});
