import React from 'react';

import { Link } from '../src/components/core/link';

import './../src/components/core/link/link.css';

export default {
	title: 'Link',
	component: Link_example,
};

export const Link_example = () => {
	return (
		<Link text="Пример ссылки" href="#" className="links__item main__item" />
	)
}