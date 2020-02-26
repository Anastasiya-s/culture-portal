import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import controls_en from "@resources/controls/en/controls.json";
import controls_ru from "@resources/controls/ru/controls.json";
import controls_be from "@resources/controls/be/controls.json";

import content from "@resources/authors.json";
import teamMembers from "@resources/team.json";

i18n
  .use(initReactI18next)
  .init({
    returnObjects: 'true',
    lng: localStorage.getItem("language") || "ru",
    fallback: "ru",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        controls: controls_en,
        authors: content.en,
        team:teamMembers.en
      },
      ru: {
        controls: controls_ru,
        authors: content.ru,
        team:teamMembers.ru
      },
      be: {
        controls: controls_be,
        authors: content.be,
        team: teamMembers.be
      },
    },
  });


export default i18n;