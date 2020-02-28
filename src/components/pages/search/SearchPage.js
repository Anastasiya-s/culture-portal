import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import { AuthorCard } from './components/author-card';
import { Searchbar } from './components/searchbar';
import '@src/i18n';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorsArray: [],
      searchOption: 'Name',
      authorsList: null,
    }
    this.onSearchOptionChange = this.onSearchOptionChange.bind(this);
    this.onAuthorsSearchChange = this.onAuthorsSearchChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { t } = props;
    const authorsArray = t('authors:authors');
    if (authorsArray !== state.authorsArray) {
      return { authorsArray: authorsArray }
    } 
    return null;
  }

  onSearchOptionChange(value) {
    this.setState({ searchOption: value })
  }

  onAuthorsSearchChange(arr) {
    this.setState({ authorsList: arr })
  }
  
  render() {
    const authors = this.state.authorsList || this.state.authorsArray;
    return (
      <div>
        <Searchbar 
          authorsList={this.state.authorsArray} 
          searchOption={this.state.searchOption}
          searchOptions={this.state.searchOptions}
          onSearchOptionChange={this.onSearchOptionChange}
          onAuthorsSearchChange={this.onAuthorsSearchChange}
        />
        <ul>{
        authors.map(author => 
          <li key={author.id} >
            <Link to={`/author/${author.id}`} >
              <AuthorCard 
                photo={author.selfie} 
                city={author.spawnPoint} 
                name={author.name}
              />
            </Link>
          </li>)
          }
        </ul>
      </div>
    )
  }
}

export default withTranslation()(SearchPage);