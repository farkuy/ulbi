import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const backend = new Backend({
    loadPath: '/locales/{{lng}}/{{ns}}.json'
});

i18next
    .use(backend)
    .use(LanguageDetector)
    .init({
        lng: 'ru',
        debug: true, //TODO сделать чтобы только в dev версии показывались логи

        interpolation: {
            escapeValue: false,
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
    })
;