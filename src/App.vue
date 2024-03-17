<template>
	<div class="app-container">
		<SiteHeader />
		<MenuBar />
		<div class="content">
			<RouterView />
		</div>
	</div>
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue';
import MenuBar from './components/MenuBar.vue';
</script>

<style>

*,
*::after,
*::before {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	font-family: Arial, Helvetica, sans-serif;
	font-size: clamp(0.5rem, 1.1vw, 2rem);
	line-height: 2em;
}

.app-container {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	height: 100vh;
}

.header {
	grid-column: 1/13;
	grid-row: 1;
	position: relative;
	width: 100%;
	z-index: 1;
}

.menu-bar {
	grid-column: 1/3;
	grid-row: 1/3;
	position: relative;
	z-index: 2;
}

.content {
	grid-column: 1/13;
	grid-row: 2;
	position: relative;
	z-index: 1;
}

@media (max-width: 767px) {
	body {
		font-size: clamp(0.5rem, 2.6vw, 1.5rem);
	}

	.menu-bar {
		display: none;
	}
}
</style>
