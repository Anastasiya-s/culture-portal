import React from 'react';

import { Input } from '@core/input';

const AuthorsSelect = ({ authorsList, searchOption, onAuthorsSearchChange }) => {

    const onInputChange = (e) => {
      const value = e.target.value;
      const authorsArray = authorsList.filter(author => author[searchOption].toLowerCase().indexOf(value) >= 0);
      onAuthorsSearchChange(authorsArray)
    }

    return (
      <Input onChange={e => onInputChange(e)}/>
    )
  }

export default AuthorsSelect;