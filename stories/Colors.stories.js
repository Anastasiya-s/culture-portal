import React from 'react';

import { PrimaryColor } from '../src/components/pages/styleguide/components/main/components/colors/components/primary_color';
import { SecondaryColor } from '../src/components/pages/styleguide/components/main/components/colors/components/secondary_color';
import { PrimaryText } from '../src/components/pages/styleguide/components/main/components/colors/components/primary_text';
import { SecondaryText } from '../src/components/pages/styleguide/components/main/components/colors/components/secondary_text';

import './../src/components/pages/styleguide/components/main/components/colors/colors.css';

export default {
	title: 'Colors'
};

export const Primary_color = () => {
	return (
		<PrimaryColor />
	)
}

export const Secondary_color = () => {
	return (
		<SecondaryColor />
	)
}

export const Primary_text_color = () => {
	return (
		<PrimaryText />
	)
}

export const Secondary_text_color = () => {
	return (
		<SecondaryText />
	)
}