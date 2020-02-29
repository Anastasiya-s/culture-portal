import React from 'react';

import { SearchOptionsSelect } from './components/search-options-select';
import { AuthorsSelect } from './components/authors-select';
import { Container } from './Searchbar.styles';

const Searchbar = ({ searchOption, searchOptions, authorsList, onSearchOptionChange, onAuthorsSearchChange, label }) => {
  return (
    <Container>
        <AuthorsSelect 
          authorsList={authorsList} 
          searchOption={searchOption}
          onAuthorsSearchChange={onAuthorsSearchChange}
        />
        <SearchOptionsSelect 
          onSearchOptionChange={onSearchOptionChange}
          searchOption={searchOption}
          name="searchOption"
          label={label}
          searchOptions={searchOptions}
        />
    </Container>
  );
}

export default Searchbar;