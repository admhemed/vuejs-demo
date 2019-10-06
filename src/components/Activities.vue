<template>
    <div class="activities">
        <div v-for="activity in activities" class="activity">
            <div class="days-ago">
                {{ activityFirstPhrase(activity) }}
            </div>
            <!-- /.days-ago -->

            <div class="activity-image">
                <img
                        :src="getImgUrl(activity.iconSrc)"
                        :srcset="`${getImgUrl(activity.srcset2)} 2x,  ${getImgUrl(activity.srcset3)} 3x`"
                >
            </div>
            <!-- /.activity-image -->

            <div class="statement" v-html="activitySecondPhrase(activity)">

            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'Activities',
		methods: {
			getImgUrl(pic) {
				var images = require.context('../images/', false, /\.png$/)
				return images('./' + pic + ".png")
			},
			activityFirstPhrase: activity => {
				return `${activity.numberOfDays} days ago`;
			},
			activitySecondPhrase: activity => {
				let subjectCompany;
				if (activity.subjectCompanyUrl) {
					subjectCompany = `<a class="subject-company" href="${activity.subjectCompanyUrl}">${activity.subjectCompany}</a>`;
				} else {
					subjectCompany = activity.subjectCompany
				}
				let objectCompany;
				if (activity.objectCompanyStyle) {
					objectCompany = `<span class="${activity.objectCompanyStyle}">${activity.objectCompany}</span>`;
				} else {
					objectCompany = activity.objectCompany
				}
				let numberOfPropertyStatements = '';
				if (activity.numberOfProperties) {
					numberOfPropertyStatements = `on <a class="number-of-properties" href='#'>${activity.numberOfProperties} ${activity.numberOfProperties > 1 ? 'properties' : 'property'}</a>`;
				}
				return `${subjectCompany} ${activity.verb} ${objectCompany} ${numberOfPropertyStatements}`;
			}
		},
		data: function () {
			return {
				activities: [
					{
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
					},
					{
						numberOfDays: 10,
						iconSrc: 'content-delivery',
						srcset2: 'content-delivery@2x',
						srcset3: 'content-delivery@3x',
						subjectCompany: 'express scripts',
						subjectCompanyUrl: '#',
						verb: 'replaced',
						objectCompany: 'microsoft',
						objectCompanyStyle: 'strike-through',
						numberOfProperties: 1
					},
					{
						numberOfDays: 12,
						iconSrc: 'waf-d-dos-security',
						srcset2: 'waf-d-dos-security@2x',
						srcset3: 'waf-d-dos-security@3x',
						subjectCompany: 'kaiser permanente',
						subjectCompanyUrl: '#',
						verb: 'replaced',
						objectCompany: 'microsoft',
						objectCompanyStyle: 'strike-through',
						numberOfProperties: 1
					},
					{
						numberOfDays: 14,
						iconSrc: 'traffic-management',
						srcset2: 'traffic-management@2x',
						srcset3: 'traffic-management@3x',
						subjectCompany: 'molina healthcare',
						subjectCompanyUrl: '#',
						verb: 'replaced',
						objectCompany: 'microsoft',
						objectCompanyStyle: 'strike-through',
						numberOfProperties: 1
					},
					{
						numberOfDays: 15,
						iconSrc: 'dns',
						srcset2: 'dns@2x',
						srcset3: 'dns@3x',
						subjectCompany: 'express scripts',
						subjectCompanyUrl: '#',
						verb: 'replaced',
						objectCompany: 'microsoft',
						objectCompanyStyle: 'strike-through',
						numberOfProperties: 1
					},
					{
						numberOfDays: 16,
						iconSrc: 'performance-monitoring',
						srcset2: 'performance-monitoring@2x',
						srcset3: 'performance-monitoring@3x',
						subjectCompany: 'kaiser permanente',
						subjectCompanyUrl: '#',
						verb: 'replaced',
						objectCompany: 'microsoft',
						objectCompanyStyle: 'strike-through',
						numberOfProperties: 1
					},
					{
						numberOfDays: 17,
						iconSrc: 'saas',
						srcset2: 'saas@2x',
						srcset3: 'saas@3x',
						subjectCompany: 'molina healthcare',
						subjectCompanyUrl: '#',
						verb: 'replaced',
						objectCompany: 'microsoft',
						objectCompanyStyle: 'strike-through',
						numberOfProperties: 1
					},
					{
						numberOfDays: 18,
						iconSrc: 'content-delivery',
						srcset2: 'content-delivery@2x',
						srcset3: 'content-delivery@3x',
						subjectCompany: 'microsoft',
						subjectCompanyUrl: '',
						verb: 'launched',
						objectCompany: 'm-cloud',
					}
				],
			}
		},
	};
</script>
