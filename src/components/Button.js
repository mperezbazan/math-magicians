import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
