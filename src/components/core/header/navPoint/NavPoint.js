import React from 'react';

const NavPoint = (props) => (
	<a className="nav-link header__link" href={props.href}>{props.text}</a>
);

export default NavPoint;