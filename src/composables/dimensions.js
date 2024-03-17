import { ref, computed, onUnmounted, onMounted } from 'vue';

const BREAKPOINTS = {
	MOBILE: 767,
	TABLET: 959,
	DESKTOP: 1279
};

const viewportWidth = ref(null);
const setViewportWidth = () => {
	viewportWidth.value = window.innerWidth;
};

const isMobile = computed(() => viewportWidth.value <= BREAKPOINTS.MOBILE);
const isTablet = computed(() => viewportWidth.value > BREAKPOINTS.MOBILE && viewportWidth.value < BREAKPOINTS.TABLET);
const isDesktop = computed(() => viewportWidth.value > BREAKPOINTS.TABLET && viewportWidth.value < BREAKPOINTS.DESKTOP);
const isLargeDesktop = computed(() => viewportWidth.value > BREAKPOINTS.DESKTOP);
export const useDimensions = () => {
	onMounted(() => {
		setViewportWidth();
		window.addEventListener('resize', setViewportWidth);
	});

	onUnmounted(() => {
		window.removeEventListener('resize', setViewportWidth);
	});

	return {
		isMobile,
		isTablet,
		isDesktop,
		isLargeDesktop
	};
};
