import React from 'react';

import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  label: PropTypes.string
};

const defaultProps = {
  label: null
};

const Button = ({ label }) => (
  <button type="button" className="button">
    {label}
  </button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
