import React from 'react';

import { ProjectDescription } from './components/projectDescription';
import { AuthorOfTheDay } from './components/authorOfTheDay';
import { Parallax } from '@core/parallax';

const HomePage = () => {
  return (
    <div className="container">
      <Parallax />
      <ProjectDescription />
      <AuthorOfTheDay />
    </div>
  );
}

export default HomePage;