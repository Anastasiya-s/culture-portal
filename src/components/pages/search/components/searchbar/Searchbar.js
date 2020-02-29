import React from 'react';

import { SearchOptionsSelect } from './components/search-options-select';
import { AuthorsSelect } from './components/authors-select';
import { Container } from './Searchbar.styles';

const Searchbar = ({ searchOption, authorsList, onSearchOptionChange, onAuthorsSearchChange }) => {
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
          // после добавления в локализацию, передавать из searchPage
          label="Search by: "
        />
    </Container>
  );
}

export default Searchbar;