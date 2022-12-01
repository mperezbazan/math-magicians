import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { handleClick } = this.props;
    handleClick(e.target.value);
  }

  render() {
    const { color, value, columns } = this.props;
    return (
      <button type="button" className={`button ${color} col-${columns}`} onClick={this.handleClick} value={value}>
        {value}
      </button>
    );
  }
}
Button.propTypes = {
  color: PropTypes.string,
  value: PropTypes.string.isRequired,
  columns: PropTypes.number,
  handleClick: PropTypes.func.isRequired,
};
Button.defaultProps = {
  color: 'grey',
  columns: 1,
};

export default Button;
