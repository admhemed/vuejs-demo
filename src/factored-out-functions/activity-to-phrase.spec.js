import {activityToHTML, activityToNumberOfDaysPhrase} from "./activity-to-phrase";

describe('activity to phrase functions', () => {
	describe('activityToHTML function', () => {
		test('it transforms an activity into a phrase', () => {
			const activity = {
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
			};
			expect(activityToHTML(activity)).toBe("<a class=\"subject-company\" href=\"#\">cloud orchestration</a> replaced <span class=\"strike-through\">microsoft</span> on <a class=\"number-of-properties\" href='#'>1 property</a>");
		});
	});
	describe('activityToNumberOfDaysPhrase function', () => {
		test('it transforms an activity into a number of days phrase', () => {
			const activity = {
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
			};
			expect(activityToNumberOfDaysPhrase(activity)).toBe("8 days ago");
		});
	});
});
