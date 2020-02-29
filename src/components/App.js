import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./i18n";

import { HomePage } from './pages/home';
import { WorkLogPage } from './pages/worklog';
import { TeamPage } from './pages/teampage';
import { AuthorPage } from './pages/author';
import { SearchPage } from './pages/search';
import { StyleguidePage } from './pages/styleguide';
import { Header } from '@core/header';
import { Footer } from '@core/footer';

import '../design/common.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/worklog" component={WorkLogPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/author/:id" exact component={AuthorPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/styleguide" exact component={StyleguidePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;