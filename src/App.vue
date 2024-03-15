<template>
	<div class="appContainer">
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
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	font-family: Arial, Helvetica, sans-serif;
	font-size: clamp(0.5rem, 1.1vw, 2rem);
	line-height: 2em;
}

.appContainer {
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

.menuBar {
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

@media (max-width: 769px) {
	body {
		font-size: clamp(0.5rem, 2.6vw, 1.5rem);
	}

	.menuBar {
		display: none;
	}
}
</style>
