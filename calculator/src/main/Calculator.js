import React, { Component } from 'react';

import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

export default class Calculator extends Component {
  componentDidMount() {}

  buttons = [
    { label: 'AC', action: this.clearMemory, triple: true },
    { label: '/', action: this.setOperation, operation: true },
    { label: '7', action: this.addDigit },
    { label: '8', action: this.addDigit },
    { label: '9', action: this.addDigit },
    { label: '*', action: this.setOperation, operation: true },
    { label: '4', action: this.addDigit },
    { label: '5', action: this.addDigit },
    { label: '6', action: this.addDigit },
    { label: '-', action: this.setOperation, operation: true },
    { label: '1', action: this.addDigit },
    { label: '2', action: this.addDigit },
    { label: '3', action: this.addDigit },
    { label: '+', action: this.setOperation, operation: true },
    { label: '0', action: this.addDigit, double: true },
    { label: '.', action: this.addDigit },
    { label: '=', action: this.setOperation, operation: true }
  ];

  clearMemory = () => {
    console.log('clear');
  };

  setOperation = operation => {
    console.log({ operation });
  };

  addDigit = n => {
    console.log({ n });
  };

  render() {
    return (
      <div className="calculator">
        <Display value="100" />
        {this.buttons.map(({ label, action, ...others }) => (
          <Button label={label} onClick={action || null} {...others} />
        ))}
      </div>
    );
  }
}
