import React from 'react';

import { PrimaryColor } from './components/primary_color';
import { SecondaryColor } from './components/secondary_color';
import { PrimaryText } from './components/primary_text';
import { SecondaryText } from './components/secondary_text';

import './colors.scss';

const Colors = () => (
	<div className="colors d-flex justify-content-between">
		<PrimaryColor />
		<SecondaryColor />
		<PrimaryText />
		<SecondaryText />
	</div>
);

export default Colors;