import React from 'react';
import { Link } from 'react-router-dom';
import { NavPoint } from './navPoint';
import './header.scss';

const Header = () => (
	<header className="header">
		<div className="container-fluid">
			<nav className="nav justify-content-between">
				<Link to="/">
					<NavPoint text="Главная страница" />
				</Link>
				<Link to="/search">
					<NavPoint text="Поиск по фотографам"  />
				</Link>
				<Link to="/teampage">
					<NavPoint text="Наша команда" />
				</Link>
				<Link to="/styleguide">
					<NavPoint text="Стайлгайд" />
				</Link>
				<Link to="worklog">
					<NavPoint text="Ворклог"  />
				</Link>

			</nav>
		</div>
	</header>
);

export default Header;