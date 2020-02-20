import React from 'react';
import NavPoint from './navPoint/NavPoint';
import './header.scss';

const Header = () => (
	<header className="header">
		<div className="container-fluid">
			<nav className="nav justify-content-between">
				<NavPoint text="Главная страница" />
				<NavPoint text="Поиск по фотографам" />
				<NavPoint text="Наша команда" />
				<NavPoint text="Стайлгайд" />
				<NavPoint text="Ворклог" />
			</nav>
		</div>
	</header>
);

export default Header;