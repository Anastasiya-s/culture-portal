import React from 'react';
import { withTranslation } from 'react-i18next';
import '@src/i18n';

import { AuthorCard } from './components/author-card';
import { Parallax } from '@core/parallax';

const SearchPage = ({ t }) => {
  const authorsArray = t('authors:authors');
  return (
    <div>
      <Parallax />
      Search Page
    <ul>{authorsArray.map(author => <li key={author.id} ><AuthorCard photo={author.selfie} city={author.spawnPoint} name={author.name} /></li>)}</ul>
    </div>
  )
}

export default withTranslation()(SearchPage);