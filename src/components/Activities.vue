<template>
    <div class="activities">
        {{counter}}
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
		computed: {
			activities () {
				return this.$store.getters.activities
			}
		}
	};
</script>
