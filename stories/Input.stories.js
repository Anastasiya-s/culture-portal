import React from 'react';

import { Input } from '../src/components/core/input';

import './../src/components/core/input/input.css';

export default {
  title: 'Input',
  component: Input_example,
};

export const Input_example = () => {
  return (
    <Input placeholder="Пример инпута" />
  )
}