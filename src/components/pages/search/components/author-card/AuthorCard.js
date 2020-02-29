import React from 'react';

import { Card, Info, Photo, Name, City } from './AuthorCard.style';

const AuthorCard = ({ photo, name, city }) => (
  <Card>
    <Photo src={photo} alt={name} width="50"/>
    <Info>
      <Name>{name}</Name>
      <City>{city}</City>
    </Info>
  </Card>
);

export default AuthorCard;