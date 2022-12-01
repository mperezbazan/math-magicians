import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, columns } = this.props;
    return (
      <div className={`result dark-grey col-${columns}`}>
        {value}
      </div>
    );
  }
}
Result.propTypes = {
  value: PropTypes.number.isRequired,
  columns: PropTypes.number,
};
Result.defaultProps = {
  columns: 4,
};

export default Result;
