import React from 'react';
import './input.scss';

const Input = (props) => (
	<input className="form-control" placeholder={props.placeholder}></input>
);

export default Input;