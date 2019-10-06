<template functional>
    <div class="card">
        <div class="title">
            {{props.title}}
        </div>
        <div v-if="slots().default">
            <slot></slot>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'Card',
		props: {
			title: {
				required: true,
				type: String
			}
		}
	};
</script>
