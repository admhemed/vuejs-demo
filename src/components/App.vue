<template>
    <div id="app">
        <top-nav/>
        <div class="wrapper">


            <breadcrumbs/>

            <div class="content">

content
            </div>
            <left-nav/>

        </div>
        <router-view></router-view>
    </div>
</template>

<script>
	import TopNav from 'Components/TopNav.vue';
	import Breadcrumbs from 'Components/Breadcrumbs.vue';
	import LeftNav from 'Components/LeftNav.vue';

	export default {
		components: {
			TopNav,
			Breadcrumbs,
			LeftNav
		},
		name: 'App'
	};
</script>
