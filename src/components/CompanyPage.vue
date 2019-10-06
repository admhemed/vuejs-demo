<template>
    <div class="content-grid">
        <div class="top">
            <company-page-header/>
        </div>
        <!-- /.top -->

        <div class="left">
            <card title="Activities">
                <activities/>
            </card>
        </div>
        <!-- /.left -->

        <div class="right">
            <card title="Similar Companies">
                <similar-companies/>
            </card>
            <card title="Company Spend History">
                <company-spend-history-graph/>
            </card>
            <card title="Company Spend History">
                <company-spend-history-list/>
            </card>
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
	import Card from 'Components/Card.vue';

	export default {
		name: 'CompanyPage',
		components: {
			CompanyPageHeader,
            Activities,
            SimilarCompanies,
            CompanySpendHistoryGraph,
            CompanySpendHistoryList,
            Card
        }
	};
</script>
