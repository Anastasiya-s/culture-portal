import React from 'react';

import { SearchOptionsSelect } from './components/search-options-select';
import { AuthorsSelect } from './components/authors-select';

const Searchbar = ({ searchOption, authorsList, onSearchOptionChange, onAuthorsSearchChange }) => {
  return (
    <div>
      <div>
        <AuthorsSelect authorsList={authorsList} searchOption={searchOption} onAuthorsSearchChange={onAuthorsSearchChange}/>
        <SearchOptionsSelect onSearchOptionChange={onSearchOptionChange} searchOption={searchOption}/>
      </div>
    </div>
  );
}

export default Searchbar;