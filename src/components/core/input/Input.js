import React from 'react';

import './input.scss';

const Input = ({ placeholder }) => (
	<input className="form-control" placeholder={placeholder}></input>
);

export default Input;