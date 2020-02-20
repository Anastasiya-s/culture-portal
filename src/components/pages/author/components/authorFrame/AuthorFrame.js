import React from 'react';

import './AuthorFrame.css';

const AuthorFrame = (props) => (
  <div className='authorFrame'>
    <img className='imgAuthor' src={props.src} alt={'author ' + props.name}></img>
    <p className='textAuthor'>{props.name}</p>
    <p className='textAuthor'>{props.yearOfLife}</p>
    <p className='textAuthor'>Место рождения: {props.spawnPoint}</p>
  </div>
);

export default AuthorFrame;