import React from 'react';
import { Link } from 'react-router-dom';
import { NavPoint } from './navPoint';
import './header.scss';
import { withTranslation } from 'react-i18next';
import '@src/i18n';


const Header = ({ t, i18n }) => (
	<header className="header">
		<div className="container-fluid">
			<nav className="nav justify-content-between">
				<Link to="/">
					<NavPoint text={t('controls:mainPage')} />
				</Link>
				<Link to="/search">
					<NavPoint text={t('controls:search')} />
				</Link>
				<Link to="/team">
					<NavPoint text={t('controls:team')} />
				</Link>
				<Link to="/styleguide">
					<NavPoint text={t('controls:styleguide')} />
				</Link>
				<Link to="">
					<NavPoint text={t('controls:worklog')} />
				</Link>
			</nav>
			<select onChange={(e) => {	i18n.changeLanguage(e.target.value);}}>
				<option value='ru'>Пункт 1</option>
				<option value='en'>Пункт 2</option>
				<option value='be'>Пункт 3</option>
			</select>
		</div>
	</header>
);

export default withTranslation()(Header);