import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/home';
import { StyleguidePage } from './pages/styleguide';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/team" component={TeamPage} />
          <Route path="/search" component={SearchPage} /> */}
          <Route path="/styleguide" exact component={StyleguidePage} />
          {/* <Route path="/personal-info" component={PersonalPage} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;