import React from 'react';

import { ProjectDescription } from './components/projectDescription';
import { AuthorOfTheDay } from './components/authorOfTheDay';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: this.getRandomId(7),
    }
  }

  getRandomId(maxNumber) {
    return Math.floor(Math.random() * Math.floor(maxNumber));
  }

  render() {
    return (
      <div className="container">
        <ProjectDescription />
        <AuthorOfTheDay 
          authorId={this.state.authorId}
        />
      </div>
    );
  }
}

export default HomePage;