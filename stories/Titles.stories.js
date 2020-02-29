import React from 'react';

import { Title1 } from '../src/components/core/titles/components/title1';
import { Title2 } from '../src/components/core/titles/components/title2';
import { Title3 } from '../src/components/core/titles/components/title3';
import { Title4 } from '../src/components/core/titles/components/title4';
import { Title5 } from '../src/components/core/titles/components/title5';
import { Title6 } from '../src/components/core/titles/components/title6';

export default {
	title: 'Titles'
};

export const Title1_example = () => {
	return (
		<Title1 text="Заголовок первого уровня" />
	)
}

export const Title2_example = () => {
	return (
		<Title2 text="Заголовок второго уровня" />
	)
}

export const Title3_example = () => {
	return (
		<Title3 text="Заголовок третьего уровня" />
	)
}

export const Title4_example = () => {
	return (
		<Title4 text="Заголовок четвертого уровня" />
	)
}

export const Title5_example = () => {
	return (
		<Title5 text="Заголовок пятого уровня" />
	)
}

export const Title6_example = () => {
	return (
		<Title6 text="Заголовок шестого уровня" />
	)
}