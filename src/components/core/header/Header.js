import React from 'react';

import { Logo } from './logo';
import { LngSwitch } from './lngSwitch'
import { Link } from 'react-router-dom';
import { NavPoint } from './navPoint';
import { withTranslation } from 'react-i18next';

import './header.scss';
import '@src/i18n';


const Header = ({ t }) => (
	<header className="header">
		<div className="container-fluid">
			<nav className="nav justify-content-between">
				<Logo />
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
				<LngSwitch />
			</nav>
		</div>
	</header>
);

export default withTranslation()(Header);