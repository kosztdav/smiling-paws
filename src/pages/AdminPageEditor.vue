<template>
	<div class="admin-container">
		<Editor v-model="htmlTemplate" editor-style="height: 320px">
			<template #toolbar>
				<span class="ql-formats">
					<button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
					<button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
					<button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
				</span>
			</template>
		</Editor>
		<button type="button" @click="saveHtmlTemplate">Mentés</button>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useHomeApi } from '../api/home-api';
import Editor from 'primevue/editor';

const APP_STATES = {
	LOADING: 'LOADING',
	SUCCESS: 'SUCCESS',
	ERROR: 'ERROR'
};

const { getAboutUsContent, saveAboutUsContent } = useHomeApi();

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

const saveHtmlTemplate = () => {
	saveAboutUsContent({ content: htmlTemplate.value });
};

onMounted(() => {
	initApp();
});
</script>

<style>
.admin-container {
	width: 60%;
	margin: auto;
}

.ql-editor p {
	margin-bottom: 2em !important;
}
</style>
