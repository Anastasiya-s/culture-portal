import React from 'react';

import { Button } from '../src/components/core/button';

import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Button',
};

export const Button_example = () => {
  return (
    <Button text="Пример кнопки" className="btn btn-outline-info main__btn" />
  )
}