<template>
    <div class="content-grid">
        <div class="top">
            <company-page-header/>
        </div>
        <!-- /.top -->

        <div class="left">
            <activities/>
        </div>
        <!-- /.left -->

        <div class="right">
            <similar-companies/>
            <company-spend-history-graph/>
            <company-spend-history-list/>
        </div>
        <!-- /.right -->

    </div>
</template>

<script>
	import CompanyPageHeader from 'Components/CompanyPageHeader.vue';
	import Activities from 'Components/Activities.vue';
	import SimilarCompanies from 'Components/SimilarCompanies.vue';
	import CompanySpendHistoryGraph from 'Components/CompanySpendHistoryGraph.vue';
	import CompanySpendHistoryList from 'Components/CompanySpendHistoryList.vue';

	export default {
		name: 'CompanyPage',
		components: {
			CompanyPageHeader,
            Activities,
            SimilarCompanies,
            CompanySpendHistoryGraph,
            CompanySpendHistoryList
        }
	};
</script>
