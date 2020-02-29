import React from 'react';

import './AuthorFrame.css';

const AuthorFrame = ({birthplace, src, name, yearOfLife, spawnPoint}) => (
  <div className='authorFrame'>
    <h2 style={{ textAlign: 'center' }}>{name}</h2>
    <img className='imgAuthor' src={src} alt={'author ' + name}></img>
    <p style={{ textAlign: 'center' }}>{yearOfLife}</p>
    <p style={{ textAlign: 'center' }}>{birthplace}: {spawnPoint}</p>
  </div>
);

export default AuthorFrame;