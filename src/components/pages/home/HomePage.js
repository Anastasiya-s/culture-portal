import React from 'react';
import { Link } from 'react-router-dom'

import { Header } from './components/header';

const HomePage = () => (
  <div>
    <Header />
    Home Page
    <p><Link to='/author/1'>author1</Link></p>    
  </div>
);

export default HomePage;