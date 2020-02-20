import React from 'react';
import NavPoint from './navPoint/NavPoint';
import './header.scss';

const Header = () => (
	<header className="header">
		<div className="container-fluid">
			<nav className="nav justify-content-between">
				<NavPoint text="Главная страница" href="#" />
				<NavPoint text="Поиск по фотографам" href="#" />
				<NavPoint text="Наша команда" href="#" />
				<NavPoint text="Стайлгайд" href="#" />
				<NavPoint text="Ворклог" href="#" />
			</nav>
		</div>
	</header>
);

export default Header;