import React from "react";

import {GetPerson} from "../getPerson";
import  '../../teampage.css' ; 
import { withTranslation } from 'react-i18next';

function People({t}) {  
  const team = t('team:team');
  return (       
    <div className="card-wrap">
     { team.map((v, i) => (
      <GetPerson key={i} prsn={v} />
      ))}
    </div>
  );
}

export default withTranslation()(People);
