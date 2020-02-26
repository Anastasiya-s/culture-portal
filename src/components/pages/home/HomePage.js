import React from 'react';

import { ProjectDescription } from './components/projectDescription';
import { AuthorOfTheDay } from './components/authorOfTheDay';

const HomePage = () => {
  return (
    <div className="container">
      <ProjectDescription />
      <AuthorOfTheDay />
    </div>
  );
}

export default HomePage;