<template>
	<div class="aboutUsContainer">
		<div class="aboutUsImageContainer">
			<img class="aboutUsImgDesktop" src="/assets/about-us/desktop/about-us-img.png" alt="" />
			<img class="aboutUsImgMobile" src="/assets/about-us/mobile/about-us-img.png" alt="" />
		</div>
		<h2 class="aboutUsTitle">Bemutatkozás</h2>
		<EditableContent template-id="about-us" />
	</div>
</template>

<script setup>
import EditableContent from './EditableContent.vue';
</script>

<style>
.aboutUsContainer {
	background-color: #f2efe5;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 10% 90%;
}

.aboutUsImgDesktop {
	height: auto;
	width: 100%;
}

.aboutUsImgMobile {
	display: none;
}

.aboutUsImageContainer {
	grid-column: 1;
	grid-row: 1/3;
	min-height: 100%;
}

.aboutUsTitle {
	align-items: center;
	color: #808083;
	display: flex;
	font-size: 2.5em;
	grid-column: 2;
	grid-row: 1;
	justify-content: flex-start;
	margin: 2em 0 0 4rem;
}
@media (max-width: 769px) {
	.aboutUsImgDesktop {
		display: none;
	}

	.aboutUsImgMobile {
		display: block;
		height: auto;
		width: 100%;
	}

	.aboutUsContainer {
		display: flex;
		flex-direction: column;
	}

	.aboutUsTitle {
		align-items: center;
		justify-content: center;
		margin: 0;
	}
}
</style>
