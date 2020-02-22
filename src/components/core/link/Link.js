import React from 'react';

import './link.scss';

const Link = ({ href, text }) => (
	<a className="links__item" href={href}>{text}</a>
);

export default Link;