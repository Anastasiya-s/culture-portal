import React from 'react';
import { useParams } from 'react-router-dom';

import { AuthorFrame } from './components/authorFrame';
import { AuthorVideo } from './components/authorVideo';
import { AuthorBiography } from './components/authorBiography';

import authors from '@resources/authors.json';

const AuthorPage = (props) => {
  const { id } = useParams();
  console.log(authors.ru.authors[id].video); 
  return (
    <div className='container'>   
      Author Page id={id}
      <AuthorFrame 
        src={authors.ru.authors[id].selfie}
        name={authors.ru.authors[id].name}
        yearOfLife={authors.ru.authors[id].yearOfLife}
        spawnPoint={authors.ru.authors[id].spawnPoint}
      />
      {authors.ru.authors[id].video == 'null' 
        ? '' 
        : <AuthorVideo src={authors.ru.authors[id].video}
      />}
      <AuthorBiography biography={authors.ru.authors[id].biography}/>
      
    </div>
  ) 
};

export default AuthorPage;