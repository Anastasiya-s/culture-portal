import React from 'react';

import './input.css';

const Input = ({ placeholder, onChange }) => (
	<input className="form-control" placeholder={placeholder} onChange={onChange}></input>
);

export default Input;