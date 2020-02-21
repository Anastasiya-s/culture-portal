import React from 'react';

import './AuthorFrame.css';

const AuthorFrame = (props) => (
  <div className='authorFrame'>
    <h2 style={{ textAlign: 'center' }}>{props.name}</h2>
    <img className='imgAuthor' src={props.src} alt={'author ' + props.name}></img>
    <p style={{ textAlign: 'center' }}>{props.yearOfLife}</p>
    <p style={{ textAlign: 'center' }}>{props.birthplace}: {props.spawnPoint}</p>
  </div>
);

export default AuthorFrame;