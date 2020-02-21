import React from 'react';
import i18n from 'i18next';

const LngSwitch = () => {
  return (
  <select value={i18n.language} onChange={(e) => {i18n.changeLanguage(e.target.value); localStorage.setItem("language", i18n.language) }}>
    <option value='ru'>Русский</option>
    <option value='en'>English</option>
    <option value='be'>Беларускі</option>
  </select>
)
};

export default LngSwitch;