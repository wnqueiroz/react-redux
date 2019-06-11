import React from 'react';

import PropTypes from 'prop-types';

import './styles.css';

const defaultProps = {
  value: null
};

const propTypes = {
  value: PropTypes.string
};

const Display = ({ value }) => <div className="display">{value}</div>;

Display.defaultProps = defaultProps;
Display.propTypes = propTypes;

export default Display;
