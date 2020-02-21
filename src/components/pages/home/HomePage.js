import React from 'react';

import { ProjectDescription } from './components/projectDescription';
import { AuthorOfTheDay } from './components/authorOfTheDay';

const getRandomId = (maxNumber) => {
  return Math.floor(Math.random() * Math.floor(maxNumber));
}

const HomePage = () => {
  const authorId = getRandomId(6);

  return (
    <div className="container">
      <ProjectDescription />
      <AuthorOfTheDay
        authorId={authorId}
      />
    </div>
  );
}

export default HomePage;