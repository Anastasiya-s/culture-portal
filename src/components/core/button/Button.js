import React from 'react';
import './button.scss';

const Button = (props) => (
	<button className="btn btn-outline-info">
		{props.text}
	</button>
);

export default Button;