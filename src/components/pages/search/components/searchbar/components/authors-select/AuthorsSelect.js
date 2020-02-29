import React from 'react';

import { Input } from '@core/input';

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
      <Input onChange={e => onInputChange(e)}/>
    )
  }

export default AuthorsSelect;