<template>
    <div class="leftnav">
        <ul>
            <router-link
                    to="/company-data"
                    v-slot="{ href, route, navigate, isActive, isExactActive }"
            >
                <li :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
                    <a :href="href" @click="navigate">Company Data</a>
                </li>
            </router-link>
            <li >
                <a  href="#">Company Table</a>
            </li>
            <router-link
                    to="/company-page"
                    v-slot="{ href, route, navigate, isActive, isExactActive }"
            >
                <li :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
                    <a :href="href" @click="navigate">Company Page</a>
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>

	export default {
		name: 'LeftNav'
	};
</script>
