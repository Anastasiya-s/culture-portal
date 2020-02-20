import React from 'react';
import { useParams } from 'react-router-dom';

import { AuthorFrame } from './components/authorFrame';

import authors from '@resources/authors.json';

const AuthorPage = (props) => {
  const { id } = useParams(); 
  return (
    <div>   
      Author Page id={id}
      <AuthorFrame 
      src={authors.ru.authors[id].selfie}
      name={authors.ru.authors[id].name}
      yearOfLife={authors.ru.authors[id].yearOfLife}
      spawnPoint={authors.ru.authors[id].spawnPoint}
      />
    </div>
  ) 
};

export default AuthorPage;