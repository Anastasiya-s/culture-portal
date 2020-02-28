import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import controls_en from "@resources/controls/en/controls.json";
import controls_ru from "@resources/controls/ru/controls.json";
import controls_be from "@resources/controls/be/controls.json";

import content from "@resources/authors.json";
import teamMembers from "@resources/team.json";

import evaluationText_en from "@resources/evaluation/en.json"
import evaluationText_ru from "@resources/evaluation/ru.json"

import description_text from "@resources/description.json"

i18n
  .use(initReactI18next)
  .init({
    returnObjects: true,
    lng: localStorage.getItem("language") || "ru",
    fallback: "ru",
    debug: false,
    appendNamespaceToMissingKey: true,
    joinArrays: true,

    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        controls: controls_en,
        authors: content.en,
        team: teamMembers.en,
        evaluation: evaluationText_en,
        description: description_text.en
      },
      ru: {
        controls: controls_ru,
        authors: content.ru,
        team: teamMembers.ru,
        evaluation: evaluationText_ru,
        description: description_text.ru
      },
      be: {
        controls: controls_be,
        authors: content.be,
        team: teamMembers.be,
        evaluation: evaluationText_ru,
        description: description_text.be
      },
    },
  });


export default i18n;