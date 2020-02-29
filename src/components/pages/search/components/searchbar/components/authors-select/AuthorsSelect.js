import React from 'react';

import { AuthorsSearchInput } from  './AuthorsSelect.styles';

const AuthorsSelect = ({ authorsList, searchOption, onAuthorsSearchChange }) => {
  
  const onInputChange = (e) => {
    const option = searchOption.value;
    const authorsArray = authorsList.filter(author => {
      const string = author[option].toLowerCase()
      const substring = e.target.value.toLowerCase();
      return string.indexOf(substring) >= 0
      }
    );
      onAuthorsSearchChange(authorsArray);
    }

    return (
      <AuthorsSearchInput onChange={e => onInputChange(e)}/>
    )
  }

export default AuthorsSelect;