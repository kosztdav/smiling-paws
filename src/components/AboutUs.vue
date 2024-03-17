<template>
	<div class="about-us__container">
		<div class="about-us__img-container">
			<img class="about-us__img" :src="'/api/images/about-us'" alt="" />
		</div>
		<div class="about-us__divider-container">
			<picture>
				<source media="(max-width: 767px)" srcset="/assets/about-us/dividers/about-us-upper-divider-mobile.png">
				<img class="about-us__divider" src="/assets/about-us/dividers/about-us-upper-divider.png" alt="">
			</picture>
			<picture>
				<source media="(max-width: 767px)" srcset="/assets/about-us/dividers/about-us-lower-divider-mobile.png">
				<img class="about-us__divider" src="/assets/about-us/dividers/about-us-lower-divider.png" alt="">
			</picture>
		</div>
		<h2 class="about-us__title">Bemutatkozás</h2>
		<EditableContent template-id="about-us" />
	</div>
</template>

<script setup>
import EditableContent from './EditableContent.vue';
</script>

<style>
.about-us__container {
	background-color: #F2EFE5;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 10% 1fr;
	position: relative;
	z-index: 0;
}

.about-us__img {
	flex-shrink: 0;
	min-height: 100%;
	min-width: 100%;
	width: 80vw;
}

.about-us__img-container {
	align-items: center;
	display: flex;
	grid-column: 1;
	grid-row: 1/3;
	height: 42em;
	justify-content: center;
	overflow: hidden;
}

.about-us__divider-container{
	display: flex;
	flex-direction: column;
	grid-column: 1/3;
	grid-row: 1/3;
	justify-content: space-between;
	position: relative;
	z-index: 1;
}

.about-us__divider{
	height: 100%;
	width: 100%;
}

.about-us__title {
	align-items: center;
	color: #808083;
	display: flex;
	font-size: 2.5em;
	grid-column: 2;
	grid-row: 1;
	justify-content: flex-start;
	margin: 2em 0 0 4rem;
	position: relative;
	z-index: 2;
}

@media (max-width: 767px) {
	.about-us__container {
		grid-template-columns: 1fr;
		grid-template-rows: auto;
	}

	.about-us__img-container{
		height: auto;
		grid-column: 1;
		grid-row: 1;
	}

	.about-us__divider-container{
		grid-column: 1;
		grid-row: 1;
	}

	.about-us__title {
		align-items: center;
		grid-column: 1;
		grid-row: 2;
		height: 1em;
		justify-content: center;
		margin: 0;
	}
}
</style>
