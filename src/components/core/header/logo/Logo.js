import React from 'react';

import img from './logo.png';
import logoMobile from '../../../../img/favicon.png';

import './logo.scss';

const Logo = () => (
	<>
		<img src={img} alt="logo" className="header-logo" />
		<img src={logoMobile} alt="logo" className="header-logo__mobile" />
	</>
);

export default Logo;