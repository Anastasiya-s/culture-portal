import React from 'react';

import { AuthorCard } from './components/author-card';

import authors from '@resources/authors.json';

const SearchPage = () => {
  const authorsArray = authors.ru.authors;
  return (
  <div>
    Search Page
    <ul>{authorsArray.map(author => <li key={author.id} ><AuthorCard photo={author.selfie} city={author.spawnPoint} name={author.name}/></li>)}</ul>
  </div>
  )
}

export default SearchPage;