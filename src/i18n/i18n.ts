import { createI18n } from 'vue-i18n';

import en from '@/i18n/en.json';
import de from '@/i18n/de.json';

type MessageSchema = typeof en;

const messages = { en, de };

const browserDefaultLang: string = navigator.language.split('-')[0];

const i18n = createI18n<[MessageSchema], 'en' | 'de'>({
    locale: browserDefaultLang,
    fallbackLocale: 'en',
    legacy: false,
    globalInjection: true,
    messages,
});

export default i18n;
