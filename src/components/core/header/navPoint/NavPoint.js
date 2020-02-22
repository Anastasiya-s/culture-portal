import React from 'react';

const NavPoint = ({ href, text }) => (
	<a className="nav-link header__link" href={href}>{text}</a>
);

export default NavPoint;