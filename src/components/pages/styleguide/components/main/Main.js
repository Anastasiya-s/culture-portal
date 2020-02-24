import React from 'react';

import { Title1 } from '@core/titles/components/title1';
import { Link } from '@core/link';
import { Button } from './../../../../core/button';
import { Input } from '@core/input';
import { Titles } from '@core/titles';
import { Colors } from '../main/components/colors';
import { Paragraph } from '@core/paragraph';

import './main.scss';

const Main = () => (
	<div className="container">
		<Title1 text="Руководство по стилю" className="main-title" />

		<div className="main-top d-flex justify-content-between">
			<Link text="Пример ссылки" href="#" className="links__item main__item" />
			<Button text="Пример кнопки" className="btn btn-outline-info main__btn" />
			<Input placeholder="Пример инпута" />
		</div>

		<div className="main-text d-flex justify-content-between align-items-center">
			<Titles />
			<Paragraph
				text="Это пример параграфа. 		Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Наш семантика осталось мир гор толку речью. Своего всеми большой, первую на берегу ipsum алфавит до свою имеет снова силуэт буквоград?"
				className="main-paragraph col-lg-5 col-xl-4" />
		</div>
		<Colors />
	</div>
);

export default Main;