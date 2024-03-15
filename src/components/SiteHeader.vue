<template>
	<div class="header">
		<h1>Mosolygó mancsok</h1>
		<LanguageSelector />
	</div>
</template>

<script setup>
import LanguageSelector from './LanguageSelector.vue';
</script>

<style>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #f0f0f0;
	padding: 10px 20px;
}
</style>
