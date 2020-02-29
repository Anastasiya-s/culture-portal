import React from 'react';
import Select from 'react-select';

import { labelStyles, selectStyles, Container } from './SearchOptions.styles';

const SearchOptionsSelect = ({ name, label, value, onSearchOptionChange, searchOptions, searchOption }) => (
  <Container>
    <label htmlFor={name} style={labelStyles}> 
      {label} 
    </label>
    <Select
      name={name}
      isClearable={false}
      backspaceRemovesValue={false}
      isSearchable={true}
      value={value}
      // defaultInputValue={searchOption.label}
      onChange={(value) =>{onSearchOptionChange(value)}}
      options={searchOptions}
      styles={selectStyles}
    />
  </Container>
);

export default SearchOptionsSelect;