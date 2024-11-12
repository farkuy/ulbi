import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const backend = new Backend({
    // path where resources get loaded from
    loadPath: '/locales/{{lng}}/{{ns}}.json'
});

i18next
    .use(backend)
    .use(LanguageDetector)
    .init({

    })
; // yourOptions should not include backendOptions!