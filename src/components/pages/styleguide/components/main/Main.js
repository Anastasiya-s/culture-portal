import React from 'react';
import './main.scss';
import Link from '../../../../core/link/Link';
import Button from '../../../../core/button/Button';
import Input from '../../../../core/input/Input';
import Titles from '../../../../core/titles/Titles';
import Colors from '../main/components/colors/Colors';

const Main = () => (
	<div className="container">
		<div className="main-top d-flex justify-content-between">
			<Link text="Пример ссылки" href="#" />
			<Button text="Пример кнопки" />
			<Input placeholder="Пример инпута" />
		</div>

		<Titles />
		<Colors />
	</div>
);

export default Main;