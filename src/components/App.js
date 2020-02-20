import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/home';
import { AuthorPage } from './pages/author';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/author/:id" exact component={AuthorPage} />
          {/* <Route path="/team" component={TeamPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/styleguide" component={StylesPage} />
          <Route path="/personal-info" component={PersonalPage} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;