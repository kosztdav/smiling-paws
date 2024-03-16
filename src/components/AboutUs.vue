<template>
	<div class="about-us__container">
		<div class="aboutUsImageContainer">
			<img class="about-us__img--desktop" src="/assets/about-us/desktop/about-us-img.png" alt="" />
			<img class="about-us__img--mobile" src="/assets/about-us/mobile/about-us-img.png" alt="" />
		</div>
		<h2 class="aboutUsTitle">Bemutatkozás</h2>
		<div v-if="appState == APP_STATES.SUCCESS" class="aboutUsText" v-html="htmlTemplate"></div>
		<div v-if="appState == APP_STATES.ERROR">
			<h2>Hiba screen</h2>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useHomeApi } from '../api/home-api';

const APP_STATES = {
	LOADING: 'LOADING',
	SUCCESS: 'SUCCESS',
	ERROR: 'ERROR'
};

const { getAboutUsContent } = useHomeApi();

const appState = ref(APP_STATES.LOADING);
const htmlTemplate = ref(null);

const initApp = async () => {
	try {
		const { data } = await getAboutUsContent();
		htmlTemplate.value = data;
		appState.value = APP_STATES.SUCCESS;
	} catch {
		appState.value = APP_STATES.ERROR;
	}
};

onMounted(() => {
	initApp();
});
</script>

<style>
.about-us__container {
	background-color: #f2efe5;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 10% 90%;
}

.about-us__img--desktop {
	height: auto;
	width: 100%;
}

.about-us__img--mobile {
	display: none;
}

.aboutUsImageContainer {
	grid-column: 1;
	grid-row: 1/3;
	min-height: 100%;
}

.aboutUsText {
	align-items: flex-start;
	color: #b4b4b8;
	display: flex;
	flex-direction: column;
	gap: 2.5em;
	grid-column: 2;
	grid-row: 2;
	height: 100%;
	justify-content: flex-start;
	margin: 4em 0 4em 4rem;
	width: 24em;
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

	.aboutUsText {
		margin: 4em auto 4em auto;
	}

	.aboutUsText p {
		text-align: center;
	}
}
</style>
