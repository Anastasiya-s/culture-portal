import React from 'react';
import './titles.scss';
import Title1 from '@core/titles/components/title1/Title1';
import Title2 from '@core/titles/components/title2/Title2';
import Title3 from '@core/titles/components/title3/Title3';
import Title4 from '@core/titles/components/title4/Title4';
import Title5 from '@core/titles/components/title5/Title5';
import Title6 from '@core/titles/components/title6/Title6';

const Titles = () => (
	<div className="titles col-xl-7">
		<Title1 text="Заголовок первого уровня" />
		<Title2 text="Заголовок второго уровня" />
		<Title3 text="Заголовок третьего уровня" />
		<Title4 text="Заголовок четвертого уровня" />
		<Title5 text="Заголовок пятого уровня" />
		<Title6 text="Заголовок шестого уровня" />
	</div>
);

export default Titles;