import React from 'react';

import { SearchOptionsSelect } from './components/search-options-select';
import { AuthorsSelect } from './components/authors-select';

const Searchbar = ({ searchOption, authorsList }) => (
  <div>
    <div>
      <div>{searchOption}</div>
      <AuthorsSelect authorsList={authorsList} searchOption={searchOption}/>
      <SearchOptionsSelect />
    </div>
  </div>
);


export default Searchbar;