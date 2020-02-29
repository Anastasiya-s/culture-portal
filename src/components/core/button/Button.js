import React from 'react';

import './button.scss';

const Button = ({ text, className }) => {
	// const open = (e) => {
	// 	const menuIcon = document.querySelector('.header-btn');
	// 	const points = document.querySelectorAll('.header-link, select');

	// 	if (e.target === menuIcon) {
	// 		points.forEach(point => {
	// 			point.classList.toggle('open');
	// 		})
	// 	}
	// 	if (e.target !== menuIcon) {
	// 		console.log(e.target);
	// 		points.forEach(point => {
	// 			point.classList.remove('open');
	// 		})
	// 	}
	// }

	return (
		<button className={className} onClick={open}>
			{text}
		</button>
	)
};

export default Button;