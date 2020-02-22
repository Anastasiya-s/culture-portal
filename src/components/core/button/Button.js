import React from 'react';

import './button.scss';

const Button = ({ text }) => (
	<button className="btn btn-outline-info">
		{text}
	</button>
);

export default Button;