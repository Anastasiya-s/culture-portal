import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import { AuthorCard } from './components/author-card';
import { Searchbar } from './components/searchbar';
import '@src/i18n';

const SearchPage = ({ t }) => {
  const authorsArray = t('authors:authors');
  return (
    <div>
      <Searchbar />
      <ul>{authorsArray.map(author => 
        <li key={author.id} >
          <Link to={`/author/${author.id}`} >
            <AuthorCard 
              photo={author.selfie} 
              city={author.spawnPoint} 
              name={author.name}
            />
          </Link>
        </li>)}
      </ul>
    </div>
  )
}

export default withTranslation()(SearchPage);