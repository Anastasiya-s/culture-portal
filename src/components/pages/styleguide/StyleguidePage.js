import React from 'react';

import { Main } from './components/main';
import { Parallax } from '@core/parallax';

import './styleguide.scss';

const StyleguidePage = () => (
	<div>
		<Parallax />
		<Main />
	</div>
);

export default StyleguidePage;