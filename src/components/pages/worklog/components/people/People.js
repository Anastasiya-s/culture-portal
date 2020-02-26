import React from "react";

import { GetPerson } from "../getPerson";
import "./../../style.css";
import { withTranslation } from 'react-i18next';

function People({ t }) {
  const team = t('team:team');
  return (

    <table className="table table-bordered">
      <thead className="thead">
        <tr>
          <th>
            Время
        </th>
          <th>
            Фича
        </th>
        </tr>
      </thead>
      <tbody>
        {team.map((v, i) => (
          <GetPerson key={i} prsn={v} />
        ))}
      </tbody>
    </table>
  );
}

export default withTranslation()(People);
