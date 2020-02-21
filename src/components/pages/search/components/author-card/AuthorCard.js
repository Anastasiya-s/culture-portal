import React from 'react';

const AuthorCard = ({ photo, name, city }) => (
  <div>
    <div>
      <img src={photo} alt={name} width="50"/>
    </div>
    <div>{name}</div>
    <div>{city}</div>
  </div>
);

export default AuthorCard;