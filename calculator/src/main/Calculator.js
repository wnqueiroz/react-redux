import React, { Component } from 'react';

import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

export default class Calculator extends Component {
  componentDidMount() {}

  render() {
    const buttons = [
      'AC',
      '/',
      '7',
      '8',
      '9',
      '*',
      '4',
      '5',
      '6',
      '-',
      '1',
      '2',
      '3',
      '+',
      '0',
      '.',
      '='
    ];

    return (
      <div className="calculator">
        <Display value="100" />
        {buttons.map(button => (
          <Button label={button} />
        ))}
      </div>
    );
  }
}
