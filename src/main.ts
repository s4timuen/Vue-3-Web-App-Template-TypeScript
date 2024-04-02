import { createApp } from 'vue';
import App from './App.vue';
import { Router } from 'vue-router';
import { createCustomRouter } from '@/router/router.ts';
import i18n from '@/i18n/i18n.ts';
import { Pinia, createPinia } from 'pinia';

const router: Router = createCustomRouter('hash');
const pinia: Pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .use(i18n)
    .mount('#app');
