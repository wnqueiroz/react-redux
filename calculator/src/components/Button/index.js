import React from 'react';

import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  label: PropTypes.string,
  operation: PropTypes.string,
  double: PropTypes.string,
  triple: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

const defaultProps = {
  label: null,
  operation: null,
  double: null,
  triple: null
};

const Button = ({ label, operation, double, triple, onClick }) => (
  <button
    type="button"
    className={`
      button 
      ${operation ? 'operation' : ''}
      ${double ? 'double' : ''}
      ${triple ? 'triple' : ''}
    `}
    onClick={() => onClick && onClick(label)}
  >
    {label}
  </button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
