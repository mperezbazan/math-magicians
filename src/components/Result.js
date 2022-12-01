/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

class Result extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
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
