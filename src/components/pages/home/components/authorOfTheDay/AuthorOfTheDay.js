import React from 'react';

import Button from '@core/button/Button';
import Title3 from '@core/titles/components/title3/Title3';
import Title2 from '@core/titles/components/title2/Title2';

import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';

import authorsData from '@resources/authors.json';
import './style.scss';

const getAuthorOfTheDay = () => {
  const today = new Date();
  const currentDayOfTheMonth = today.getDate();
  return currentDayOfTheMonth % authorsData.ru.authors.length;
}

const AuthorOfTheDay = ({ t }) => {
  const authorId = getAuthorOfTheDay();
  const { id, name, selfie, yearOfLife, biography } = t('authors:authors')[authorId];

  return (
    <div className="author-container">
      <img src={selfie} alt="author" className="author-image" />
      <div className="author-info">
        <Title2 text={t('controls:authorOfDay')} />
        <Title3 text={name} />
        <p>{yearOfLife}</p>
        <p>{biography[0].description}</p>
        <Link to={`/author/${id}`}>
          <Button className="btn btn-outline-info main__btn" text={t('controls:showMore')} />
        </Link>
      </div>
    </div>
  );
}

export default withTranslation()(AuthorOfTheDay);