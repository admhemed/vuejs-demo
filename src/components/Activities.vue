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
	import {activityToHTML, activityToNumberOfDaysPhrase} from "../factored-out-functions/activity-to-phrase";

	export default {
		name: 'Activities',
		methods: {
			getImgUrl(pic) {
				const images = require.context('../images/', false, /\.png$/);
				return images(`./${pic}.png`);
			},
			activityFirstPhrase: activity => {
				return activityToNumberOfDaysPhrase(activity);
			},
			activitySecondPhrase: activity => {
				return activityToHTML(activity);
			}
		},
		computed: {
			activities () {
				return this.$store.getters.activities
			}
		}
	};
</script>
