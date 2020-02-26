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
      searchOption: 'spawnPoint'
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { t } = props;
    const authorsArray = t('authors:authors');
    if (authorsArray !== state.authorsArray) {
      return { authorsArray: authorsArray }
    } 
    return null;
  }
  
  render() {
    console.log(this.state.searchOption)
    return (
      <div>
        <Searchbar authorsList={this.state.authorsArray} searchOption={this.state.searchOption}/>
        <ul>{
        this.state.authorsArray.map(author => 
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