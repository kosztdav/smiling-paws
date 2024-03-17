<template>
	<div class="admin-container">
		<label for="admin-checkbox">Admin</label>
		<input id="admin-checkbox" v-model="admin" type="checkbox" />
	</div>
</template>

<script setup>
import { useAdmin } from '../composables/admin';

const { admin } = useAdmin();
</script>

<style>
.admin-container {
	width: 60%;
	margin: auto;
}
</style>
