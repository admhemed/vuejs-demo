<template>
    <div class="breadcrumbs">Home &nbsp;&nbsp;/&nbsp;&nbsp; {{currentRouteName}}</div>
    <!-- /.breadcrubs -->
</template>

<script>
	export default {
		name: 'Breadcrumbs',
		computed: {
			currentRouteName() {
				return this.$route.name;
			}
		}
	};
</script>
