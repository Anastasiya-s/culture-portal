import React from 'react';
import Select from 'react-select';

const searchOptions = [
  { value: 'spawnPoint', label: 'City' },
  { value: 'name', label: 'Name' },
];


const SearchOptionsSelect = ({ onSearchOptionChange }) => { 
    return (
      <Select
        onChange={(e) =>{onSearchOptionChange(e.value)}}
        options={searchOptions}
        name="searchOptions"
      />
    );
  }

export default SearchOptionsSelect;