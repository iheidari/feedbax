import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from './common.en.json';
import commonFr from './common.fr.json';

const resources = {
  en: { translation: commonEn },
  fr: { translation: commonFr }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
