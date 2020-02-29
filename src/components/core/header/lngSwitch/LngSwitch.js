import React from 'react';

import i18n from 'i18next';
import './lngSwitch.scss';

const LngSwitch = () => {
  return (
    <select className="form-control-sm" value={i18n.language} onChange={(e) => { i18n.changeLanguage(e.target.value); localStorage.setItem("language", i18n.language) }}>
      <option value='ru'>Рус</option>
      <option value='en'>En</option>
      <option value='be'>Бе</option>
    </select>
  )
};

export default LngSwitch;