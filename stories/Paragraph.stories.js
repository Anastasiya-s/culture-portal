import React from 'react';

import { Paragraph } from '../src/components/core/paragraph';

export default {
	title: 'Paragraph',
	component: Paragraph_example,
};

export const Paragraph_example = () => {
	return (
		<Paragraph
			text="Это пример параграфа. 		Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Наш семантика осталось мир гор толку речью. Своего всеми большой, первую на берегу ipsum алфавит до свою имеет снова силуэт буквоград?"
			className="main-paragraph col-lg-5 col-xl-4"
		/>
	)
}