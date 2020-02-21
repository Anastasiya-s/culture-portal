import React from 'react';
import { LngSwitch } from './lngSwitch'
import { Link } from 'react-router-dom';
import { NavPoint } from './navPoint';
import './header.scss';
import { withTranslation } from 'react-i18next';
import '@src/i18n';


const Header = ({ t }) => (
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
			<LngSwitch />
		</div>
	</header>
);

export default withTranslation()(Header);