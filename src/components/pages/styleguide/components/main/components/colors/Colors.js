import React from 'react';
import './colors.scss';

const Colors = () => (
	<div className="colors">
		<div>
			<div className="bg__block primary"></div>
			<p className="color-text">Primary color</p>
		</div>
		<div>
			<div className="bg__block secondary"></div>
			<p className="color-text">Secondary color</p>
		</div>
		<div>
			<div className="bg__block primary-text"></div>
			<p className="color-text">Primary-text color</p>
		</div>
		<div>
			<div className="bg__block secondary-text"></div>
			<p className="color-text">Secondary-text color</p>
		</div>
	</div>
);

export default Colors;