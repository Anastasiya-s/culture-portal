import React from 'react';

import './style.scss';

import authorsData from '@resources/authors.json';
import Button from '@core/button/Button';
import Title2 from '@core/titles/components/title2/Title2';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const AuthorOfTheDay = (props) => {
  const authorId = props.authorId;
  const { name, selfie, yearOfLife, biography } = authorsData.ru.authors[authorId];

  console.log(props.authorId, ' - authorId');

  return (
    <div className="author-container">
      <img src={selfie} alt="author" className="descr-img rounded col-sm-3" />
      <div className="author-info">
        <Title2 text={name} />
        <p>{yearOfLife}</p>
        <p>{biography[0].description}</p>
        <Router>
            <Link to="/styleguide">Link</Link>
        </Router>
      </div>
    </div>
  );
}

export default AuthorOfTheDay;