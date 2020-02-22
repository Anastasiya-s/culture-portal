import React from 'react';

import Button from '@core/button/Button';
import Title2 from '@core/titles/components/title2/Title2';

import { Link } from "react-router-dom";

import authorsData from '@resources/authors.json';
import './style.scss';

const getAuthorOfTheDay = () => {
  const today = new Date();
  const currentDayOfTheMonth = today.getDate();
  return currentDayOfTheMonth % authorsData.ru.authors.length;
}

const AuthorOfTheDay = () => {
  const authorId = getAuthorOfTheDay();
  const { id, name, selfie, yearOfLife, biography } = authorsData.ru.authors[authorId];

  return (
    <div className="author-container">
      <img src={selfie} alt="author" className="descr-img rounded col-sm-3" />
      <div className="author-info">
        <Title2 text={name} />
        <p>{yearOfLife}</p>
        <p>{biography[0].description}</p>
        <Link to={`/author/${id}`}>
          <Button text="Перейти" />
        </Link>
      </div>
    </div>
  );
}

export default AuthorOfTheDay;