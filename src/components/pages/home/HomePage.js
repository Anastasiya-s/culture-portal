import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from './components/header';

const HomePage = () => (
  <div>
    <Header />
    <p>Home Page</p>
    <p><Link to="/search"> Search </Link></p>
    <p><Link to='/author/0'>author0</Link></p>    
    <p><Link to='/author/1'>author1</Link></p>    
    <p><Link to='/author/2'>author2</Link></p>    
    <p><Link to='/author/3'>author3</Link></p>    
    <p><Link to='/author/4'>author4</Link></p>    
    <p><Link to='/author/5'>author5</Link></p>    
    <p><Link to='/author/6'>author6</Link></p>    
  </div>
);

export default HomePage;