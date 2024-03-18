<template>
	<div v-if="appState == APP_STATES.TEMPLATE" class="editable-area">
		<div ref="content" class="content-text" v-html="model.htmlContent"></div>
		<svg
			v-if="isAdmin && !isMobile"
			class="edit-icon feather feather-edit"
			fill="none"
			height="24"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			@click="editContent"
		>
			<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
			<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
		</svg>
	</div>
	<div v-if="appState == APP_STATES.EDIT" class="content-editor">
		<Editor v-model="model.htmlContentEdited" editor-style="height:360px">
			<template #toolbar>
				<span class="ql-formats">
					<button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
					<button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
					<button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
				</span>
			</template>
		</Editor>
		<button @click="saveHtmlTemplate">Mentés</button>
		<button @click="cancel">Mégse</button>
	</div>

	<div v-if="appState == APP_STATES.ERROR">
		<h2>Hiba screen</h2>
	</div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useTemplateApi } from '../api/template-api';
import { useAdmin } from '../composables/admin';
import { useDimensions } from '../composables/dimensions';
import Editor from 'primevue/editor';

const APP_STATES = {
	LOADING: 'LOADING',
	TEMPLATE: 'TEMPLATE',
	EDIT: 'EDIT',
	ERROR: 'ERROR'
};

const props = defineProps({
	templateId: {
		type: String,
		required: true
	}
});

const { getTemplate, saveTemplate } = useTemplateApi();
const { isAdmin } = useAdmin();
const { isMobile } = useDimensions();

const appState = ref(APP_STATES.LOADING);
const model = reactive({
	htmlContent: null,
	htmlContentEdited: null
});

const editContent = () => {
	appState.value = APP_STATES.EDIT;
};
const cancel = () => {
	model.htmlContentEdited = model.htmlContent;
	appState.value = APP_STATES.TEMPLATE;
};

const saveHtmlTemplate = async () => {
	try {
		await saveTemplate(props.templateId, { htmlContent: model.htmlContentEdited });
		model.htmlContent = model.htmlContentEdited;
		appState.value = APP_STATES.TEMPLATE;
	} catch {
		appState.value = APP_STATES.ERROR;
	}
};

const initApp = async () => {
	try {
		const { data } = await getTemplate(props.templateId);
		model.htmlContent = data;
		model.htmlContentEdited = data;
		appState.value = APP_STATES.TEMPLATE;
	} catch {
		appState.value = APP_STATES.ERROR;
	}
};

onMounted(() => {
	initApp();
});
</script>

<style>
.content-text {
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	gap: 2.5em;
	height: 100%;
	justify-content: flex-start;
	margin: 4em 0 0 4rem;
	width: 24em;
}

.content-editor {
	grid-column: 2;
	grid-row: 2;
	margin: 4em 0 4em 4rem;
	position: relative;
	width: 38em;
	z-index: 2;
}

.editable-area {
	grid-column: 2;
	grid-row: 2;
	position: relative;
	z-index: 2;
}

.edit-icon {
	position: absolute;
	top: 0;
	right: 10px;
	cursor: pointer;
	opacity: 0;
	transition: opacity 0.3s ease;
}

.editable-area:hover .edit-icon {
	opacity: 0.5;
}

.ql-editor p {
	margin-bottom: 2em !important;
}

@media (max-width: 767px) {
	.content-text {
		margin: 4em auto;
	}

	.content-text p {
		text-align: center;
	}

	.editable-area {
		grid-column: 1;
		grid-row: 3;
	}
}
</style>
