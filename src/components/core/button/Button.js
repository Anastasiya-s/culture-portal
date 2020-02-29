import React from 'react';

import './button.scss';

const Button = ({ text, className }) => {
	return (
		<button className={className}>
			{text}
		</button>
	)
};

export default Button;