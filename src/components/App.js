import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/home';
import {WorkLogPage} from './pages/worklog';
import { SearchPage } from './pages/search';
import { StyleguidePage } from './pages/styleguide';
import { Header } from '@core/header';
import { Footer } from '@core/footer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/worklog" component={WorkLogPage}/>
          {/*  />
          <Route path="/search" component={SearchPage} />
          <Route path="/styleguide" exact component={StyleguidePage} />
          {/* <Route path="/team" component={TeamPage} />
          <Route path="/personal-info" component={PersonalPage} /> */}
          {/* <Route path="/personal-info" component={PersonalPage} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;