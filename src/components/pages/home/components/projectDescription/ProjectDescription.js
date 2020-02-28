import React from 'react';
import { withTranslation } from 'react-i18next';

import Title1 from '@core/titles/components/title1/Title1';
import Paragraph from '@core/paragraph/Paragraph';

import './style.css';

const ProjectDescription = ({ t }) => (
  <div className="project-description">
    <Title1 className="project-description__title" text={t('controls:title')} />
    {t('description:text').map((v, i) => (<Paragraph
      text={v} key={i}
    />))}
  </div>
);

export default withTranslation()(ProjectDescription);