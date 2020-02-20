import React from 'react';

const Link = (props) => (
	<a className="links__item" href={props.href}>{props.text}</a>
);

export default Link;