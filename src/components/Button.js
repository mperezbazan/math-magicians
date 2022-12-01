/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

class Button extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { color, value, columns } = this.props;
    return (
      <div className={`button ${color} col-${columns}`}>
        {value}
      </div>
    );
  }
}
Button.propTypes = {
  color: PropTypes.string,
  value: PropTypes.string.isRequired,
  columns: PropTypes.number,
};
Button.defaultProps = {
  color: 'grey',
  columns: 1,
};

export default Button;
