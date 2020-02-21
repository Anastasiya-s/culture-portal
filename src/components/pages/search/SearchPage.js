import React from 'react';
import { withTranslation } from 'react-i18next';
import '@src/i18n';

import { AuthorCard } from './components/author-card';

const SearchPage = ({t}) => {
  const authorsArray = t('authors:authors');
  return (
  <div>
    Search Page
    <ul>{authorsArray.map(author => <li key={author.id} ><AuthorCard photo={author.selfie} city={author.spawnPoint} name={author.name}/></li>)}</ul>
  </div>
  )
}

export default withTranslation()(SearchPage);