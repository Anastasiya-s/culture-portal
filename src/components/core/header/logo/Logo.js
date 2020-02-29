import React from 'react';

import img from './logo.png';

import './logo.scss';

const Logo = () => (
	<>
		<img src={img} alt="logo" className="header-logo" />
	</>
);

export default Logo;