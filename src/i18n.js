import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import controls_en from "@resources/controls/en/controls.json";
import controls_ru from "@resources/controls/ru/controls.json";
import controls_be from "@resources/controls/be/controls.json";

import content from "@resources/authors.json";
import team from "@resouces/team.json";

i18n
  .use(initReactI18next)
  .init({
    returnObjects: 'true',
    fallbackLng: 'ru',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        controls: controls_en,
        authors: content.en
      },
      ru: {
        controls: controls_ru,
        authors: content.ru
      },
      be: {
        controls: controls_be,
        authors: content.be
      },
    },
  });


export default i18n;