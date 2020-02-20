import React from 'react';
import { useParams } from 'react-router-dom';

// import { Header } from './components/header';

const AuthorPage = (props) => {
  const { id } = useParams(); 
  return (
    <div>   
      Author Page id={id}
    </div>
  ) 
};

export default AuthorPage;