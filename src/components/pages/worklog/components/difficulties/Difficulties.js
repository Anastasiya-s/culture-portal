import React from "react";

import { withTranslation } from 'react-i18next';

function Dificulties({ t }) {
  return (
      <ol>
        {t("difficulties:text").map((v,i)=>(<li key={i}>{v}</li>))}
      </ol>
  );
}

export default withTranslation()(Dificulties);