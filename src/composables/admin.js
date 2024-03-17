import { computed, ref, watch } from 'vue';
import Cookies from 'js-cookie';

const ADMIN_COOKIE = 'admin';

const admin = ref(Cookies.get(ADMIN_COOKIE) == 'true');
const isAdmin = computed(() => admin.value);

watch(admin, () => {
	Cookies.set(ADMIN_COOKIE, admin.value);
});

export const useAdmin = () => ({
	admin,
	isAdmin
});
