import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from './components/header';

const HomePage = () => (
  <div>
    <Header />
    <Link to="/search"> Search </Link>
    Home Page
    <p><Link to='/author/1'>author1</Link></p>    
    <p><Link to='/author/2'>author2</Link></p>    
    <p><Link to='/author/3'>author3</Link></p>    
    <p><Link to='/author/4'>author4</Link></p>    
  </div>
);

export default HomePage;